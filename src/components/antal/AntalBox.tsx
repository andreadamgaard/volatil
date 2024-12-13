import { ChevronDown, ChevronUp } from "lucide-react";
import { Button, Group, Input, Label, NumberField } from "react-aria-components";

export const AntalBox = () => {
  return (
    <NumberField defaultValue={1} minValue={0} maxValue={15} className="flex flex-col gap-2">
      <Label className=" font-bold">Antal:</Label>
      <Group className="ring-2 w-fit max-h-11 lg:max-h-14 rounded ring-primary transition ease-in-out duration-200 flex justify-center items-center">
        <Input className="  w-8 lg:w-10 font-hackney text-3xl lg:text-4xl flex text-center outline-none focus:ring-1 focus:ring-primary" />
        <span className="flex flex-col gap-0.5 p-0.5">
          <Button className="hover:bg-secondary w-full h-full flex justify-center items-center transition ease-in-out duration-200 rounded" slot="increment">
            <ChevronUp className="size-4 lg:size-6" />
          </Button>
          <Button className="hover:bg-secondary w-full h-full flex justify-center items-center transition ease-in-out duration-200 rounded" slot="decrement">
            <ChevronDown className="size-4 lg:size-6" />
          </Button>
        </span>
      </Group>
    </NumberField>
  );
};
