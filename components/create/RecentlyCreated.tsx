import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import NextLink from "next/link";

import { cx } from "@/lib/cx";

import type { CreateController } from "./controller";

export function RecentlyCreated(props: CreateController) {
  return (
    <AnimatePresence>
      {props?.savedPallettes?.list?.length ? (
        <motion.div
          className={cx(
            "flex flex-col w-full gap-4 p-6 rounded-md shadow bg-cod-gray-800"
          )}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          key="recently-created"
        >
          <div className="flex justify-between w-full border-b-2 border-dashed border-silver-900">
            <h2 className="text-3xl font-semibold">Recently Created</h2>
            {props?.savedPallettes?.list.length > 4 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <NextLink href="/saved">View All</NextLink>
              </motion.div>
            ) : null}
          </div>

          <div className="grid grid-cols-4 gap-2">
            {props?.savedPallettes?.list.slice(0, 4).map((pallette) => (
              <motion.div
                className="flex-col gap-2 gflex"
                key={pallette.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Image
                  src={pallette?.imageUrl}
                  height={1000}
                  width={1000}
                  alt={"album art"}
                  placeholder="blur"
                  blurDataURL={"/images/placeholder.png"}
                  className="transition transform rounded brightness-90 hover:brightness-110"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
