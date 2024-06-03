import React from "react";
import "./ProductDisplay.css";
import ProductImage from "../ProductDisplay_Components/ProductImage";
import ProductDetails from "../ProductDisplay_Components/ProductDetails";
import Header from "../E-commerce_landingpage_components/Header";
import Navbar from "../E-commerce_landingpage_components/Navbar";
import Social from "../E-commerce_landingpage_components/Social";
import Footer from "../E-commerce_landingpage_components/Footer";
import ProductDashboard from "../E-commerce_landingpage_components/ProductDashboard";
import Logo from "../ProductDisplay_Components/Logo";
import BreadCrumb from "../ProductDisplay_Components/BreadCrumb";
import Tabs from "../ProductDisplay_Components/Tabs";
import Layout from "../ProductDisplay_Components/Layout";

function ProductDisplay() {
  return (
    <>
      <>
        <Header />
        <Navbar />
        <div className="bread-crumb">
          <BreadCrumb />
          <div className="product-display">
            <ProductImage />
            <ProductDetails />
          </div>
        </div>
      </>

      <Tabs />
      <Layout />
      <ProductDashboard />
      <Logo />
      <Social />
      <Footer />
      <div className="last-footer">
        <h6>Made With Love By Finland All Right Reserved </h6>
      </div>
    </>
  );
}

export default ProductDisplay;
