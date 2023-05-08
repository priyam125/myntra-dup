import React, { FC } from "react";
import { Link } from "react-router-dom";
import { calculateDiscountPercentage } from "../utils";

type ProductProps = {
  product: any;
};

const ProductCard: FC<ProductProps> = ({ product }) => {
  return (
    <Link to={`/product-details?id=${product.id}`}>
      <div
        key={product.id}
        className="flex flex-col bg-white md:p-4 flex-shrink-0 h-96 overflow-hidden"
        style={{ height: "fit-content" }}
      >
        <div className="flex-shrink-0">
          <img
            src={product.primaryImage.jpegImages.lImage}
            alt={product.name}
            className="w-full h-2/3 object-cover"
          />
        </div>
        <div className="p-2 flex-grow md:text-xs">
          <h2 className="font-bold md:mb-1 overflow-hidden text-ellipsis whitespace-nowrap w-2/3">
            {product.name}
          </h2>
          <p className="text-gray-500 md:mb-2 overflow-hidden text-ellipsis whitespace-nowrap flex-grow">
            Description: {product.description}
          </p>
          <p className="font-bold">
            ₹{product.listingPrice}
            <span className="md:ml-2 ml-1 line-through font-normal">
              ₹{product.mrp}
            </span>
            <span className="text-orange-300 ml-2">
              ({calculateDiscountPercentage(product.mrp, product.listingPrice)}%
              off)
            </span>
          </p>
          {product.availableQty < 10 && (
            <p className="text-orange-600 text-[10px] font-bold mt-2">
              Only Few Left!
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
