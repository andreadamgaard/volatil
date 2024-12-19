"use client";
import clsx from "clsx";
import { Button as AriaButton, Link as AriaLinkButton } from "react-aria-components";
import type { ButtonProps as AriaButtonProps, LinkProps as AriaLinkButtonProps } from "react-aria-components";

type ButtonProps = Omit<AriaButtonProps, "children"> & {
  children: React.ReactNode;
  size: "small" | "medium" | "large";
};

export const CustomButton = ({ children, size, ...props }: ButtonProps) => {
  return (
    <AriaButton {...props} className={clsx("bg-Vblue-50 ring-1 ring-Vblue-50 flex justify-center items-center   w-full transition ease-in-out duration-200 hover:bg-Vblue-100 hover:ring-Vblue-100 text-bg font-hackney", size === "small" && "max-h-8 text-2xl rounded", size === "medium" && "py-1 text-3xl rounded-full", size === "large" && "h-11 ring-2 ring-Vblue-50 py-0.5 text-3xl rounded")}>
      {children}
    </AriaButton>
  );
};

type LinkButtonProps = Omit<AriaLinkButtonProps, "children"> & {
  children?: React.ReactNode;
  size: "small" | "medium" | "large";
};

export const CustomLinkButton = ({ children, size, ...props }: LinkButtonProps) => {
  return (
    <AriaLinkButton {...props} className={clsx("w-fit text-primary bg-secondary flex justify-center items-center px-4 py-1 rounded hover:bg-primary hover:text-bg font-hackney", size === "small" && "text-xs md:text-sm lg:text-base", size === "medium" && "text-sm md:text-base lg:text-lg", size === "large" && "text-lg md:text-xl lg:text-2xl")}>
      {children}
    </AriaLinkButton>
  );
};

type LinkButtonNoLinkProps = {
  children?: React.ReactNode;
  size: "small" | "medium" | "large";
};

export const LinkButtonNoLink = ({ children, size }: LinkButtonNoLinkProps) => {
  return <div className={clsx("w-fit text-primary bg-secondary flex justify-center items-center px-4 py-1 rounded hover:bg-primary hover:text-bg font-hackney", size === "small" && "text-xs md:text-sm lg:text-base", size === "medium" && "text-sm md:text-base lg:text-lg", size === "large" && "text-lg md:text-xl lg:text-2xl")}>{children}</div>;
};
