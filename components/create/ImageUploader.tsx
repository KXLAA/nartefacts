import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import type { CreateController } from "./controller";
import { Progress } from "./Progress";

interface ImageUploaderProps extends CreateController {
  className?: string;
}

export function ImageUploader(props: ImageUploaderProps) {
  return (
    <motion.div className="flex flex-col w-full gap-4 p-6 rounded-md bg-cod-gray-700">
      <div
        className="w-full h-40 transition-colors border-[1.5px] border-dashed rounded-md cursor-pointer border-cod-gray-400 hover:bg-white/10 hover:border-silver-700"
        {...props.dropzone.getRootProps()}
      >
        <input {...props.dropzone.getInputProps()} />
      </div>

      <AnimatePresence>
        {props.isLoading ? (
          <motion.div
            key="uploading"
            className="flex items-center justify-between w-full p-3 border rounded-md border-cod-gray-400"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-0.5">
              <p className="font-semibold tex-sm">Uploading ...</p>
              <p className="text-xs font-extralight text-silver-800">
                {props.uploadProgress}% . 5 seconds left
              </p>
              <Progress />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}
