import React from "react";
import { Link, useLocation } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { calculateDiscountPercentage, product } from "../utils";

const ProductDetails: React.FC<any> = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation bar */}
      <nav className="flex items-center justify-between px-4 py-2 bg-white border-b-2 border-gray-200">
        <div className="flex items-center">
          <Link
            to="/"
            className="text-xl font-semibold text-gray-800 hover:text-gray-900"
          >
            &#8592; Back
          </Link>
        </div>
        <div className="flex items-center">
          <button className="p-2 mr-2 text-gray-800 hover:text-gray-900">
            <SearchIcon />
          </button>
          <button className="p-2 mr-2 text-gray-800 hover:text-gray-900">
            <FavoriteIcon />
          </button>
          <button className="p-2 text-gray-800 hover:text-gray-900">
            <LocalMallIcon />
          </button>
        </div>
      </nav>

      {/* Product image */}
      <div className="flex-grow h-full">
        <img
          src={product.primaryImage.jpegImages.lImage}
          alt={product.name}
          className="w-full h-full object-cover"
          style={{ height: "inherit" }}
        />
      </div>

      {/* Product details */}
      <div className="flex flex-col">
        <h2 className="text-lg font-bold mb-2 px-4">{product.name}</h2>
        <p className="text-gray-500 mb-2 text-sm px-4">{product.description}</p>
        <p className="text-lg font-bold px-4">
          Rs. {product.listingPrice}
          <span className="ml-2 line-through">Rs. {product.mrp}</span>
          <span className="text-orange-300 ml-2">
            ({calculateDiscountPercentage(product.mrp, product.listingPrice)}%
            off)
          </span>
        </p>
        {product.availableQty < 10 && (
          <p className="text-orange-600 text-sm font-bold mt-2">
            Only Few Left!
          </p>
        )}
        <div className="flex flex-row justify-between mt-4 shadow-md border-t-2 space-x-2 mb-2 px-2">
          <button className="px-4 py-2 text-sm font-medium text-gray-800 border border-gray-300 rounded-md hover:text-gray-900 w-1/2 mt-1">
            WISHLIST
          </button>
          <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-md hover:text-gray-900 w-1/2 bg-pink-600 text-white mt-1">
            ADD TO BAG
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
