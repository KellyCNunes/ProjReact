import React from 'react';
import Profile from './Profile';

function Gallery() {
  return (
    <div>
      <h1>Gallery</h1>
      <Profile 
        name="Hedy Lamarr" 
        imageSrc="https://i.imgur.com/7vQD0fPs.jpg" 
        altText="Hedy Lamarr" 
      />
      <Profile 
        name="Alan Turing" 
        imageSrc="https://i.imgur.com/Vs1vh9Y.jpg" 
        altText="Alan Turing" 
      />
    </div>
  );
}

export default Gallery;
