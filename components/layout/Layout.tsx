import { NavigationMenu } from "@/components//common/NavigationMenu";
import { cx } from "@/lib/cx";

type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

export function Layout(props: LayoutProps) {
  return (
    <main className="relative flex flex-col items-center w-full min-h-screen">
      <div className={cx("flex flex-col min-h-screen", props.className)}>
        {props.children}
      </div>
      <NavigationMenu />
    </main>
  );
}
