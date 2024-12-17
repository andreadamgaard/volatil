"use client";
import clsx from "clsx";
import { Link as AriaLink } from "react-aria-components";
import type { LinkProps } from "react-aria-components";

type ButonProps = Omit<LinkProps, "children"> & {
  children: React.ReactNode;
  intent: "text" | "icon" | "null" | "wines";
};

export const Link = ({ children, intent, ...props }: ButonProps) => {
  return (
    <AriaLink {...props} className={clsx("transition ease-in-out duration-200 w-fit", intent === "text" && "items-center border-b border-b-current inline-flex hover:border-transparent hover:text-hover", intent === "icon" && "inline-flex items-center hover:text-hover hover:scale-105", intent === "wines" && "flex flex-col")}>
      {children}
    </AriaLink>
  );
};
