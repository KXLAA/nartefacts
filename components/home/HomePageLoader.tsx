import { motion } from "framer-motion";

export function HomePageLoader() {
  return (
    <>
      {Array.from({ length: 12 }).map((_, index) => (
        <motion.div
          key={index}
          className="h-[440px] flex flex-col items-center justify-center w-full p-4 rounded bg-cod-gray-500 shadow-border-shiny animate-pulse"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.5,
              delay: index * 0.09,
            },
          }}
          exit={{ opacity: 0 }}
        />
      ))}
    </>
  );
}
