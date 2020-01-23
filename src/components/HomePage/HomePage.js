import React from "react";
import HeaderBig from "../HeaderBig";
import HeaderSmall from "../HeaderSmall";
import Products from "../ProductsList";
import Footer from "../Footer";

const HomePage = () => (
  <div>
    <div className="container">
      <HeaderBig title="Welcome to our store" />
      <HeaderSmall title="Desktops" featured />
      <Products category="desktop" />
      <HeaderSmall title="Tablets" featured />
      <Products category="tablet" />
    </div>
    <Footer></Footer>
  </div>
);

export default HomePage;
