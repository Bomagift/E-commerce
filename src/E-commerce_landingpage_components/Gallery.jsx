
import React from 'react';
import './Gallery.css';

const Gallery = () => {
    const images = [
        '/Images/unsplash_0y8p69vwIYM.png', 
        '/Images/unsplash_ah7yIXWrtKs.png',
        '/Images/unsplash_6_dx4H4yi1Y.png',
        '/Images/unsplash_GHztzvLLOdQ.png',
        '/Images/unsplash_UUTOuXqaExk.png',
        '/Images/unsplash_rhn8ff1G_QY.png',
        '/Images/unsplash_jo40QKbxUP0.png',
        '/Images/unsplash_QLGA5Zv3doo.png',
        '/Images/unsplash_1R1ecHV4i0Y.png'
    ];

    return (
        <div className="gallery-container">
        {images.map((image, index) => (
            <img key={index} src={image} alt={`Gallery image ${index + 1}`} className="gallery-image" />
        ))}
    </div>
    );
};

export default Gallery;
