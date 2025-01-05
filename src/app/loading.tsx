import { Red } from "@/content/svgs/wine/Red";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="animate-wiggle w-36 H-36">
        <Red />
      </div>
    </div>
  );
}
