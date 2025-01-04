import { Red } from "@/content/svgs/wine/Red";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="animate-wiggle flex-shrink-0 flex flex-col w-36 H-36 rounded-lg overflow-hidden border-2">
        <Red />
      </div>
    </div>
  );
}
