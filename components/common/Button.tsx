import { type VariantProps, tv } from "tailwind-variants";

/*  Button
  ============================================ */

type ButtonVariants = VariantProps<typeof button>;

interface ButtonProps extends ButtonVariants {
  children: React.ReactNode;
}

function Button(props: ButtonProps) {
  return <button className={button(props)}>Click me</button>;
}

/*  Styles
  ============================================ */

const button = tv({
  base: "font-medium bg-blue-500 text-white rounded-md active:opacity-80",
  variants: {
    color: {
      primary: "bg-silver-900 text-white",
      secondary: "bg-purple-500 text-white",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "px-4 py-2 text-lg",
    },
  },
  compoundVariants: [
    {
      size: ["sm", "md"],
      class: "px-3 py-1",
    },
  ],
  defaultVariants: {
    size: "md",
    color: "primary",
  },
});

/*  Exports
  ============================================ */
export { type ButtonProps, Button };
