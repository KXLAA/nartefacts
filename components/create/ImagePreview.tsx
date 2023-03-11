import copy from "copy-to-clipboard";
import { motion } from "framer-motion";
import { Edit, PlusCircle, Trash } from "lucide-react";
import Image from "next/image";

import { FadeInOut } from "@/components/animation/FadeInOut";
import { GradientBar } from "@/components/home/GradientBar";
import { CH } from "@/lib/color-helpers";
import { formatDate } from "@/lib/date";

import type { CreateController } from "./controller";
import { useColorBox } from "./controller";

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
  return props.palette?.item?.imageUrl ? (
    <FadeInOut className="grid w-full h-full grid-cols-2 gap-2 p-6 rounded-md shadow bg-cod-gray-800">
      <div className="relative flex flex-col items-center gap-4">
        <Image
          src={props.palette?.item.imageUrl}
          height={800}
          width={800}
          alt="user uploaded image"
          placeholder="blur"
          blurDataURL={props.palette?.item.imageUrl}
          className="rounded"
        />

        <div className="absolute bottom-0 self-center w-full p-4 px-6 text-center rounded-b bg-cod-gray-500 shadow-border-shiny">
          <p className="text-xl font-semibold">{props?.palette?.item.title}</p>
          <p className="text-xs text-silver-900 font-extralight">
            Generated on{" "}
            {formatDate(props?.palette?.item.createdAt, "MMMM do, yyyy")}
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-between w-full h-full gap-2">
        <div className="flex flex-col w-full gap-4">
          {props?.palette?.item.palette && (
            <div className="grid w-full grid-cols-4 gap-1">
              {props.palette.item.palette.map((color, i) => (
                <ColorBox
                  key={color ? color : i}
                  index={i}
                  color={color}
                  {...props}
                />
              ))}
            </div>
          )}

          <GradientBar
            css={{
              $$gradient: `linear-gradient(147deg, ${props.palette.item.palette.join(
                ", "
              )})`,
              height: 16,
              borderRadius: 2,
            }}
          />
        </div>

        <div className="flex items-center self-end justify-end w-full gap-2">
          <button
            className="w-full p-2 text-xl font-semibold rounded bg-cod-gray-500 shadow-border-shiny"
            onClick={() => props.savedPallettes.add(props.palette.item)}
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
    </FadeInOut>
  ) : null;
}

function Export(props: ImagePreviewProps) {
  return (
    <FadeInOut className="flex flex-col justify-between w-full h-full max-w-lg gap-4 p-6 rounded-md shadow bg-cod-gray-800">
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

      {props?.palette.item && (
        <div className="grid w-full grid-cols-4 gap-1">
          {props.palette.item.palette.map((color, i) => (
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
    </FadeInOut>
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

type ColorBoxProps = CreateController & {
  color: string;
  index: number;
};
function ColorBox(props: ColorBoxProps) {
  const isValidHex = CH.isValidHexCode(props.color);
  const { color, pickColor, animation, removeColor } = useColorBox({
    color: props.color,
    id: props.palette.item.id,
    setPalette: props.setPalette,
    index: props.index,
  });

  return isValidHex ? (
    <motion.div
      className="flex flex-col items-center justify-center p-2 rounded bg-cod-gray-500 shadow-border-shiny"
      style={{
        ...animation.getRandomTransformOrigin(),
      }}
      custom={props.index}
      variants={animation.variants}
      animate={props.animation.controls}
    >
      <div
        className="flex items-center gap-1 justify-center w-full h-20 text-[8px] font-bold transition-all rounded opacity-75 hover:opacity-100 shadow-border-shiny"
        style={{ backgroundColor: color }}
      >
        {props.editing.isEditing ? (
          <>
            <button
              className="flex items-center justify-center text-center transition-colors rounded-full w-7 aspect-square bg-cod-gray-500 hover:bg-cod-gray-400 shadow-border-shiny"
              onClick={pickColor}
            >
              <Edit className="w-3 text-silver-800" strokeWidth={1.44} />
            </button>
            <button className="flex items-center justify-center text-center transition-colors rounded-full w-7 aspect-square bg-cod-gray-500 hover:bg-cod-gray-400 shadow-border-shiny">
              <Trash
                className="w-3 text-silver-800"
                strokeWidth={1.44}
                onClick={removeColor}
              />
            </button>
          </>
        ) : null}
      </div>

      <motion.span
        className="mt-1 text-sm font-semibold cursor-pointer text-silver"
        onClick={() => copy(color)}
        whileTap={{ scale: 0.95, color: color }}
      >
        {color}
      </motion.span>
    </motion.div>
  ) : (
    <button
      className="flex items-center justify-center w-full transition-all border border-dashed rounded opacity-75 hover:opacity-100 aspect-square shadow-border-shin border-cod-gray-50 h-[120px]"
      onClick={pickColor}
    >
      <PlusCircle size={24} strokeWidth={1.22} />
    </button>
  );
}
