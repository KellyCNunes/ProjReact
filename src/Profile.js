import React from 'react';

function Profile({ name, imageSrc, altText }) {
  return (
    <div>
      <img src={imageSrc} alt={altText} />
      <h2>{name}</h2>
    </div>
  );
}

export default Profile;
