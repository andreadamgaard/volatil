import { Button, Checkbox, Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { useState } from "react";

const producers = ["Jérôme Arnoux", "Clos Massotte", "Ferme Des Sept Lunes", "Mendall", "Ramaz Nikoladze", "Patrick Desplats", "Jérôme Saurigny", "Fabio Gea", "Giacomo Fenocchio"];

export const Filter = () => {
  const [selectedProducers, setSelectedProducers] = useState([]);

  const toggleProducer = (producer) => {
    setSelectedProducers(
      (prev) =>
        prev.includes(producer)
          ? prev.filter((item) => item !== producer) // Fjern fra listen
          : [...prev, producer] // Tilføj til listen
    );
  };

  const clearSelections = () => {
    setSelectedProducers([]);
  };

  return (
    <div className="w-72 relative">
      {/* Dropdown */}
      <Listbox>
        {/* Dropdown Button */}
        <ListboxButton className="w-full rounded border border-gray-300 py-2 px-3 text-left cursor-pointer">Producent ({selectedProducers.length} valgt)</ListboxButton>

        {/* Liste af valgmuligheder */}
        <ListboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md border bg-white shadow-lg">
          {/* Ryd-knap */}
          <div className="flex items-center justify-between px-3 py-2 border-b">
            <span className="font-medium">{selectedProducers.length} valgt</span>
            <Button onClick={clearSelections} className="text-sm text-red-600 hover:underline">
              Ryd
            </Button>
          </div>

          {/* Checkbox Liste */}
          {producers.map((producer) => (
            <ListboxOption key={producer} value={producer} as="div">
              {({ selected }) => (
                <Label onClick={() => toggleProducer(producer)} className={`flex items-center px-3 py-2 cursor-pointer ${selected ? "bg-gray-100" : ""}`}>
                  <Checkbox checked={selectedProducers.includes(producer)} onChange={() => toggleProducer(producer)} className="mr-2 h-4 w-4 border border-gray-300 rounded focus:ring-2 focus:ring-red-600 checked:bg-red-600" />
                  {producer}
                </Label>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
};
