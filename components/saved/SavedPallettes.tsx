import type { palettes } from "@prisma/client";
import { AnimatePresence, motion } from "framer-motion";
import { XCircle } from "lucide-react";
import Image from "next/image";
import NextLink from "next/link";

import { Card } from "@/components/common/Card";
import { GradientBar } from "@/components/home/GradientBar";
import { Pallette } from "@/components/home/Pallette";
import { useMouseOver } from "@/lib/hooks/use-mouse-over";
import { useSavedPallettes } from "@/lib/hooks/use-saved-pallettes";

export type SavedPalettes = palettes & {
  savedAt: Date;
};

type SavedPallettesProps = {
  type: "recent" | "saved";
};

export function SavedPallettes(props: SavedPallettesProps) {
  const controller = useSavedPalettes(props.type);
  const palettes = controller.isRecent
    ? controller?.palettes?.recent
    : controller?.palettes?.saved;

  return (
    <AnimatePresence>
      {controller?.palettes?.saved?.length ? (
        <Card
          dotted
          heading={controller.heading}
          description={controller.description}
          key="saved-pallettes"
          addon={
            controller.isRecent && controller?.palettes?.saved?.length > 4 ? (
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
                ref={controller.hoverRef}
              >
                <motion.button
                  className="absolute right-0 z-10 flex gap-1 p-4 transition-colors hover:text-silver-700 text-silver-900"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => controller.palettes.remove(palette.id)}
                >
                  <XCircle className="w-5 h-5" strokeWidth={2} />
                </motion.button>

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
        </Card>
      ) : null}
    </AnimatePresence>
  );
}

function useSavedPalettes(type: "recent" | "saved") {
  const [hoverRef, isHovered] = useMouseOver<any>();
  const [saved, setSaved] = useSavedPallettes();
  const isRecent = type === "recent";
  const heading = isRecent ? "Recently Created" : "Saved Pallettes";
  const description = isRecent
    ? "Your recently created pallettes"
    : "Your saved pallettes";

  function sortSavedPalettes() {
    return saved.sort(
      (a, b) => Number(new Date(b.savedAt)) - Number(new Date(a.savedAt))
    );
  }

  function remove(id: string) {
    setSaved(saved?.filter((p) => p.id !== id));
  }

  function add(palette: SavedPalettes) {
    setSaved([palette, ...saved]);
  }

  return {
    heading,
    description,
    isRecent,
    hoverRef,
    isHovered,
    palettes: {
      saved: sortSavedPalettes(),
      recent: sortSavedPalettes().slice(0, 4),
      set: setSaved,
      remove,
      add,
    },
  };
}
