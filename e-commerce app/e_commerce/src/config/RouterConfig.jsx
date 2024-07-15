import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "../components/ProductDetail.jsx";
import Home from "../pages/Home.jsx";

export default function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/product-details/:id" element={<ProductDetail />} />
    </Routes>
  );
}
