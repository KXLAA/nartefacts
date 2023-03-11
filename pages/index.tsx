import { AnimatePresence, motion } from "framer-motion";

import { Loader } from "@/components/common/Loader";
import { Album } from "@/components/home/Album";
import { useHomePage } from "@/components/home/controller";
import { HomePageLoader } from "@/components/home/HomePageLoader";
import { Layout } from "@/components/layout/Layout";

export default function Home() {
  const controller = useHomePage();

  return (
    <>
      <Layout className="flex flex-col items-center justify-between w-full min-h-screen p-2">
        <AnimatePresence>
          <motion.div
            className="grid w-full grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-5"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            key="home"
          >
            {controller.isLoading ? (
              <HomePageLoader />
            ) : (
              <>
                <div className="flex flex-col items-center justify-center w-full h-full p-4 rounded bg-cod-gray-500 shadow-border-shiny font-helios">
                  <h1 className="text-4xl font-bold">NARTEFACTS</h1>
                  <p className="text-lg font-light">
                    Colors inspired by African music.
                  </p>
                </div>
                {controller?.albums?.map((album) => (
                  <Album key={album.id} {...album} />
                ))}
              </>
            )}
          </motion.div>
        </AnimatePresence>

        {controller.isFetchingNextPage && <Loader />}

        <div
          style={{ height: "2rem" }}
          ref={controller.ref}
          aria-hidden="true"
        />
      </Layout>
    </>
  );
}
