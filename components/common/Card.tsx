import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";

import { cx } from "@/lib/cx";

interface CardProps extends HTMLMotionProps<"div"> {
  heading?: string;
  description?: string;
  dotted?: boolean;
  addon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  hidden?: boolean;
}

export function Card(props: CardProps) {
  const {
    className,
    dotted,
    description,
    addon,
    heading,
    children,
    hidden,
    ...rest
  } = props;

  return (
    <motion.div
      className={cx(
        "flex flex-col w-full p-4 md:p-6 rounded-md shadow bg-cod-gray-800",
        heading ? "gap-4" : "",
        hidden ? "hidden" : "",
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
          {heading ? (
            <h2 className="text-3xl font-semibold">{heading}</h2>
          ) : null}
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
