import { motion } from "framer-motion";

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
