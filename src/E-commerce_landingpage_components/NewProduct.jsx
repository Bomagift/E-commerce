import React from "react";
import "./NewProduct.css";

const Card = ({
  image,
  date,
  comments,
  title,
  description,
  DateImage,
  CommentImage,
  LearnImage,
}) => {
  return (
    <div className="cardContainer">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <div className="card-tags">
          <span id="google">Google</span>
          <span>Trending</span>
          <span>New</span>
        </div>

        <h4 className="card-title">{title}</h4>
        <p className="card-description">{description}</p>
        <div className="card-footer">

          <span className="card-date">
            {" "}
            <img src={DateImage} alt="" className="image-1" />
            {date}
          </span>

          <span className="card-comments">
            <img src={CommentImage} alt="" className="image-1" />
            {comments} comments
          </span>
        </div>

    
        <div className="link">
          <a href="#" className="card-link">
            Learn More <img src={LearnImage} alt="" className="image-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

const NewProduct = () => {
  const cardData = [
    {
      image: "/public/Images/fixed-height (3).png",
      date: "22 April 2021",
      comments: 10,
      title: "Loudest à la Madison #1 (L'integral)",
      CommentImage: "/public/Images/Vector (8).png",
      DateImage: "/public/Images/icon cool-icon-1.png",
      LearnImage: "/public/Images/@none.png",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    },
    {
      image: "/public/Images/fixed-height (2).png",
      date: "22 April 2021",
      comments: 10,
      title: "Loudest à la Madison #1 (L'integral)",
      CommentImage: "/public/Images/Vector (8).png",
      DateImage: "/public/Images/icon cool-icon-1.png",
      LearnImage: "/public/Images/@none.png",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    },
    {
      image: "/public/Images/fixed-height (1).png",
      date: "22 April 2021",
      comments: 10,
      title: "Loudest à la Madison #1 (L'integral)",
      CommentImage: "/public/Images/Vector (8).png",
      DateImage: "/public/Images/icon cool-icon-1.png",
      LearnImage: "/public/Images/@none.png",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    },
  ];

  return (
    <div className="Card-list">
      {cardData.map((data, index) => (
        <Card key={index} {...data} />
      ))}
    </div>
  );
};

export default NewProduct;
