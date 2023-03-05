import copy from "copy-to-clipboard";
import { motion } from "framer-motion";
import { XCircle } from "lucide-react";
import Image from "next/image";

import type { ColorsTuple } from "@/lib/color-helpers";
import { CH } from "@/lib/color-helpers";
import { useMouseOver } from "@/lib/hooks/use-mouse-over";

import type { CreateController } from "./controller";

interface ImagePreviewProps extends CreateController {
  className?: string;
}

export function ImagePreview(props: ImagePreviewProps) {
  const Preview = preview[props.page.current];
  return props.isUploaded && props?.palette ? <Preview {...props} /> : null;
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

function Home(props: ImagePreviewProps) {
  return (
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
        {props?.palette?.palette && (
          <div className="grid w-full grid-cols-4 gap-1">
            {props.palette.palette.map((color) => (
              <ColorBox key={color} color={color} {...props} />
            ))}
          </div>
        )}

        <div className="self-center p-3 px-6 text-center rounded bg-cod-gray-500 shadow-border-shiny">
          <p className="text-xl font-semibold">{props?.palette?.title}</p>
          <p className="text-sm text-silver-900 font-extralight">
            Generated at 24:53 Monday{" "}
          </p>
        </div>

        <div className="flex items-center self-end justify-end w-full gap-2">
          <button
            className="w-full p-3 rounded bg-cod-gray-500 shadow-border-shiny"
            onClick={() => props.savedPallettes.add(props.palette)}
          >
            Save
          </button>
          <button className="w-full p-3 rounded bg-cod-gray-500 shadow-border-shiny">
            Reset
          </button>
          <button
            className="w-full p-3 rounded bg-cod-gray-500 shadow-border-shiny"
            onClick={props.page.goToExport}
          >
            Export
          </button>
        </div>
      </div>
    </div>
  );
}

function Export(props: ImagePreviewProps) {
  console.log(props);
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
          {props.palette.palette.map((color) => (
            <ColorBox key={color} color={color} {...props} />
          ))}
        </div>
      )}

      <div className="flex items-center self-end justify-end w-full gap-2">
        <button
          className="w-full p-3 rounded bg-cod-gray-500 shadow-border-shiny"
          onClick={() =>
            props.export.asCss(props.palette?.palette as ColorsTuple)
          }
        >
          CSS
        </button>
        <button
          className="w-full p-3 rounded bg-cod-gray-500 shadow-border-shiny"
          onClick={() =>
            props.export.asCode(props.palette?.palette as ColorsTuple)
          }
        >
          CODE
        </button>
      </div>
    </div>
  );
}

function Download(props: ImagePreviewProps) {
  console.log(props);
  return (
    <div>
      <div>
        <p>DOWNLOAD</p>
        <button onClick={props.page.goToHome}>Back</button>
        <button onClick={props.downloadExportedColors}>Download</button>
      </div>
    </div>
  );
}

const preview = {
  home: Home,
  export: Export,
  download: Download,
};
