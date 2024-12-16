import { ChevronDown } from "lucide-react";
import { Button, Label, ListBox, ListBoxItem, Popover, Select, SelectValue } from "react-aria-components";
import type { ListBoxItemProps } from "react-aria-components";

export const Sorting = () => {
  return (
    <div>
      <Select className="flex flex-col gap-1 w-fit">
        <Label className=" cursor-default text-right">Sorter efter:</Label>
        <Button className="flex gap-4 justify-center items-center rounded-lg border-[3px] border-primary bord bg-bg transition py-2 pl-5 pr-2 text-base">
          <SelectValue className="flex-1 truncate placeholder-shown:italic" />
          <ChevronDown />
        </Button>
        <Popover className="max-h-60 w-[--trigger-width] overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out">
          <ListBox className="outline-none p-1">
            <StatusItem textValue="Backlog">
              <Status className="bg-gray-500" />
              Backlog
            </StatusItem>
            <StatusItem textValue="In Progress">
              <Status className="bg-blue-500" />
              In Progress
            </StatusItem>
            <StatusItem textValue="In Review">
              <Status className="bg-yellow-500" />
              In Review
            </StatusItem>
            <StatusItem textValue="Done">
              <Status className="bg-green-500" />
              Done
            </StatusItem>
            <StatusItem textValue="Won't Do">
              <Status className="bg-red-500" />
              Won't Do
            </StatusItem>
          </ListBox>
        </Popover>
      </Select>
    </div>
  );
};

function StatusItem(props: ListBoxItemProps & { children: React.ReactNode }) {
  return (
    <ListBoxItem {...props} className="group flex items-center gap-2 cursor-default select-none py-2 px-4 outline-none rounded text-gray-900 focus:bg-rose-600 focus:text-white">
      {({ isSelected }) => (
        <>
          <span className="flex-1 flex items-center gap-2 truncate font-normal group-selected:font-medium">{props.children}</span>
          <span className="w-5 flex items-center text-rose-600 group-focus:text-white">{isSelected && <CheckIcon size="S" />}</span>
        </>
      )}
    </ListBoxItem>
  );
}

function Status({ className }: { className: string }) {
  return <span className={`w-3 h-3 rounded-full border border-solid border-white ${className}`} />;
}
