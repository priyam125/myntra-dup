import React, { FC } from "react";

type ProductProps = {
  product: any;
};

const ProductCard: FC<ProductProps> = ({ product }) => {
  const calculateDiscountPercentage = (mrp: number, listingPrice: number) => {
    const discount = mrp - listingPrice;
    return Math.round((discount / mrp) * 100);
  };

  return (
    <div key={product.id} className="flex flex-col bg-white rounded-lg p-4">
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
            ({calculateDiscountPercentage(product.mrp, product.listingPrice)}%
            off)
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
