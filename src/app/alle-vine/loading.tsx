import { Red } from "@/content/svgs/wine/Red";

export default function Loading() {
  // const skeletonKeys = Array.from({ length: 8 }, (_, i) => `skeleton-${i}`); // Skaber unikke nøgler

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex gap-8 overflow-x-auto px-6 py-4">
        <div className="animate-pulse flex-shrink-0 flex flex-col w-full rounded-lg overflow-hidden border-2">
          <Red />
        </div>
      </div>
    </div>
  );
}
