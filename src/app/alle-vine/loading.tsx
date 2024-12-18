export default function Loading() {
  const skeletonKeys = Array.from({ length: 8 }, (_, i) => `skeleton-${i}`); // Skaber unikke nøgler

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex gap-8 overflow-x-auto px-6 py-4">
        {skeletonKeys.map((key) => (
          <div key={key} className="animate-pulse flex-shrink-0 flex flex-col w-full rounded-lg overflow-hidden border-2 border-gray-400 bg-gray-200">
            <div className="h-48 w-full bg-gray-300" />
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
