import { nanoid } from "nanoid";
import { z } from "zod";

import { uploadFile } from "@/lib/aws";
import { CH } from "@/lib/color-helpers";
import { generateRandomName } from "@/lib/random-name";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const pallettesRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.albums.findMany();
  }),
  getOne: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const palettes = await ctx.prisma.palettes.findUnique({
        where: {
          id: input.id,
        },
      });
      return handleNulls(palettes);
    }),

  removeColor: publicProcedure
    .input(
      z.object({
        color: z.string().nullable(),
        id: z.string(),
        index: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { color } = input;
      const palette = await ctx.prisma.palettes.findUnique({
        where: {
          id: input.id,
        },
      });
      if (!palette) return handleNulls(null);

      if (color === null) {
        const colors = palette.palette.filter((_, i) => i !== input.index);
        const updatedPalette = await ctx.prisma.palettes.update({
          where: {
            id: input.id,
          },
          data: {
            palette: colors,
          },
        });

        return handleNulls(updatedPalette);
      }

      const colors = palette.palette.map((c) => (c === color ? "null" : c));
      const updatedPalette = await ctx.prisma.palettes.update({
        where: {
          id: input.id,
        },
        data: {
          palette: colors,
        },
      });

      return handleNulls(updatedPalette);
    }),

  editColor: publicProcedure
    .input(
      z.object({
        color: z.string(),
        id: z.string(),
        newColor: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { color, newColor } = input;
      const palette = await ctx.prisma.palettes.findUnique({
        where: {
          id: input.id,
        },
      });

      if (!palette) return handleNulls(null);

      const colors = palette.palette.map((c) => (c === color ? newColor : c));
      const updatedPalette = await ctx.prisma.palettes.update({
        where: {
          id: input.id,
        },
        data: {
          palette: colors,
        },
      });

      return handleNulls(updatedPalette);
    }),
  generate: publicProcedure
    .input(z.object({ imageUrl: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const { imageUrl } = input;
      const colors = await CH.getPalette(imageUrl);
      const palette = await ctx.prisma.palettes.create({
        data: {
          v: 0,
          imageUrl,
          palette: colors,
          title: generateRandomName(),
        },
      });

      return handleNulls(palette);
    }),

  export: publicProcedure
    .input(
      z.object({
        colors: z.tuple([
          z.string(),
          z.string(),
          z.string(),
          z.string(),
          z.string(),
          z.string(),
          z.string(),
          z.string(),
        ]),
        type: z.enum(["css", "code"]),
      })
    )
    .mutation(async ({ input }) => {
      const colorsForExport = CH.getColorsForExport(input.type, input.colors);
      let awsUploadedFile;
      try {
        awsUploadedFile = await uploadFile(
          getFileName(input.type),
          colorsForExport
        );
      } catch (error) {
        console.error(error);
      }
      return handleNulls(awsUploadedFile?.Location);
    }),
});

function handleNulls<T>(input: T) {
  const notFound = "Not found";
  if (!input) {
    return [null, notFound] as const;
  }

  return [input, null] as const;
}

function getFileName(type: "css" | "code") {
  const fileName =
    type === "css"
      ? `css/${nanoid()}/colors.scss`
      : `code/${nanoid()}/colors.js`;
  return process.env.NODE_ENV === "development"
    ? `nartefacts-dev-uploads/colors/${fileName}`
    : `nartefacts-uploads/colors/${fileName}`;
}
