import { LineTwo } from "@/content/svgs/line2";

export const Opdagesle = () => {
  return (
    <div className="flex flex-col w-full h-full items-center justify-start py-4 px-6 gap-y-4 ">
      {/* <h2 className="font-hackney text-3xl underline text-center">Vi har samlet nogle solide kollektioner til dig her:</h2> */}
      <span className="w-fit flex flex-col items-center justify-center">
        <h2 className="font-hackney text-4xl  text-center">Vi lavet nogle sinds samlinger til dig!</h2>
        <LineTwo className="-mt-1" />
      </span>
      <div className="flex flex-col gap-y-4 items-center font-bold text-xl">
        <p>Psykovin!!</p>
        <p>Billigjuice (som stadig er psyko!)</p>
        <p>Weird shit (på den gode måde!)</p>
        <p>Staff picks - det vi drikker pt</p>
        <p>Se alle vores vilde kasser</p>
      </div>
    </div>
  );
};
