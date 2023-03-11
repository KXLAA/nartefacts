import { motion } from "framer-motion";
import Image from "next/image";

import { Card } from "@/components/common/Card";
import { Layout } from "@/components/layout/Layout";
import { useSavedPallettes } from "@/lib/hooks/use-saved-pallettes";

export default function Saved() {
  const [savedPallettes] = useSavedPallettes();

  return (
    <Layout
      className="relative flex flex-col items-center justify-between w-full max-w-5xl min-h-screen p-2 m-auto overflow-hidden"
      meta={{
        title: `nartefacts | Saved`,
      }}
    >
      {savedPallettes?.length ? (
        <Card
          dotted
          heading="Saved Pallettes"
          description="Your saved pallettes"
          key="saved-pallettes"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="gap-2 columns-3">
            {savedPallettes?.map((pallette) => (
              <motion.div
                className="flex flex-col gap-2 mb-2"
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
                  alt="album art"
                  placeholder="blur"
                  blurDataURL="/images/placeholder.png"
                  className="transition transform rounded brightness-90 hover:brightness-110"
                />
              </motion.div>
            ))}
          </div>
        </Card>
      ) : null}
    </Layout>
  );
}
