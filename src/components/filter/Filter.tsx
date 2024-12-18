import { Button, Label, Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from "@headlessui/react";
import clsx from "clsx";
import { Check, ChevronDown, X } from "lucide-react";
import { useState, useEffect } from "react";

// Generisk Filter-komponent
export const Filter = ({ data = [], label = "Filter", onDataChange }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [open, setOpen] = useState(false);

  // const toggleItem = (item) => {
  //   setSelectedItems((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]));
  // };

  const clearSelections = () => {
    setSelectedItems([]);
  };

  useEffect(() => {
    if (onDataChange) onDataChange(selectedItems);
  }, [selectedItems, onDataChange]);

  return (
    <div className=" relative">
      {/* Filter med dropdown */}
      <Listbox value={selectedItems} onChange={setSelectedItems} multiple>
        {/* Filter knappen */}
        <ListboxButton onClick={() => setOpen((open) => !open)} className={clsx("input  flex items-center justify-between border-2 rounded-xl pr-1.5 pl-4 py-1 text-lg font-bold transition ease-in-out duration-200", selectedItems.length ? "bg-primary text-bg border-primary" : "bg-bg text-primary border-primary")}>
          <span>{label}</span>
          <ChevronDown className={clsx("stroke-[3px] transition-transform duration-200", "data-[active]:rotate-180")} />
        </ListboxButton>

        {/* Dropdown med valgmuligheder */}
        <Transition show={open} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
          <ListboxOptions className="absolute mt-1 max-h-60 w-72 overflow-auto rounded-md border-2 border-primary bg-bg shadow-lg z-10 data-[state=open]:scale-100 data-[state=open]:opacity-100 data-[state=closed]:scale-95 data-[state=closed]:opacity-0">
            {/* Ryd-knap */}
            <div className="sticky top-0 flex items-center justify-between px-3 py-2 border-b-2 border-primary bg-bg">
              <span className="font-medium ">{selectedItems.length} valgt</span>
              <Button
                onClick={clearSelections}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    clearSelections();
                  }
                }}
                className={clsx("text-sm font-bold border-2 rounded-full flex justify-center items-center gap-1 px-2 transition ease-in-out duration-200", "border-primary", "hover:bg-primary hover:text-bg")}
              >
                Ryd
                <X className="size-4 stroke-[3px]" />
              </Button>
            </div>

            {/* Dynamisk Checkbox Liste */}
            {data.map((item) => (
              <ListboxOption key={item} value={item} className={clsx("flex items-center px-3 py-2 cursor-pointer data-[active]:bg-textSale data-[active]:text-bg")}>
                {({ selected }) => (
                  <div className="flex items-center justify-center">
                    <div className={clsx("h-5 w-5 border-2 border-primary rounded flex items-center justify-center mr-2 transition ease-in-out duration-200", selected ? "bg-primary" : "bg-bg")}>{selected && <Check className="size-3.5 stroke-[3px] text-bg hover:text-primary" />}</div>
                    <span>{item}</span>
                  </div>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Transition>
      </Listbox>
    </div>
  );
};
