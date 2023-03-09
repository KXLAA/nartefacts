import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";

import { cx } from "@/lib/cx";

interface CardProps extends HTMLMotionProps<"div"> {
  heading: string;
  description?: string;
  dotted?: boolean;
  addon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export function Card(props: CardProps) {
  const { className, dotted, description, addon, heading, children, ...rest } =
    props;

  return (
    <motion.div
      className={cx(
        "flex flex-col w-full gap-4 p-6 rounded-md shadow bg-cod-gray-800",
        className
      )}
      {...rest}
    >
      <div
        className={cx(
          "flex justify-between w-full",
          dotted ? "border-b-2 border-dashed border-cod-gray-400" : ""
        )}
      >
        <div className={cx(dotted ? "mb-1" : "")}>
          <h2 className="text-3xl font-semibold">{heading}</h2>
          {description ? (
            <p className="text-sm font-light text-silver-900">{description}</p>
          ) : null}
        </div>
        {addon ? addon : null}
      </div>

      <div className="w-full h-full">{children}</div>
    </motion.div>
  );
}
