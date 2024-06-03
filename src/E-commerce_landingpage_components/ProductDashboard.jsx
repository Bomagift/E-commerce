import React from "react";
import "./ProductDashboard.css";

const cards = [
  {
    img: "/public/Images/product-cover-5.png",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    img: "/public/Images/product-cover-5 (10).png",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    img: "/public/Images/product-cover-5 (11).png",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    img: "/public/Images/product-cover-5 (8).png",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    img: "/public/Images/product-cover-5 (3).png",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    img: "/public/Images/product-cover-5 (4).png",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    img: "/public/Images/product-cover-5 (5).png",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    img: "/public/Images/product-cover-5 (6).png",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    img: "/public/Images/product-cover-5 (9).png",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    img: "/public/Images/product-cover-5 (7).png",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
];

const ProductDashboard = () => {
  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.img} alt={card.title} />
          <div className="card-content">
            <h3>{card.title}</h3>
            <p>{card.department}</p>
            <div className="prices">
              <span className="old-price">{card.oldPrice}</span>
              <span className="new-price">{card.newPrice}</span>
            </div>
          </div>
        </div>
      ))}
      <button className="load">LOAD MORE PRODUCTS</button>
    </div>
  );
};

export default ProductDashboard;
