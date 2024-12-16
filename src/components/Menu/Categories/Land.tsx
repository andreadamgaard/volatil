import { LineTwo } from "@/content/svgs/line2";

export const Land = () => {
  const lande: string[] = ["Frankrig", "Slovenien", "Portugal", "Spanien", "Italien", "Østrig", "Ungarn", "Tyskland", "Danmark", "Australien", "Georgien", "Tjekkiet", "Grækenland", "New Zealand", "Slovakiet", "Argentina", "Kroatien", "Bulgarien", "Sydafrika", "Sverige"];

  const sortedLande = [...lande].sort();

  const itemsPerColumn = Math.ceil(sortedLande.length / 3);
  const columns = [sortedLande.slice(0, itemsPerColumn), sortedLande.slice(itemsPerColumn, itemsPerColumn * 2), sortedLande.slice(itemsPerColumn * 2)];

  // const sortedLande: string[] = [...lande].sort();

  // const landColumns = (list: string[], columns: number): string[][] => {
  //   const result: string[][] = Array.from({ length: columns }, () => []);
  //   list.forEach((item: string, index: number) => {
  //     result[index % columns].push(item);
  //   });
  //   return result;
  // };

  // const columns: string[][] = landColumns(sortedLande, 3);

  return (
    <div className="flex flex-col w-full h-full py-4 px-6 text-base font-bold gap-y-4 items-center">
      <span className="w-fit flex flex-col items-center justify-center">
        <h2 className="font-hackney text-4xl  text-center">Find det fedeste land</h2>
        <LineTwo className="-mt-1" />
      </span>
      <div className="grid grid-cols-3 gap-x-14 justify-start">
        {columns.map((column, colIndex) => (
          <ul key={column.join("-")} className="space-y-4">
            {column.map((land) => (
              <li key={land}>{land}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};
