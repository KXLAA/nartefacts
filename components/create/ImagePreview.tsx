import copy from "copy-to-clipboard";
import { motion } from "framer-motion";
import { XCircle } from "lucide-react";
import Image from "next/image";

import { CH } from "@/lib/color-helpers";
import { useMouseOver } from "@/lib/hooks/use-mouse-over";

import type { CreateController } from "./controller";

interface ImagePreviewProps extends CreateController {
  className?: string;
}

export function ImagePreview(props: ImagePreviewProps) {
  return props.isUploaded && props?.palette ? (
    <div className="grid w-full h-full grid-cols-2 gap-2 p-6 rounded-md shadow bg-cod-gray-800 ">
      <div className="flex flex-col items-center gap-4">
        <Image
          src={props.palette?.imageUrl || "/images/placeholder.png"}
          height={1000}
          width={1000}
          alt={"user uploaded image"}
          placeholder="blur"
          blurDataURL={props.palette?.imageUrl || "/images/placeholder.png"}
          className="rounded"
        />
      </div>

      <div className="flex flex-col justify-between w-full h-full gap-2">
        {props.palette.palette && (
          <div className="grid w-full grid-cols-4 gap-1">
            {props.palette.palette.map((color) => (
              <ColorBox key={color} color={color} {...props} />
            ))}
          </div>
        )}

        <div className="self-center p-3 px-6 text-center rounded bg-cod-gray-500 shadow-border-shiny">
          <p className="text-xl font-semibold">{props.palette.title}</p>
          <p className="text-sm text-silver-900 font-extralight">
            Generated at 24:53 Monday{" "}
          </p>
        </div>

        <div className="flex items-center self-end justify-end w-full gap-2">
          <button className="w-full p-3 rounded bg-cod-gray-500 shadow-border-shiny">
            Save
          </button>
          <button className="w-full p-3 rounded bg-cod-gray-500 shadow-border-shiny">
            Reset
          </button>
          <button className="w-full p-3 rounded bg-cod-gray-500 shadow-border-shiny">
            Export
          </button>
        </div>
      </div>
    </div>
  ) : null;
}

function ColorBox(props: { color: string } & CreateController) {
  const [hoverRef, isHovered] = useMouseOver<HTMLDivElement>();
  const isValidHex = CH.isValidHexCode(props.color);

  return isValidHex ? (
    <div className="flex flex-col items-center justify-center p-2 rounded bg-cod-gray-500 shadow-border-shiny">
      <div
        className="flex items-center justify-center w-full h-20 transition-all rounded opacity-75 hover:opacity-100 aspect-square shadow-border-shiny"
        style={{ backgroundColor: props.color }}
        ref={hoverRef}
      >
        {isHovered && (
          <motion.button
            className="text-sm text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              props.removeColor.mutateAsync({
                color: props.color,
                id: props.palette ? props.palette.id : "",
              });
            }}
          >
            <XCircle className="w-3 h-3" />
          </motion.button>
        )}
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
    </div>
  ) : (
    <div className="flex items-center justify-center w-full h-20 transition-all border border-dashed opacity-75 hover:opacity-100 aspect-square shadow-border-shin border-cod-gray-50" />
  );
}
