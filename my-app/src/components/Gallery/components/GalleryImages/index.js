import React from 'react';

import './styles.css';

function GalleryImage(props) {
    const handleClick = () => {
        console.log('Se llamo desde GalleryImage');
         props.onClick(props.id);
    }

    return (
    <div className="gallery-image-container">
        <p>{props.title}</p>       
        <img className="gallery-image" src={props.src} alt="" onClick={handleClick} />
    </div>
    );    
}

export default GalleryImage;