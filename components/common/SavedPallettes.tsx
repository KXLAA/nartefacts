import type { palettes } from "@prisma/client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import NextLink from "next/link";

import { Card } from "@/components/common/Card";
import { GradientBar } from "@/components/home/GradientBar";
import { Pallette } from "@/components/home/Pallette";

export type SavedPalettes = palettes & {
  savedAt: Date;
};

type SavedPallettesProps = {
  savedPallettes: SavedPalettes[];
  type: "recent" | "saved";
};

export function SavedPallettes(props: SavedPallettesProps) {
  const isRecent = props.type === "recent";
  const heading = isRecent ? "Recently Created" : "Saved Pallettes";
  const description = isRecent
    ? "Your recently created pallettes"
    : "Your saved pallettes";
  const palettes = isRecent
    ? props?.savedPallettes?.slice(0, 4)
    : props?.savedPallettes;

  return (
    <AnimatePresence>
      {props?.savedPallettes?.length ? (
        <Card
          dotted
          heading={heading}
          description={description}
          key="saved-pallettes"
          addon={
            isRecent && props?.savedPallettes?.length > 4 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <NextLink href="/saved">View All</NextLink>
              </motion.div>
            ) : null
          }
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="relative grid w-full grid-cols-1 gap-2 md:grid-cols-4">
            {palettes.map((palette) => (
              <motion.div
                className="relative flex flex-col w-full gap-2"
                key={palette.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Image
                  src={palette?.imageUrl}
                  height={1000}
                  width={1000}
                  alt="album art"
                  placeholder="blur"
                  blurDataURL="/images/placeholder.png"
                  className="w-full transition transform rounded brightness-90 hover:brightness-110"
                />

                <GradientBar
                  css={{
                    $$gradient: `linear-gradient(147deg, ${palette.palette.join(
                      ", "
                    )})`,
                    height: 16,
                    borderRadius: 2,
                  }}
                />

                <Pallette colors={palette.palette} size="sm" />

                <div className="self-center w-full p-2 px-6 text-center rounded-b bg-cod-gray-500 shadow-border-shiny">
                  <p className="text-sm font-semibold">{palette.title}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* <div className="absolute">
                <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-cod-gray-100 to-cod-gray-200"></div>
                <p>VIEW ALL</p>
              </div> */}
        </Card>
      ) : null}
    </AnimatePresence>
  );
}
