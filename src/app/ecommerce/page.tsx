"use client";
import React from "react";
import Ecommercee from "../components/ecommerce/ecommerce";
import Navbar from "../components/navbar/navbar";
import { GlobalStyle } from "../globalStyle/globalStyle";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const Ecommerce = () => {
  return (
    <>
      <Navbar/>
      <GlobalStyle />
      <Ecommercee/>
    </>
  );
};

export default Ecommerce;
