// Home.tsx
"use client";
import React, { useEffect } from "react";
import Footer from "./components/footer/footer";
import { GlobalStyle } from "./globalStyle/globalStyle";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import ProjectOverview from "./components/projectOverview/projectOverview";
import ProductPreviewSection from "./components/products/productPreviewSection/productPreviewSection";
import { useAppDispatch, useAppSelector } from "@/redux/hooks"; // Asegúrate de ajustar la ruta de importación
import {
  fetchProducts,
  selectVisibleProducts,
} from "@/redux/features/product/productSlice"; // Asegúrate de que la ruta de importación sea correcta
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
function Home() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectVisibleProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <GlobalStyle />
      <Header />
      <ProjectOverview />
      <ProductPreviewSection products={products} />
      <Footer />
    </>
  );
}

export default Home;
