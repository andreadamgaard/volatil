import { ChevronDown, ChevronUp } from "lucide-react";
import { Button, Group, Input, Label, NumberField } from "react-aria-components";

export const AntalBox = () => {
  return (
    <NumberField defaultValue={1} minValue={0} maxValue={15} className="flex flex-col gap-2">
      <Label>Antal:</Label>
      <Group className="ring-2 w-fit max-h-12 rounded ring-primary flex justify-center items-center">
        <Input className="w-10 font-hackney text-4xl flex text-center" />
        <span className="flex flex-col">
          <Button className="hover:bg-secondary w-full h-full flex justify-center items-center transition ease-in-out duration-200" slot="increment">
            <ChevronUp />
          </Button>
          <Button className="hover:bg-secondary w-full h-full flex justify-center items-center transition ease-in-out duration-200" slot="decrement">
            <ChevronDown />
          </Button>
        </span>
      </Group>
    </NumberField>
  );
};
