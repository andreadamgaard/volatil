// import type { SliderProps } from "react-aria-components";
// import { Slider, SliderOutput, SliderThumb, SliderTrack } from "react-aria-components";
// import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
// import { ChevronDown } from "lucide-react";
// import clsx from "clsx";
// import React from "react";

// interface PriceSliderProps extends SliderProps<number[]> {
//   minValue: number;
//   maxValue: number;
//   onChange: (values: number[]) => void;
// }

// export const FilterPris = React.memo(({ minValue, maxValue, onChange, ...props }: PriceSliderProps) => {
//   console.log("FilterPris rendering with minValue:", minValue, "maxValue:", maxValue);

//   return (
//     <div className="relative">
//       {/* Dropdown */}
//       <Disclosure>
//         {({ open }) => (
//           <div>
//             {/* Dropdown Button */}
//             <DisclosureButton className={clsx("flex items-center justify-between border-2 rounded-xl pr-1.5 pl-4 py-1 text-lg font-bold transition ease-in-out duration-200", open ? "bg-primary text-bg border-primary" : "bg-bg text-primary border-primary")}>
//               <span>Pris</span>
//               <ChevronDown className={`stroke-[3px] transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
//             </DisclosureButton>

//             {/* Dropdown element */}
//             <DisclosurePanel className="absolute z-10 mt-1 p-4 w-72 border border-primary rounded-md shadow-sm bg-bg">
//               {/* Pris slider */}
//               <Slider {...props} minValue={minValue} maxValue={maxValue} onChange={(values) => onChange(values)} className="w-full">
//                 <div className="flex justify-between w-full text-sm font-bold">
//                   <span>Min pris</span>
//                   <span>Max pris</span>
//                 </div>
//                 <SliderTrack className="relative w-full h-7 py-8">
//                   {({ state }) => (
//                     <>
//                       <div className="absolute h-2 translate-y-[-50%] w-full rounded-full bg-textSale" />
//                       <div
//                         className="absolute h-2 translate-y-[-50%] rounded-full bg-primary"
//                         style={{
//                           left: `${state.getThumbPercent(0) * 100}%`,
//                           right: `${100 - state.getThumbPercent(1) * 100}%`,
//                         }}
//                       />
//                       {state.values.map((_, i) => (
//                         <SliderThumb key={`thumb-${i}`} index={i} aria-label={i === 0 ? "Min pris" : "Max pris"} className="absolute h-5 w-5 bg-primary rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50" />
//                       ))}
//                     </>
//                   )}
//                 </SliderTrack>

//                 <div className="flex justify-between w-full text-sm font-bold">
//                   <SliderOutput>{({ state }) => `${state.getThumbValue(0)} kr`}</SliderOutput>
//                   <SliderOutput>{({ state }) => `${state.getThumbValue(1)} kr`}</SliderOutput>
//                 </div>
//               </Slider>
//             </DisclosurePanel>
//           </div>
//         )}
//       </Disclosure>
//     </div>
//   );
// });
