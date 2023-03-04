import type { albums as AlbumProps } from "@prisma/client";
import { keyframes, styled } from "@stitches/react";
import Image from "next/image";
import React from "react";
import useEyeDropper from "use-eye-dropper";

export function Album(props: AlbumProps) {
  return (
    <div className="flex flex-col gap-2">
      <Image
        src={props.albumArt}
        height={1000}
        width={1000}
        alt={"album art"}
        placeholder="blur"
        blurDataURL={props.albumArt}
        className="rounded"
      />
      <GradientBar
        css={{
          $$gradient: `linear-gradient(147deg, ${props.colors.join(", ")})`,
        }}
      />
      <div className="p-2 rounded bg-cod-gray-600 shadow-border-shiny">
        <h3 className="text-lg font-bold">{props.title} </h3>
        <p className="text-sm text-gray-500">{props.artist.name}</p>
      </div>
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
