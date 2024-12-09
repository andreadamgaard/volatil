import clsx from "clsx";
import { Button as AriaButton, Link as AriaLinkButton } from "react-aria-components";
import type { ButtonProps as AriaButtonProps, LinkProps as AriaLinkButtonProps } from "react-aria-components";

type ButonProps = Omit<AriaButtonProps, "children"> & {
  children?: React.ReactNode;
};

export const Button = ({ children, ...props }: ButonProps) => {
  return (
    <AriaButton {...props} className="bg-Vblue-50  py-4 px-20 rounded flex justify-center items-center">
      <span className="text-4xl text-bg font-hackney">{children}</span>
    </AriaButton>
  );
};

type LinkButonProps = Omit<AriaLinkButtonProps, "children"> & {
  children?: React.ReactNode;
  className?: string;
  size: "small" | "medium" | "large";
};

export const LinkButton = ({ children, className, size, ...props }: LinkButonProps) => {
  const sizes = {
    small: "text-xs md:text-xl lg:text-2xl",
    medium: "text-sm md:text-2xl lg:text-3xl ",
    large: "text-lg md:text-3xl lg:text-4xl",
  };

  return (
    <AriaLinkButton {...props} className={clsx("w-fit text-primary bg-secondary flex justify-center items-center px-4 py-1 rounded hover:bg-primary hover:text-bg font-hackney", sizes[size])}>
      {children}
    </AriaLinkButton>
  );
};
