import "./ProductDetails.css";
const ProductDetails = () => {
  return (
    <div className="product-details">
      <div className="DetailedProduct">
        <h4>Floating Phone</h4>
        <div className="rating">
          {"★".repeat(4)}☆ <span className="review">10 Reviews</span>{" "}
        </div>
        <h3 className="price-1">$1,139.33</h3>
        <h6 className="availability">
          Availability: <span className="in-stock">In Stock</span>
        </h6>
      </div>
      <div className="hr"></div>
      <div className="colors">
        <span className="color blue"></span>
        <span className="color green"></span>
        <span className="color orange"></span>
        <span className="color navy"></span>
      </div>

      <div className="actions">
        <button className="select-options">Select Options</button>
        <span className="vectors">
          <img src="Images/Vector (14).png" alt="" />
        </span>
        <span className="vectors">
          <img src="/Images/Vector (11).png" alt="" />
        </span>
        <span className="vectors">
          {" "}
          <img src="/Images/icn favorite (1).png" alt="" />
        </span>
      </div>
    </div>
  );
};

export default ProductDetails;
