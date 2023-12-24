import { motion } from "framer-motion";

type LoaderProps = {
  count?: number;
  visible?: boolean;
};

export function Loader(props: LoaderProps) {
  return props.visible ? (
    <div className="flex flex-col w-full gap-2">
      {Array.from({ length: props?.count || 4 }).map((_, i) => (
        <motion.div
          key={i}
          className="loader"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.5,
              delay: i * 0.09,
            },
          }}
          exit={{ opacity: 0 }}
        />
      ))}
    </div>
  ) : null;
}
