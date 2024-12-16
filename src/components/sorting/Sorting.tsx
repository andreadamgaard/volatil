import { Listbox } from "@headlessui/react";
import { useState } from "react";

type SortOption = {
  id: string;
  label: string;
};

export const Sorting = ({ onSortChange }: { onSortChange: (sortKey: string) => void }) => {
  const sortOptions: SortOption[] = [
    { id: "az", label: "A-Z" },
    { id: "za", label: "Z-A" },
    { id: "LowHigh", label: "Pris Lav-Høj" },
    { id: "HighLow", label: "Pris Høj-Lav" },
    { id: "none", label: "Ingen sortering" },
  ];

  const [selected, setSelected] = useState<SortOption>(sortOptions[4]); // Default to "Ingen sortering"

  const handleSelection = (option: SortOption) => {
    setSelected(option);
    onSortChange(option.id);
  };

  return (
    <div className="relative w-48">
      <Listbox value={selected} onChange={handleSelection}>
        <Listbox.Button className="w-full py-2 px-4 border border-gray-300 rounded-lg bg-white shadow-md">{selected.label}</Listbox.Button>
        <Listbox.Options className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-md">
          {sortOptions.map((option) => (
            <Listbox.Option key={option.id} value={option} className={({ active, selected }) => `cursor-pointer py-2 px-4 ${active ? "bg-gray-100" : ""} ${selected ? "font-bold" : ""}`}>
              {option.label}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};
