import { Field, Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
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
    e.stopPropagation(); // Forhindre dropdown i at åbne ved klik
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
          <ListboxButton
            className={clsx(
              "input gap-1 md:w-[10rem] flex items-center justify-between border-2 rounded-xl pr-1.5 pl-4 py-1 md:text-lg font-bold",
              selected
                ? "bg-primary text-bg border-primary" // Aktiv styling
                : "bg-bg text-primary border-primary" // Default styling
            )}
          >
            {selected ? selected.label : "Sortering"}

            {selected ? <X className=" size-5 md:size-6 md:stroke-[3px] md:transition md:ease-in-out md:duration-200 hover:scale-125" onClick={clearSelection} aria-label="Clear sort" /> : <ChevronDown className=" size-5 md:size-6 md:stroke-[3px]" aria-hidden="true" />}
          </ListboxButton>

          {/* Dropdown med valgmuligheder */}
          <ListboxOptions className="w-[10rem] right-10 z-10 mt-1 absolute bg-white rounded-lg p-1 ring-2 ring-inset ring-primary focus-visible:rounded-lg">
            {sortOptions.map((option) => (
              <ListboxOption key={option.id} value={option} className={clsx("group relative flex cursor-default items-center gap-2 py-1.5 px-3 select-none rounded-lg", "data-[focus]:bg-primary data-[focus]:text-bg focus:ring-offset-2 focus:rounded-lg")}>
                <span>{option.label}</span>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Listbox>
      </Field>
    </div>
  );
};
