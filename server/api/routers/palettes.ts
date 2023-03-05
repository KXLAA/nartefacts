import { nanoid } from "nanoid";
import { z } from "zod";

import { uploadFile } from "@/lib/aws";
import { CH } from "@/lib/color-helpers";
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
    ? `narefacts-dev-uploads/colors/${fileName}`
    : `narefacts-uploads/colors/${fileName}`;
}
