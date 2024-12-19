"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button, Group, Input, Label, NumberField } from "react-aria-components";
import clsx from "clsx";

type AntalBoxProps = {
  size?: "small" | "medium";
};

export const AntalBox = ({ size = "small" }: AntalBoxProps) => {
  return (
    <NumberField defaultValue={1} minValue={0} maxValue={15} className="flex flex-col gap-1">
      <Label className="font-bold text-sm">Antal:</Label>
      <Group className={clsx("transition ease-in-out duration-200 flex justify-center items-center gap-0.5 px-0.5 rounded", "ring-2 ring-primary", size === "small" && "max-w-12 max-h-8", size === "medium" && "max-w-16 max-h-14 py-0.5")}>
        <Input className={clsx("font-hackney flex text-center focus:ring-1 focus:ring-hover rounded focus:rounded-sm h-full", size === "small" && " w-7 text-2xl ", size === "medium" && "w-9 h-full text-3xl")} />
        <span className="flex flex-col gap-0.5">
          <Button className="hover:bg-secondary flex justify-center items-center transition ease-in-out duration-200 rounded w-full h-full" slot="increment">
            <ChevronUp className={clsx(size === "small" && "size-3.5", size === "medium" && "size-5")} />
          </Button>
          <Button className="hover:bg-secondary flex justify-center items-center transition ease-in-out duration-200 rounded *:w-full h-full" slot="decrement">
            <ChevronDown className={clsx(size === "small" && "size-3.5", size === "medium" && "size-5")} />
          </Button>
        </span>
      </Group>
    </NumberField>
  );
};
