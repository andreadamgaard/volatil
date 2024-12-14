import { ChevronDown, ChevronUp } from "lucide-react";
import { Button, Group, Input, Label, NumberField } from "react-aria-components";

export const AntalBox = () => {
  return (
    <NumberField defaultValue={1} minValue={0} maxValue={15} className="flex flex-col gap-1">
      <Label className="text-sm font-bold">Antal:</Label>
      <Group className="ring-2 max-w-12 max-h-8 rounded ring-primary transition ease-in-out duration-200 flex justify-center items-center gap-0.5 px-0.5">
        <Input className="w-7 h-full rounded font-hackney text-2xl flex text-center focus:ring-1 focus:ring-[#dd4f83] focus:rounded-sm" />
        <span className="flex flex-col gap-0.5">
          <Button className="hover:bg-secondary w-full h-full flex justify-center items-center transition ease-in-out duration-200 rounded" slot="increment">
            <ChevronUp className="size-3.5" />
          </Button>
          <Button className="hover:bg-secondary w-full h-full flex justify-center items-center transition ease-in-out duration-200 rounded" slot="decrement">
            <ChevronDown className="size-3.5" />
          </Button>
        </span>
      </Group>
    </NumberField>
  );
};
