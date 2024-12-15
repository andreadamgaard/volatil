import clsx from "clsx";
import { Link as AriaLink } from "react-aria-components";
import type { LinkProps } from "react-aria-components";

type ButonProps = Omit<LinkProps, "children"> & {
  children: React.ReactNode;
  intent: "text" | "icon" | "null";
};

export const Link = ({ children, intent, ...props }: ButonProps) => {
  return (
    <AriaLink {...props} className={clsx("transition ease-in-out duration-200 w-fit inline-flex items-center hover:text-hover", intent === "text" && "border-b border-b-current hover:border-transparent", intent === "icon" && "hover:scale-105")}>
      {children}
    </AriaLink>
  );
};
