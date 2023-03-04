import { keyframes, styled } from "@stitches/react";
import copy from "copy-to-clipboard";
import { motion } from "framer-motion";
import { FileUp, Link } from "lucide-react";
import Image from "next/image";

import { Tooltip } from "@/components/common/Tooltip";
import { cx } from "@/lib/cx";
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
    <div className="relative flex flex-col gap-2" ref={hoverRef}>
      {isHovered && (
        <motion.div
          className="absolute right-0 z-10 flex gap-1 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {links.map((link) => (
            <AnchorLink key={link.id} {...link} />
          ))}
        </motion.div>
      )}

      <Image
        src={props.albumArt}
        height={1000}
        width={1000}
        alt={"album art"}
        placeholder="blur"
        blurDataURL={"/images/placeholder.png"}
        className="transition transform rounded brightness-90 hover:brightness-110"
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

type AnchorLinkProps = {
  href?: string;
  icon: JSX.Element;
  className?: string;
  onClick?: () => void;
  message?: string;
};

function AnchorLink(props: AnchorLinkProps) {
  return (
    <Tooltip content={props.message}>
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={props.onClick}
        className={cx(
          "flex items-center justify-center w-8 h-8 transition-colors  border rounded-md text-silver-500 bg-shark-700 border-shark-600 hover:bg-shark-500 hover:order-shark-400 hover:text-silver-500",
          props.className
        )}
      >
        {props.icon}
      </motion.button>
    </Tooltip>
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

const links = [
  {
    id: "copy-link",
    icon: <Link className="w-4 h-4" />,
    message: "Copy Link",
    onClick: () => console.log("github"),
  },
  {
    id: "export",
    icon: <FileUp className="w-4 h-4" />,
    message: "Export Pallette",
    onClick: () => copy(``),
  },
];
