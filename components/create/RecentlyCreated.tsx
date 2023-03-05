import { motion } from "framer-motion";
import Image from "next/image";

import { cx } from "@/lib/cx";

import type { CreateController } from "./controller";

export function RecentlyCreated(props: CreateController) {
  return (
    <motion.div
      className={cx(
        "flex flex-col w-full gap-4 p-6 rounded-md shadow bg-cod-gray-800",
        !props?.savedPallettes?.list?.length && "hidden"
      )}
      //slide in from bottom
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-semibold border-b-2 border-dashed border-silver-900">
        Recently Created
      </h2>
      {props?.savedPallettes?.list.map((pallette) => (
        <Album key={pallette.id} {...pallette} />
      ))}
    </motion.div>
  );
}

type AlbumProps = {
  imageUrl: string;
};

function Album(props: AlbumProps) {
  return (
    <div className="grid grid-cols-4 gap-2">
      <Image
        src={props?.imageUrl}
        height={1000}
        width={1000}
        alt={"album art"}
        placeholder="blur"
        blurDataURL={"/images/placeholder.png"}
        className="transition transform rounded brightness-90 hover:brightness-110"
      />
    </div>
  );
}
