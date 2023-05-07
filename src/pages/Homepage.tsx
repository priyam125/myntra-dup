import React, { FC, useState } from "react";
import { collections } from "../utils";

const Homepage: FC = () => {
  const [sortOrder, setSortOrder] = useState<
    "asc" | "desc" | "priceAsc" | "priceDesc"
  >("asc");

  console.log(collections);

  const sortProducts = (products: any[]) => {
    switch (sortOrder) {
      case "asc":
        return products.sort((a, b) => a.name.localeCompare(b.name));
      case "desc":
        return products.sort((a, b) => b.name.localeCompare(a.name));
      case "priceAsc":
        return products.sort((a, b) => a.listingPrice - b.listingPrice);
      case "priceDesc":
        return products.sort((a, b) => b.listingPrice - a.listingPrice);
      default:
        return products;
    }
  };

  const handleSortOrderChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSortOrder(event.target.value as any);
  };

  const calculateDiscountPercentage = (mrp: number, listingPrice: number) => {
    const discount = mrp - listingPrice;
    return Math.round((discount / mrp) * 100);
  };

  return (
    <div>
      <div className="flex justify-end my-4 items-center">
        <label htmlFor="sortOrder" className="mr-2">
          Sort By:
        </label>
        <select
          id="sortOrder"
          name="sortOrder"
          value={sortOrder}
          onChange={handleSortOrderChange}
          className="px-4 py-2 border rounded-md"
        >
          <option value="asc">Name A-Z</option>
          <option value="desc">Name Z-A</option>
          <option value="priceAsc">Price Low to High</option>
          <option value="priceDesc">Price High to Low</option>
        </select>
      </div>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 p-2">
        {sortProducts(collections).map((product) => (
          <div
            key={product.id}
            className="flex flex-col bg-white rounded-lg p-4"
          >
            <div className="w-full h-48 md:h-64 lg:h-80 flex-shrink-0">
              <img
                src={product.primaryImage.jpegImages.lImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-2 px-2">
              <h2 className="text-xs font-bold mb-1">{product.name}</h2>
              <p className="text-xs text-gray-500 mb-2 overflow-hidden text-ellipsis whitespace-nowrap">
                Description: {product.description}
              </p>
              <p className="text-xs font-bold">
                Rs. {product.listingPrice}
                <span className="ml-2 line-through">Rs. {product.mrp}</span>
                <span className="text-red-500 ml-2">
                  (
                  {calculateDiscountPercentage(
                    product.mrp,
                    product.listingPrice
                  )}
                  % off)
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
