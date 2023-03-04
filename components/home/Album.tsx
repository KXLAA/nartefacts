import Image from "next/image";
import React from "react";
import useEyeDropper from "use-eye-dropper";

type AlbumProps = {
  albumArt: string;
  artist: {
    name: string;
    photoURL: string;
  };
  title: string;
  colors: string[];
};

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
      <GradientBar colors={props.colors} />
      <div className="p-2 rounded bg-cod-gray-600 shadow-border-shiny">
        <h3 className="text-lg font-bold">{props.title} </h3>
        <p className="text-sm text-gray-500">{props.artist.name}</p>
      </div>
    </div>
  );
}

type GradientBarProps = {
  colors: string[];
};

function GradientBar(props: GradientBarProps) {
  return (
    <div
      className="w-full h-1.5"
      style={{
        background: `linear-gradient(147deg, ${props.colors.join(", ")})`,
      }}
    />
  );
}

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
