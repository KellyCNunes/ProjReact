import React from 'react';
import './profile.css';


function Profile({ name, imageSrc, altText }) {
  return (
    <div className="profile">
      <img 
        src={imageSrc} 
        alt={`${name}'s profile`} 
        className="profile-image-large" /* Adicionando a classe específica aqui */
      />

      <img src={imageSrc} alt={altText} />
      <h2>{name}</h2>
    </div>
    
  );
}

export default Profile;
