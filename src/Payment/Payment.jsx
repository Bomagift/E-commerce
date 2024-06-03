import "./Payment.css";
import Header from "../E-commerce_landingpage_components/Header";
import Navbar from "../E-commerce_landingpage_components/Navbar";
import Social from "../E-commerce_landingpage_components/Social";
import Footer from "../E-commerce_landingpage_components/Footer";
import ProductDashboard from "../E-commerce_landingpage_components/ProductDashboard";
import PaymentBreadcrumbs from "../Payment_components/PaymentBreadcrumbs";
import CartDetails from "../Payment_components/CartDetails";
import OrderSummary from "../Payment_components/OrderSummary";

function Payment() {
  return (
    <>
      <>
        <Header />
        <Navbar />
        <div className="Background">
          <PaymentBreadcrumbs />
          <div className="shopping-cart">
            <CartDetails />
            <OrderSummary />
          </div>
          <ProductDashboard />
        </div>
      </>
      <div className="Ashcolor">
        <Social />
      </div>
      <Footer />
      <div className="last-footer">
        <h6>Made With Love By Finland All Right Reserved </h6>
      </div>
    </>
  );
}

export default Payment;
