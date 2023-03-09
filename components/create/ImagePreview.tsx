import copy from "copy-to-clipboard";
import { motion } from "framer-motion";
import { Edit, PlusCircle, Trash } from "lucide-react";
import Image from "next/image";

import { CH } from "@/lib/color-helpers";
import { formatDate } from "@/lib/date";

import type { CreateController } from "./controller";

interface ImagePreviewProps extends CreateController {
  className?: string;
}

export function ImagePreview(props: ImagePreviewProps) {
  const Preview = {
    home: Home,
    export: Export,
    download: Download,
  }[props.page.current];

  return props.isUploaded && props?.palette ? <Preview {...props} /> : null;
}

function Home(props: ImagePreviewProps) {
  return props.palette?.imageUrl ? (
    <motion.div
      className="grid w-full h-full grid-cols-2 gap-2 p-6 rounded-md shadow bg-cod-gray-800 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative flex flex-col items-center gap-4">
        <Image
          src={props.palette?.imageUrl}
          height={800}
          width={800}
          alt={"user uploaded image"}
          placeholder="blur"
          blurDataURL={props.palette?.imageUrl}
          className="rounded"
        />

        <div className="absolute bottom-0 self-center w-full p-4 px-6 text-center rounded-b bg-cod-gray-500 shadow-border-shiny">
          <p className="text-xl font-semibold">{props?.palette?.title}</p>
          <p className="text-xs text-silver-900 font-extralight">
            Generated on{" "}
            {formatDate(props?.palette?.createdAt, "MMMM do, yyyy")}
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-between w-full h-full gap-2">
        {props?.palette?.palette && (
          <div className="grid w-full grid-cols-4 gap-1">
            {props.palette.palette.map((color, i) => (
              <ColorBox key={color} index={i} color={color} {...props} />
            ))}
          </div>
        )}

        <div className="flex items-center self-end justify-end w-full gap-2">
          <button
            className="w-full p-2 text-xl font-semibold rounded bg-cod-gray-500 shadow-border-shiny"
            onClick={() => props.savedPallettes.add(props.palette)}
          >
            Save
          </button>
          <button className="w-full p-2 text-xl font-semibold rounded bg-cod-gray-500 shadow-border-shiny">
            Reset
          </button>
          <button
            className="w-full p-2 text-xl font-semibold rounded bg-cod-gray-500 shadow-border-shiny"
            onClick={props.page.goToExport}
          >
            Export
          </button>
          <button
            className="w-full p-2 text-xl font-semibold rounded bg-cod-gray-500 shadow-border-shiny"
            onClick={props.editing.toggle}
          >
            Edit
          </button>
        </div>
      </div>
    </motion.div>
  ) : null;
}

function Export(props: ImagePreviewProps) {
  return (
    <div className="flex flex-col justify-between w-full h-full max-w-lg gap-4 p-6 rounded-md shadow bg-cod-gray-800">
      <div className="flex flex-col gap-1">
        <div className="flex justify-between my-1 border-b border-dashed border-silver-900">
          <p className="text-4xl font-bold">EXPORT</p>
          <button onClick={props.page.goToHome}>HOME</button>
        </div>

        <p className="text-sm font-extralight text-silver-700">
          Export tour Generated Palette as a CSS file or as a code snippet to
          use in your project.
        </p>
      </div>

      {props?.palette?.palette && (
        <div className="grid w-full grid-cols-4 gap-1">
          {props.palette.palette.map((color, i) => (
            <ColorBox key={color} index={i} color={color} {...props} />
          ))}
        </div>
      )}

      <div className="flex items-center self-end justify-end w-full gap-2">
        <button
          className="w-full p-3 rounded bg-cod-gray-500 shadow-border-shiny"
          onClick={props.export.asCss}
        >
          CSS
        </button>
        <button
          className="w-full p-3 rounded bg-cod-gray-500 shadow-border-shiny"
          onClick={props.export.asCode}
        >
          CODE
        </button>
      </div>
    </div>
  );
}

function Download(props: ImagePreviewProps) {
  return (
    <div>
      <div>
        <p>DOWNLOAD</p>
        <button onClick={props.page.goToHome}>Back</button>
        <button onClick={props.exported.download}>Download</button>
      </div>
    </div>
  );
}

function ColorBox(
  props: {
    color: string;
    index: number;
  } & CreateController
) {
  const isValidHex = CH.isValidHexCode(props.color);

  return isValidHex ? (
    <motion.div
      className="flex flex-col items-center justify-center p-2 rounded bg-cod-gray-500 shadow-border-shiny"
      style={{
        ...props.colors.animation.getRandomTransformOrigin(),
      }}
      custom={props.index}
      variants={props.colors.animation.variants}
      animate={props.colors.animation.controls}
    >
      <div
        className="flex items-start justify-between w-full h-20 text-[8px] font-bold transition-all rounded opacity-75 hover:opacity-100 shadow-border-shiny"
        style={{ backgroundColor: props.color }}
      >
        {props.editing.isEditing ? (
          <>
            <button className="flex items-center justify-center w-full transition-colors rounded-full bg-cod-gray-500 hover:bg-cod-gray-400">
              <Edit size={16} strokeWidth={1.22} />
            </button>
            <button className="flex items-center justify-center w-full text-center transition-colors rounded-full bg-cod-gray-500 hover:bg-cod-gray-400">
              <Trash size={16} strokeWidth={1.22} />
            </button>
          </>
        ) : null}
      </div>

      <motion.span
        className="mt-1 text-sm font-semibold cursor-pointer text-silver"
        onClick={() => {
          copy(props.color);
        }}
        whileTap={{ scale: 0.95, color: props.color }}
      >
        {props.color}
      </motion.span>
    </motion.div>
  ) : (
    <button className="flex items-center justify-center w-full transition-all border border-dashed rounded opacity-75 hover:opacity-100 aspect-square shadow-border-shin border-cod-gray-50 h-[120px]">
      <PlusCircle size={24} strokeWidth={1.22} />
    </button>
  );
}
