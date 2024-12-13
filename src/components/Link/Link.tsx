import clsx from "clsx";
import { Link as AriaLink } from "react-aria-components";
import type { LinkProps } from "react-aria-components";

type ButonProps = Omit<LinkProps, "children"> & {
  children: React.ReactNode;
  icon?: boolean;
};

export const Link = ({ children, icon, ...props }: ButonProps) => {
  return (
    <AriaLink {...props} className={clsx("transition ease-in-out duration-200 w-fit inline-flex items-center border-b border-b-current hover:text-hover hover:border-transparent", icon && "border-b-transparent hover:scale-105")}>
      {children}
    </AriaLink>
  );
};
