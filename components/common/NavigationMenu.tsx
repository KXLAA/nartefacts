import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { Github, Home, Pocket, ToyBrick } from "lucide-react";
import NextLink from "next/link";
import { useRouter } from "next/router";

import { cx } from "@/lib/cx";

export function NavigationMenu() {
  return (
    <NavigationMenuPrimitive.Root className="z-[1] flex justify-center fixed bottom-6">
      <NavigationMenuPrimitive.List className="flex gap-1 p-1 m-0 list-none rounded bg-cod-gray-800 shadow-border-shiny">
        <NavigationMenuItem href="/">
          <Home className="w-4 h-4 text-silver-800" strokeWidth={1.44} />
          Home
        </NavigationMenuItem>
        <NavigationMenuItem href="/create">
          <ToyBrick className="w-4 h-4 text-silver-800" strokeWidth={1.44} />
          Create
        </NavigationMenuItem>
        <NavigationMenuItem href="/saved">
          <Pocket className="w-4 h-4 text-silver-800" strokeWidth={1.44} />
          Saved
        </NavigationMenuItem>
        <NavigationMenuItem href="https://github.com/KXLAA/nartefacts">
          <Github className="w-4 h-4 text-silver-800" strokeWidth={1.44} />
          Github
        </NavigationMenuItem>
      </NavigationMenuPrimitive.List>
    </NavigationMenuPrimitive.Root>
  );
}

type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

function Link({ href, className, ...props }: LinkProps) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href} passHref legacyBehavior>
      <NavigationMenuPrimitive.Link
        active={isActive}
        className={cx(
          className,
          isActive ? "bg-cod-gray-500 shadow-border-shiny" : ""
        )}
        {...props}
      />
    </NextLink>
  );
}

type NavigationMenuItemProps = {
  href: string;
  children: React.ReactNode;
  active?: boolean;
};

function NavigationMenuItem(props: NavigationMenuItemProps) {
  const isClientSideLink = props.href.startsWith("/");

  return (
    <NavigationMenuPrimitive.Item>
      {isClientSideLink ? (
        <Link
          className="flex gap-1 items-center justify-center select-none rounded-[4px] p-2 text-base  leading-none no-underline outline-none hover:bg-cod-gray-400 transition-colors hover:text-silver-700"
          href={props.href}
        >
          {props.children}
        </Link>
      ) : (
        <NavigationMenuPrimitive.Link
          className="flex gap-1 items-center justify-center select-none rounded-[4px] p-2 text-base leading-none no-underline outline-none hover:bg-cod-gray-400 transition-colors hover:text-silver-700"
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.children}
        </NavigationMenuPrimitive.Link>
      )}
    </NavigationMenuPrimitive.Item>
  );
}
