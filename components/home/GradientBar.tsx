import { keyframes, styled } from "@stitches/react";

const gradientAnimation = keyframes({
  "0%": { backgroundPosition: "0% 50%" },
  "50%": { backgroundPosition: "100% 50%" },
  "100%": { backgroundPosition: "0% 50%" },
});

export const GradientBar = styled("div", {
  background: `$$gradient`,
  backgroundSize: "340% 540%",
  height: "4px",
  width: "100%",
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${gradientAnimation} 15s ease infinite`,
  },
});
