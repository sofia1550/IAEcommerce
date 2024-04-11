"use client";
import React from "react";
import Ecommercee from "../components/ecommerce/ecommerce";
import Navbar from "../components/navbar/navbar";
import { GlobalStyle } from "../globalStyle/globalStyle";

const Ecommerce = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar/>
      <Ecommercee/>
    </>
  );
};

export default Ecommerce;
