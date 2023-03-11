import copy from "copy-to-clipboard";
import { motion } from "framer-motion";
import { toast } from "sonner";

import { useMouseOver } from "@/lib/hooks/use-mouse-over";

export function Pallette({ colors }: { colors: string[] }) {
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
      className="flex items-center justify-center w-full transition-all opacity-75 h-28 hover:opacity-100 aspect-square shadow-border-shiny"
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
          <motion.button
            className="p-1.5 text-sm font-semibold rounded cursor-pointer text-silver bg-cod-gray-700"
            onClick={() => {
              copy(color);
              toast.success(`Copied ${color.toUpperCase()} to clipboard.`);
            }}
            whileTap={{ scale: 0.95, color: color }}
          >
            {color.toUpperCase()}
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}
