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

  // variants: {
  //   height: {
  //     1: {
  //       height: "4px",
  //     },
  //     2: {
  //       height: "8px",
  //     },
  //     3: {
  //       height: "12px",
  //     },
  //     4: {
  //       height: "16px",
  //     },
  //     5: {
  //       height: "20px",
  //     },
  //     6: {
  //       height: "24px",
  //     },
  //     7: {
  //       height: "28px",
  //     },
  //     8: {
  //       height: "32px",
  //     },
  //     9: {
  //       height: "36px",
  //     },
  //     10: {
  //       height: "40px",
  //     },
  //   },
  // },
  // defaultVariants: {
  //   height: 1,
  // },
});
