export const StockLine = ({ filledWidth = "40%" }) => {
  return (
    <div className="relative w-full h-2 rounded-full">
      <div className="absolute top-0 left-0 w-full h-full rounded-full bg-textSale opacity-50" />

      <div className="absolute top-0 left-0 w-2/5 h-full rounded-full bg-primary" style={{ width: filledWidth }} />
    </div>
  );
};
