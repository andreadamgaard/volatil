import { Button as AriaButton, Link as AriaLink } from "react-aria-components";
import type { ButtonProps as AriaButtonProps, LinkProps as AriaLinkProps } from "react-aria-components";

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

type LinkButonProps = Omit<AriaLinkProps, "children"> & {
  children?: React.ReactNode;
};

export const Link = ({ children, ...props }: LinkButonProps) => {
  return <AriaLink {...props}>{children}</AriaLink>;
};
