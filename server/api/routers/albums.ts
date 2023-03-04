import { nanoid } from "nanoid";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const albumsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.albums.findMany();
  }),
  getOne: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const album = await ctx.prisma.albums.findUnique({
        where: {
          id: input.id,
        },
      });
      //   if (!album) {
      //     throw new Error("Album not found");
      //   }
      return handleNulls(album);
    }),
  getByType: publicProcedure
    .input(z.object({ type: z.string() }))
    .query(async ({ ctx, input }) => {
      const album = await ctx.prisma.albums.findMany({
        where: {
          type: input.type,
        },
      });
      return handleNulls(album);
    }),
  getByTitle: publicProcedure
    .input(z.object({ title: z.string() }))
    .query(async ({ ctx, input }) => {
      const album = await ctx.prisma.albums.findMany({
        where: {
          title: input.title,
        },
      });
      return handleNulls(album);
    }),
  getInfiniteAlbums: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).nullish(),
        cursor: z.string().nullish(),
      })
    )
    .query(async ({ ctx, input }) => {
      const limit = input.limit ?? 50;
      const { cursor } = input;
      const albums = await ctx.prisma.albums.findMany({
        take: limit + 1,
        cursor: cursor ? { id: cursor } : undefined,
        orderBy: {
          id: "asc",
        },
      });

      let nextCursor: typeof cursor | undefined = undefined;
      if (albums.length > limit) {
        const nextItem = albums.pop();
        nextCursor = nextItem!.id;
      }

      return {
        albums,
        nextCursor,
      };
    }),

  addToLike: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const updatedAlbum = await ctx.prisma.albums.update({
        where: {
          id: input.id,
        },
        data: {
          likeCount: {
            increment: 1,
          },
        },
      });
      return handleNulls(updatedAlbum);
    }),

  removeFromLike: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const updatedAlbum = await ctx.prisma.albums.update({
        where: {
          id: input.id,
        },
        data: {
          likeCount: {
            decrement: 1,
          },
        },
      });
      return handleNulls(updatedAlbum);
    }),
});

function handleNulls<T>(input: T) {
  const notFound = "Not found";
  if (!input) {
    return [notFound, null] as const;
  }

  return [null, input] as const;
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
