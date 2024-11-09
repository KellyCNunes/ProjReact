// Gallery.js
import React from 'react';
import Profile from './Profile';
import './gallery.css';



function Gallery() {
  const profiles = [
    { name: 'Hedy Lamarr', role: 'Inventora e Atriz', imageSrc: 'https://vintagenevieve.wordpress.com/wp-content/uploads/2017/11/tumblr_nxjxu3x95p1qetnado1_1280.jpg' },
    { name: 'Alan Turing', role: 'Matemático e Criptógrafo', imageSrc: 'https://awl.com/wp-content/uploads/2022/06/29i273kbby241.png' },
    { name: 'Ada Lovelace', role: 'Matemática e Pioneira da Computação', imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Ada_lovelace.jpg' }
  ];

  return (
    <div className="gallery">
      <div className="profiles">
        {profiles.map((profile, index) => (
          <Profile 
            key={index} 
            name={profile.name} 
            role={profile.role} 
            imageSrc={profile.imageSrc} 
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;

