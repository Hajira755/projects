import React from "react";

const ProductFilterSidebar = ({
  filters,
  priceRange,
  selectedFilters,
  onFilterChange,
  onPriceChange,
}) => {
  return (
    <div className="w-full md:w-1/4 min-h-screen p-6 bg-gray-200 border-r sticky top-0">
      <h2 className="text-xl font-semibold mb-4">Product type</h2>
      {filters.map((filter) => (
        <div key={filter.name} className="mb-3">
          <label className="flex items-center">
            <input
              type="checkbox"
              value={filter.name}
              checked={selectedFilters.includes(filter.name)}
              onChange={() => onFilterChange(filter.name)}
              className="mr-2 h-4 w-4 text-red-600"
            />
            <span className="text-gray-700">
              {filter.name} <span className="text-sm text-gray-500">({filter.count})</span>
            </span>
          </label>
        </div>
      ))}

      <h2 className="text-xl font-semibold mt-8 mb-4">Price</h2>
      <div className="flex items-center gap-2 mb-4">
        <input
          type="number"
          className="border px-2 py-1 w-1/2"
          placeholder="Min"
          value={priceRange.min}
          onChange={(e) => onPriceChange("min", e.target.value)}
        />
        <span>to</span>
        <input
          type="number"
          className="border px-2 py-1 w-1/2"
          placeholder="Max"
          value={priceRange.max}
          onChange={(e) => onPriceChange("max", e.target.value)}
        />
      </div>
      <p className="text-sm text-gray-500">Max price available: Rs. {Math.max(...filters.map(f => f.count))}</p>
    </div>
  );
};

export default ProductFilterSidebar;
