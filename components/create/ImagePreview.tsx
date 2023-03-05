import { motion } from "framer-motion";
import { XCircle } from "lucide-react";
import Image from "next/image";

import { CH } from "@/lib/color-helpers";
import { useMouseOver } from "@/lib/hooks/use-mouse-over";

import type { CreateController } from "./controllers/imagePreviewController";

interface ImagePreviewProps extends CreateController {
  className?: string;
}

export function ImagePreview(props: ImagePreviewProps) {
  return props.isUploaded && props?.palette ? (
    <div>
      <div className="flex gap-4">
        <button>SAVE</button>
        <button>UPLOAD NEW</button>
        <button>EXPORT</button>
      </div>

      <div className="flex items-start justify-between w-full gap-8 p-6 rounded-md shadow bg-cod-gray-800">
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
          <p className="text-xl">{props.palette.title}</p>
        </div>
        {props.palette.palette && (
          <div className="grid w-full grid-cols-4 gap-1">
            {props.palette.palette.map((color) => (
              <ColorBox key={color} color={color} {...props} />
            ))}
          </div>
        )}
      </div>
    </div>
  ) : null;
}

function ColorBox(props: { color: string } & CreateController) {
  const [hoverRef, isHovered] = useMouseOver<HTMLDivElement>();
  const isValidHex = CH.isValidHexCode(props.color);

  return isValidHex ? (
    <div
      className="flex items-center justify-center w-full h-20 transition-all opacity-75 hover:opacity-100 aspect-square shadow-border-shiny"
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
  ) : (
    <div className="flex items-center justify-center w-full h-20 transition-all border border-dashed opacity-75 hover:opacity-100 aspect-square shadow-border-shin border-cod-gray-50" />
  );
}
