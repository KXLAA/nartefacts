export {};

declare global {
  /**
   * Utility type to add Required variants to tailwind-variants props,
   * @example
   * type ButtonVariants = VariantProps<typeof buttonStyles>;
   * export type ButtonProps = Require<ButtonVariants, "requiredFlat" | "color">;
   *
   */
  type RequireVariants<V extends object, R extends keyof V> = Omit<V, R> &
    Required<Pick<V, R>>;

  /**
   * Utility type to extract the native props from an HTML element and add other necessary props to a component
   * @example
   * type ButtonProps = NativeProps<'button', {auto: boolean}>
   */

  type NativeProps<Element extends React.ElementType<any>, Obj = object> = Obj &
    Omit<React.ComponentPropsWithoutRef<Element>, keyof Obj>;
}
