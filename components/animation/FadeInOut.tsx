import { motion } from "framer-motion";

type FadeInOutProps = NativeProps<"div", { noInitial?: boolean }>;

export function FadeInOut(props: FadeInOutProps) {
  return (
    <motion.div
      initial={props.noInitial ? undefined : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.1 }}
      className={props.className}
    >
      {props.children}
    </motion.div>
  );
}
