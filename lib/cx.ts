import type { ClassValue } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function cx(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}
