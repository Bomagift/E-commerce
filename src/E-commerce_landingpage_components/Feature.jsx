import React from 'react'
import './Feature.css'

const feature = [
    {
        imgSrc: '/public/Images/bx_bxs-book-reader.png',
        title: 'Easy Wins',
        description: 'Get your best looking smile now!'
    },
    {
        imgSrc: '/public/Images/carbon_book.png',
        title: 'Concrete',
        description: 'Defalcate is most focused in helping you discover your most beautiful smile'
    },
    {
        imgSrc: '/public/Images/uil_arrow-growth.png',
        title: 'Hack Growth',
        description: 'Overcome any hurdle or any other problem.'
    }
];

const Feature = () => {
    return (
        <div className="features-container">
            {feature.map((feature, index) => (
                <div className="feature" key={index}>
                    <img src={feature.imgSrc} alt={feature.title} className="feature-image" />
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Feature;