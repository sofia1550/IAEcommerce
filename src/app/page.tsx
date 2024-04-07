// Home.tsx
"use client";
import React, { useEffect, useState } from "react";
import Footer from "./components/footer/footer";
import { GlobalStyle } from "./globalStyle/globalStyle";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import ProjectOverview from "./components/projectOverview/projectOverview";
import ProductsSection from "./components/products/productsSection/productSeccion";
import { fetchProducts } from "./fetchProducts";
import { Product } from "./components/products/productCard/productCard";
import ProductPreviewSection from "./components/products/productPreviewSection/productPreviewSection";

function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Header />
      <ProjectOverview />
      <ProductPreviewSection products={products} />{" "}
      <Footer />
    </>
  );
}

export default Home;
