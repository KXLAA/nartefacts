import { NavigationMenu } from "@/components//common/NavigationMenu";
import { cx } from "@/lib/cx";
import type { SeoProps } from "@/lib/seo";
import { Seo } from "@/lib/seo";

type LayoutProps = {
  children: React.ReactNode;
  className?: string;
  meta?: SeoProps;
};

export function Layout(props: LayoutProps) {
  return (
    <>
      {props.meta && <Seo {...props.meta} />}
      <main className="relative flex flex-col items-center w-full min-h-screen">
        <div className={cx("flex flex-col min-h-screen", props.className)}>
          {props.children}
        </div>
        <NavigationMenu />
      </main>
    </>
  );
}
