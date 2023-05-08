import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import ProductDetails from "./pages/ProductDetails";

function App(): JSX.Element {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product-details" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
