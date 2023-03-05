import { albumsRouter } from "@/server/api/routers/albums";
import { analyticsRouter } from "@/server/api/routers/analytics";
import { pallettesRouter } from "@/server/api/routers/palettes";
import { createTRPCRouter } from "@/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  albums: albumsRouter,
  analytics: analyticsRouter,
  palettes: pallettesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
