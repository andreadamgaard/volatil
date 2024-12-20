import { Button, Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from "@headlessui/react";
import clsx from "clsx";
import { Check, ChevronDown, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export const Filter = ({ data = [], label = "Filter", onDataChange }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [open, setOpen] = useState(false);

  const clearSelections = () => {
    setSelectedItems([]);
  };

  useEffect(() => {
    if (onDataChange) onDataChange(selectedItems);
  }, [selectedItems, onDataChange]);

  return (
    <div className="relative min-h-12">
      <Listbox value={selectedItems} onChange={setSelectedItems} multiple>
        <ListboxButton onClick={() => setOpen((open) => !open)} className={clsx("input flex items-center justify-between border-2 rounded-xl pr-1.5 pl-4 py-1 md:text-lg font-bold transition ease-in-out duration-200", selectedItems.length ? "bg-primary text-bg border-primary" : "bg-bg text-primary border-primary")}>
          <span>{label}</span>
          <ChevronDown className={clsx("size-5 md:size-6 md:stroke-[3px] transition-transform duration-200", open ? "rotate-180" : "")} />
        </ListboxButton>

        <Transition leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
          <ListboxOptions className={clsx("absolute mt-1 max-h-60 w-52 md:w-72 overflow-auto rounded-md border-2 border-primary bg-bg shadow-lg z-50 left-0 top-full")}>
            {/* Header med ryd-knap */}
            <div className="flex items-center justify-between px-3 py-2 border-b-2 border-primary bg-bg h-12">
              <span className="font-medium">{selectedItems.length} valgt</span>
              <Button onClick={clearSelections} className={clsx("text-sm font-bold border-2 rounded-full flex justify-center items-center gap-1 px-2 transition ease-in-out duration-200", "border-primary", "hover:bg-primary hover:text-bg")}>
                Ryd
                <X className="size-4 stroke-[3px]" />
              </Button>
            </div>

            {/* Filterindstillinger */}
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
