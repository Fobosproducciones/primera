import React from "react";
import "../Home/Home.css";

import Header from "../../components/header/Header";
import Coins from "../../components/coins/Coins";
import Products from "../../components/product/Product";
import Plans from "../../components/plans/Plans";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Coins />
      <Products />
      <Plans />
      <Footer />
    </div>
  );
}
