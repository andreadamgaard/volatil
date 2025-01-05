import { Field, Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from "@headlessui/react";
import { ChevronDown, X } from "lucide-react";
import clsx from "clsx";
import { useState } from "react";

// Typedefinition for sort options
type SortOption = {
  id: string;
  label: string;
};

export const Sorting = ({ onSortChange }: { onSortChange: (sortKey: string | null) => void }) => {
  const sortOptions: SortOption[] = [
    { id: "LowHigh", label: "Pris Lav-Høj" },
    { id: "HighLow", label: "Pris Høj-Lav" },
    { id: "az", label: "A-Z" },
    { id: "za", label: "Z-A" },
  ];

  const [selected, setSelected] = useState<SortOption | null>(null); // Ingen valgt som standard

  const handleSelection = (option: SortOption | null) => {
    setSelected(option);
    onSortChange(option?.id || null); // Send null til parent, hvis ingen sortering er valgt
  };

  const clearSelection = (e: React.MouseEvent) => {
    e.stopPropagation(); // Forhindre dropdown i at åbne ved klik på X knap
    handleSelection(null);
  };

  return (
    <div className="flex flex-col place-items-end gap-1 relative min-h-12">
      {/* Sortering med dropdown */}

      <Field>
        {/* Label */}
        <h2 className="flex md:justify-end font-bold text-lg px-1 pb-1">Sorter:</h2>

        {/* Filter knappen */}
        <Listbox value={selected} onChange={handleSelection}>
          {({ open }) => (
            <div>
              <ListboxButton className={clsx("input gap-1 md:w-[10rem] flex items-center justify-between border-2 rounded-xl pr-1.5 pl-4 py-1 md:text-lg font-bold transition ease-in-out duration-200", selected ? "bg-primary text-bg border-primary" : "bg-bg text-primary border-primary", open && "ring-2 ring-primary")}>
                {selected ? selected.label : "Sortering"}
                {selected ? <X className="size-5 md:size-6 md:stroke-[3px] md:transition md:ease-in-out md:duration-200 hover:scale-125" onClick={clearSelection} aria-label="Clear sort" /> : <ChevronDown className={clsx("size-5 md:size-6 md:stroke-[3px] transition-transform duration-200", open ? "rotate-180" : "")} aria-hidden="true" />}
              </ListboxButton>

              {/* Dropdown options */}
              <Transition leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                <ListboxOptions className="w-[10rem] right-0 top-full z-30 mt-1 absolute bg-bg rounded-lg p-1 ring-2 ring-inset ring-primary focus-visible:rounded-lg">
                  {sortOptions.map((option) => (
                    <ListboxOption key={option.id} value={option} className={clsx("group relative flex cursor-default items-center gap-2 py-1.5 px-3 select-none rounded-lg", "data-[focus]:bg-primary data-[focus]:text-bg focus:ring-offset-2 focus:rounded-lg")}>
                      <span>{option.label}</span>
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Transition>
            </div>
          )}
        </Listbox>
      </Field>
    </div>
  );
};
