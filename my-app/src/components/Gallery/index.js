import React from 'react';

import GalleryImage from './components/GalleryImages'
import './styles.css';

function Gallery(props) {
    const handleClick = id => {
        console.log('Se llamo desde Gallery');
        console.log(id);
    }
    

    return (
        <div className="gallery">
            {
                props.images.map((image) => {
                  return <GalleryImage key={image.id} src={image.url} title={image.title} onClick={handleClick} id={image.id} />    
                })
            }
        </div>
    )
}

export default Gallery;