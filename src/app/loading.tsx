// app/all-wines/loading.tsx
export default function Loading() {
  const skeletonKeys = Array.from({ length: 8 }, (_, i) => `skeleton-${i}`); // Skaber unikke nøgler

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        {skeletonKeys.map((key) => (
          <div
            key={key} // Brug unikke nøgler
            className="animate-pulse flex flex-col max-w-[30rem] rounded-lg overflow-hidden border-2 border-primary bg-gray-200"
          >
            {/* Skeleton Image */}
            <div className="h-48 md:h-72 w-full bg-gray-300" />

            {/* Skeleton Text */}
            <div className="flex flex-col gap-y-2 p-4">
              <div className="h-6 w-3/4 bg-gray-300 rounded" />
              <div className="h-4 w-1/2 bg-gray-300 rounded" />
              <div className="h-4 w-1/3 bg-gray-300 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
