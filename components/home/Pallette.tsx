import copy from "copy-to-clipboard";
import { motion } from "framer-motion";
import { toast } from "sonner";

import { cx } from "@/lib/cx";
import { useMouseOver } from "@/lib/hooks/use-mouse-over";

type PalletteProps = {
  colors: string[];
  size?: "sm" | "md" | "lg";
};

export function Pallette(props: PalletteProps) {
  return (
    <div className="flex gap-1 overflow-auto">
      {props.colors.map((color) => (
        <ColorBox key={color} color={color} size={props.size} />
      ))}
    </div>
  );
}

type ColorBoxProps = {
  color: string;
  size?: "sm" | "md" | "lg";
};

function ColorBox(props: ColorBoxProps) {
  const [hoverRef, isHovered] = useMouseOver<HTMLDivElement>();

  return (
    <div
      className={cx(
        "flex items-center justify-center w-full transition-all opacity-75 hover:opacity-100 aspect-square shadow-border-shiny",
        props.size === "sm" && "h-16",
        props.size === "md" && "h-24",
        props.size === "lg" && "h-28"
      )}
      style={{ backgroundColor: props.color }}
      ref={hoverRef}
    >
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.button
            className={cx(
              "p-1.5 text-sm font-semibold rounded cursor-pointer text-silver bg-cod-gray-700",
              props.size === "sm" && "text-xs text-[9px] p-1"
            )}
            onClick={() => {
              copy(props.color);
              toast.success(
                `Copied ${props.color.toUpperCase()} to clipboard.`
              );
            }}
            whileTap={{ scale: 0.95, color: props.color }}
          >
            {props.color.toUpperCase()}
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}
