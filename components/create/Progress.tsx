import * as ProgressPrimitive from "@radix-ui/react-progress";
import React from "react";

/* Progress
  ============================================ */

export function Progress() {
  const progress = useProgress();

  return (
    <ProgressPrimitive.Root
      aria-label={`Loading... ${progress}%`}
      value={progress}
      className="relative overflow-hidden bg-white w-full h-[5px]"
    >
      <ProgressPrimitive.Indicator
        style={{ width: `${progress}%` }}
        className="bg-primary-9 w-full h-full rounded-r-[9px] duration-300 ease-in-out"
      />
    </ProgressPrimitive.Root>
  );
}

/* Utils
  ============================================ */

function useProgress() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        return oldProgress + 25;
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return progress;
}
