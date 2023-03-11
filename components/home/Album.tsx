import copy from "copy-to-clipboard";
import { motion } from "framer-motion";
import { FileUp } from "lucide-react";
import Image from "next/image";

import { Tooltip } from "@/components/common/Tooltip";
import { GradientBar } from "@/components/home/GradientBar";
import { Pallette } from "@/components/home/Pallette";
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
        alt="album art"
        placeholder="blur"
        blurDataURL="/images/placeholder.png"
        className="transition transform rounded brightness-90 hover:brightness-110"
      />

      <GradientBar
        css={{
          $$gradient: `linear-gradient(147deg, ${props.colors.join(", ")})`,
          height: 4,
        }}
      />

      <Pallette colors={props.colors} size="lg" />

      <div className="p-2 rounded bg-cod-gray-600 shadow-border-shiny">
        <h3 className="text-lg font-bold">{props.title} </h3>
        <p className="text-sm text-gray-500">{props.artist.name}</p>
      </div>
    </div>
  );
}

type AnchorLinkProps = {
  icon: JSX.Element;
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
          "flex items-center justify-center w-8 h-8 transition-colors  border rounded-md text-silver-500 bg-shark-700 border-shark-600 hover:bg-shark-500 hover:order-shark-400 hover:text-silver-500"
        )}
      >
        {props.icon}
      </motion.button>
    </Tooltip>
  );
}

const links = [
  // {
  //   id: "copy-link",
  //   icon: <Link className="w-4 h-4" />,
  //   message: "Copy Link",
  //   onClick: () => console.log("github"),
  // },
  {
    id: "export",
    icon: <FileUp className="w-4 h-4" />,
    message: "Export Pallette",
    onClick: () => copy(``),
  },
];
