import React from "react";
import Header from "../E-commerce_landingpage_components/Header";
import Navbar from "../E-commerce_landingpage_components/Navbar";
import "./LandingPage.css";
import FunitureGridpage from "../E-commerce_landingpage_components/FunitureGridpage";
import BestsellerHeading from "../E-commerce_landingpage_components/BestsellerHeading";
import ProductDashboard from "../E-commerce_landingpage_components/ProductDashboard";
import Feature from "../E-commerce_landingpage_components/Feature";
import NewProduct from "../E-commerce_landingpage_components/NewProduct";
import Featured_Post from "../E-commerce_landingpage_components/Featured_Post";
import Testimonial from "../E-commerce_landingpage_components/Testimonial";
import Gallery from "../E-commerce_landingpage_components/Gallery";
import Footer from "../E-commerce_landingpage_components/Footer";
import Social from "../E-commerce_landingpage_components/Social";
import CallToAction from "../E-commerce_landingpage_components/CallToAction";
function LandingPage() { 
  return (
    <div className="landingPage-container">
      <Header />
      <Navbar />
      <FunitureGridpage />
      <BestsellerHeading />
      <ProductDashboard />
      <BestsellerHeading />
      <Feature />
      <Featured_Post />
      <NewProduct />
      <div className="home-page">
        <Testimonial />
        <Gallery />
      </div>
      <CallToAction />
      <Social />
      <Footer />
      <div className="last-footer">
        <h6>Made With Love By Finland All Right Reserved </h6>
      </div>
    </div>
  );
}

export default LandingPage;
