import { Field, Label, Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from "@headlessui/react";
import { Check, ChevronDown } from "lucide-react";
import clsx from "clsx";
import { useState } from "react";

// Typedefinition for sort options
type SortOption = {
  id: string;
  label: string;
};

export const Sorting = ({ onSortChange }: { onSortChange: (sortKey: string) => void }) => {
  const sortOptions: SortOption[] = [
    { id: "none", label: "Ingen sortering" },
    { id: "LowHigh", label: "Pris Lav-Høj" },
    { id: "HighLow", label: "Pris Høj-Lav" },
    { id: "az", label: "A-Z" },
    { id: "za", label: "Z-A" },
  ];

  const [selected, setSelected] = useState<SortOption | null>(null);

  const handleSelection = (option: SortOption) => {
    setSelected(option);
    onSortChange(option?.id || null);
    // Sender null tilbage, hvis ingen sortering er valgt
  };

  return (
    <div className="flex flex-col gap-1 w-[180px]">
      <Field>
        {/* Label */}
        <Label className="flex justify-end font-bold text-lg">Sorter:</Label>

        {/* filter selector */}
        <Listbox value={selected} onChange={handleSelection}>
          <ListboxButton className={clsx("input w-[180px] flex items-center justify-between border-2 border-primary rounded-xl pr-1 pl-4 py-1 text-base", "focus:ring-offset-2 focus:rounded-xl")}>
            {selected ? selected.label : "Vælg sortering"}
            <ChevronDown className="size-7" aria-hidden="true" />
          </ListboxButton>

          {/* dropdown options */}
          <Transition leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            <ListboxOptions className="w-[180px] mt-1 absolute bg-white rounded-xl p-1 ring-2 ring-inset ring-primary focus-visible:rounded-lg">
              {sortOptions.map((option) => (
                <ListboxOption key={option.id} value={option} className={clsx("group relative flex cursor-default items-center gap-2 py-1.5 px-3 select-none rounded-lg", "data-[focus]:bg-primary data-[focus]:text-bg focus:ring-offset-2 focus:rounded-xl")}>
                  <span className="text-sm">{option.label}</span>
                  <Check className={clsx("size-4 text-primary invisible group-data-[selected]:visible group-data-[selected]-[focus]:text-bg ")} aria-hidden="true" />
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </Listbox>
      </Field>
    </div>
  );
};
