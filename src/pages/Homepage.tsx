import React, { FC, useState } from "react";
import { collections } from "../utils";
import ProductCard from "../component/ProductCard";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { BiSortAlt2, BiFilterAlt } from "react-icons/bi";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Homepage: FC = () => {
  // const [sortOrder, setSortOrder] = useState<
  //   "asc" | "desc" | "priceAsc" | "priceDesc"
  // >("asc");
  const [sortOrder, setSortOrder] = useState<any>("asc");
  const [showSuppliers, setShowSuppliers] = useState(false);
  const [showSareeFabric, setShowSareeFabric] = useState(false);

  const [selectedSuppliers, setSelectedSuppliers] = useState<string[]>([]);
  const [selectedFabrics, setSelectedFabrics] = useState<string[]>([]);

  const [showSorOptions, setshowSorOptions] = useState(false);

  const sortOptionsArray = [
    { label: "Name Ascending", value: "asc" },
    { label: "Price Ascending", value: "priceAsc" },
    { label: "Price Dscending", value: "priceDesc" },
  ];

  const supplierOptions = [
    { label: "Vastrananda", value: "Vastrananda" },
    { label: "Saree Shop", value: "Saree Shop" },
  ];

  const fabricOptions = [
    { label: "Poly georgette", value: "poly-georgette" },
    { label: "Silk blend", value: "silk-blend" },
  ];

  const sortProducts = (products: any[]) => {
    let filteredProducts = products;

    if (selectedSuppliers.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedSuppliers.includes(product.supplierName)
      );
    }

    if (selectedFabrics.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedFabrics.includes(product.sareeFabric)
      );
    }

    switch (sortOrder) {
      case "asc":
        return filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      case "desc":
        return filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
      case "priceAsc":
        return filteredProducts.sort((a, b) => a.listingPrice - b.listingPrice);
      case "priceDesc":
        return filteredProducts.sort((a, b) => b.listingPrice - a.listingPrice);
      default:
        return filteredProducts;
    }
  };

  const handleSortOrderChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSortOrder(event.target.value as any);
  };

  return (
    <div>
      {/* Navigation bar */}
      <nav className="flex items-center justify-between px-4 py-2 bg-white border-b-2 border-gray-200 md:hidden">
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

      {/*Navigation Bar for desktop*/}
      <div
        id="navdivdesktop"
        className="shadow-md px-6 py-4 justify-between items-center hidden md:flex"
      >
        <div className="flex flex-col">
          <div className="flex flex-wrap mb-2">
            <button
              onClick={() => setShowSuppliers(!showSuppliers)}
              className="mr-4 bg-white py-1 px-4 rounded-full shadow-md hover:shadow-lg flex items-center"
            >
              <span className="mr-2">Suppliers</span>{" "}
              {showSuppliers ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}{" "}
            </button>
            <button
              onClick={() => setShowSareeFabric(!showSareeFabric)}
              className="ml-4 bg-white py-1 px-4 rounded-full shadow-md hover:shadow-lg flex items-center"
            >
              <span className="mr-2">Saree Fabric</span>{" "}
              {showSareeFabric ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}{" "}
            </button>
          </div>
          <div className="flex flex-col flex-wrap px-4" id="checkboxdiv">
            {showSuppliers && (
              <div className="flex items-center space-x-8">
                {supplierOptions.map((option) => (
                  <label key={option.value}>
                    <input
                      type="checkbox"
                      name={option.value}
                      className="mr-2"
                      checked={selectedSuppliers.includes(option.value)}
                      onChange={(event) => {
                        const isChecked = event.target.checked;
                        setSelectedSuppliers((prevSelected) =>
                          isChecked
                            ? [...prevSelected, option.value]
                            : prevSelected.filter(
                                (name) => name !== option.value
                              )
                        );
                      }}
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            )}
            {showSareeFabric && (
              <div className="flex items-center space-x-8">
                {fabricOptions.map((option) => (
                  <label key={option.value}>
                    <input
                      type="checkbox"
                      name={option.value}
                      className="mr-2"
                      checked={selectedFabrics.includes(option.value)}
                      onChange={(event) => {
                        const isChecked = event.target.checked;
                        setSelectedFabrics((prevSelected) =>
                          isChecked
                            ? [...prevSelected, option.value]
                            : prevSelected.filter(
                                (name) => name !== option.value
                              )
                        );
                      }}
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center fixed right-4">
          <label htmlFor="sortOrder" className="mr-2">
            Sort By:
          </label>
          <select
            id="sortOrder"
            name="sortOrder"
            value={sortOrder}
            onChange={handleSortOrderChange}
            className="px-4 border bg-white shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent py-1 rounded-md"
          >
            <option value="asc">Name A-Z</option>
            {/* <option value="desc">Name Z-A</option> */}
            <option value="priceAsc">Price Low to High</option>
            <option value="priceDesc">Price High to Low</option>
          </select>
        </div>
      </div>
      <div className="grid md:gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 md:p-2">
        {sortProducts(collections).map((product, index) => (
          <div
            key={product.id}
            className={`flex flex-col ${
              index === collections.length - 1 ? "mb-6" : ""
            }`}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="flex flex-col fixed bottom-0 w-full bg-white py-4">
        {showSorOptions && (
          <div>
            {sortOptionsArray.map((option) => (
              <div
                key={option.value}
                onClick={() => {
                  setSortOrder(option.value);
                  setshowSorOptions(false);
                }}
                className={`${
                  sortOrder === option.value ? "bg-gray-200" : "bg-white"
                } p-2 cursor-pointer`}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
        <div className="flex md:hidden">
          <div
            className="flex-1 flex items-center justify-center relative"
            onClick={() => setshowSorOptions(!showSorOptions)}
          >
            <span className="z-10 px-4 flex items-center">
              <BiSortAlt2 className="mr-2" />
              SORT
            </span>
            <div className="absolute inset-y-0 right-0 w-px bg-gray-400"></div>
          </div>
          <div className="flex-1 flex items-center justify-center relative">
            <span className="z-10 px-4 flex items-center">
              <BiFilterAlt className="mr-2" /> FILTER
            </span>
            <div className="absolute inset-y-0 right-0 w-px bg-gray-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
