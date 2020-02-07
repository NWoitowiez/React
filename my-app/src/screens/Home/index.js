import React from  'react';

import images from '../../constants/images';

import Gallery from '../../components/Gallery';

function Home() {
    return (
        <div className="main-container">
            <Gallery images={images}/>
        </div>
    );
}

export default Home;