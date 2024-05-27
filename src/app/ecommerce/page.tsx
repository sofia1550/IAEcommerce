"use client";
import React from "react";
import Ecommercee from "../components/ecommerce/ecommerce";
import Navbar from "../components/navbar/navbar";
import { GlobalStyle } from "../globalStyle/globalStyle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Sidebar from "../components/ecommerce/sidebar/sidebar";
import Footer from "../components/footer/footer";
const Ecommerce = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <GlobalStyle />
      <Ecommercee />
      <Footer></Footer>
    </>
  );
};

export default Ecommerce;
