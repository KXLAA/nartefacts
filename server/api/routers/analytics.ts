import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const analyticsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const analytics = await ctx.prisma.analytics.findMany();
    return analytics;
  }),

  update: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const { id } = input;
      const updateAnalytics = await ctx.prisma.analytics.update({
        where: {
          id: id,
        },
        data: {
          generatedPalettes: {
            increment: 1,
          },
        },
      });
      return updateAnalytics;
    }),
});
