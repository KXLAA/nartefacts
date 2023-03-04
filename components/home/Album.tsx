import { keyframes, styled } from "@stitches/react";
import { motion } from "framer-motion";
import { Copy, Share } from "lucide-react";
import Image from "next/image";
import React from "react";
import useEyeDropper from "use-eye-dropper";

import cx from "@/lib/cx";
import { useMouseOver } from "@/lib/hooks/use-mouse-over";

type AlbumProps = {
  albumArt: string;
  colors: string[];
  title: string;
  artist: {
    name: string;
  };
};

export function Album(props: AlbumProps) {
  const [hoverRef, isHovered] = useMouseOver<any>();

  return (
    <div className="relative flex flex-col gap-2">
      {isHovered && (
        <motion.div
          className="absolute right-0 flex gap-2 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            className={cx(
              "flex items-center justify-center w-8 h-8 transition-colors  border rounded-full text-silver-800 bg-shark-700 border-shark-600 hover:bg-shark-500 hover:order-shark-400 hover:text-silver-500"
            )}
          >
            <Copy />
          </button>
          <button>
            <Share />
          </button>
        </motion.div>
      )}
      <Image
        ref={hoverRef}
        src={props.albumArt}
        height={1000}
        width={1000}
        alt={"album art"}
        placeholder="blur"
        blurDataURL={"/images/placeholder.png"}
        className="rounded"
      />
      <GradientBar
        css={{
          $$gradient: `linear-gradient(147deg, ${props.colors.join(", ")})`,
        }}
      />

      <Pallette colors={props.colors} />

      <div className="p-2 rounded bg-cod-gray-600 shadow-border-shiny">
        <h3 className="text-lg font-bold">{props.title} </h3>
        <p className="text-sm text-gray-500">{props.artist.name}</p>
      </div>
    </div>
  );
}

function Pallette({ colors }: { colors: string[] }) {
  return (
    <div className="flex gap-1 overflow-auto">
      {colors.map((color) => (
        <ColorBox key={color} color={color} />
      ))}
    </div>
  );
}

function ColorBox({ color }: { color: string }) {
  const [hoverRef, isHovered] = useMouseOver<HTMLDivElement>();

  return (
    <div
      className="flex items-center justify-center w-full h-20 transition-all opacity-75 hover:opacity-100 aspect-square shadow-border-shiny"
      style={{ backgroundColor: color }}
      ref={hoverRef}
    >
      {isHovered && (
        <motion.div
          className="text-sm text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {color}
        </motion.div>
      )}
    </div>
  );
}

const gradientAnimation = keyframes({
  "0%": { backgroundPosition: "0% 50%" },
  "50%": { backgroundPosition: "100% 50%" },
  "100%": { backgroundPosition: "0% 50%" },
});

export const GradientBar = styled("div", {
  background: `$$gradient`,
  backgroundSize: "340% 540%",
  height: "4px",
  width: "100%",
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${gradientAnimation} 15s ease infinite`,
  },
});

function useAlbum() {
  const { open, close, isSupported } = useEyeDropper();
  const [color, setColor] = React.useState("#fff");
  const [error, setError] = React.useState();

  const pickColor = () => {
    open()
      .then((color) => setColor(color.sRGBHex))
      .catch((e) => {
        console.log(e);
        // Ensures component is still mounted
        // before calling setState
        if (!e.canceled) setError(e);
      });
  };

  const imageCallbackRef = React.useCallback((node: HTMLImageElement) => {
    if (node !== null) {
      //call function when image is hovered
      node.addEventListener("mouseover", pickColor);
      //call function when image is no longer hovered
      node.addEventListener("mouseout", close);

      return () => {
        node.removeEventListener("mouseover", pickColor);
        node.removeEventListener("mouseout", close);
      };
    }
  }, []);

  return {
    color,
    pickColor,
    isSupported: isSupported(),
    close,
    error,
    ref: imageCallbackRef,
  };
}
