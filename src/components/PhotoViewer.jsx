import React, { useState } from 'react';
import './PhotoViewer.css';

const PhotoViewer = () => {
    const photos = [
        "https://cdn.localdatacdn.com/ca/canoga-park/2499391/original/NTylL27PNl.jpg", 
        "https://cdn.localdatacdn.com/ca/canoga-park/2499391/original/ORt1mybLXM.jpg",
        "https://cdn.localdatacdn.com/ca/canoga-park/2499391/original/bp4kZeTLwn.jpg",
        "https://cdn.localdatacdn.com/ca/canoga-park/2499391/original/N0JDarep6t.jpg",
        "https://cdn.localdatacdn.com/ca/canoga-park/2499391/original/CVzXv2DfqN.jpg",
        "https://cdn.localdatacdn.com/ca/canoga-park/2499391/original/TWIOEpdxdE.jpg",
        "https://cdn.localdatacdn.com/ca/canoga-park/2499391/original/vjCd37gsmz.jpg",
        "https://cdn.localdatacdn.com/ca/canoga-park/2499391/original/rvjwPQfe7d.jpg",
        "https://cdn2.localdatacdn.com/ca/canoga-park/2499391/original/YHl2EWTxDp.jpg",
        "https://cdn2.localdatacdn.com/ca/canoga-park/2499391/original/3VkCFzjAjH.jpg",
    ];

    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentPhotoIndex((currentPhotoIndex - 1 + photos.length) % photos.length);
    };

    const handleNextClick = () => {
        setCurrentPhotoIndex((currentPhotoIndex + 1) % photos.length);
    };

    return (
        <div className="photo-viewer">
            <img id="photo" src={photos[currentPhotoIndex]}
                alt=""
                style={{ maxWidth: '630px', maxHeight: '525px', width: 'auto', height: 'auto', border: '3px solid rgb(92, 0, 0)', borderRadius: '20px'}} />
            <div className="controls">
                <button onClick={handlePrevClick}>&lt;</button>
                <button onClick={handleNextClick}>&gt;</button>
            </div>
        </div>
    );
};

export default PhotoViewer;
