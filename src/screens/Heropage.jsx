import React from "react";
import Header from "../components/Header/Header";
import Product from "../components/Product/Product";
import Footer from "../components/Footer/Footer";
import EarthStandard from "../components/EarthStandard/earthStandard";

export default function Heropage() {
  return (
    <>
      <Header></Header>
      <Product></Product>
      <EarthStandard></EarthStandard>
    <Footer></Footer>
    </>
  );
}
