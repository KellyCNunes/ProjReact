import React from "react";
import "./Profile.css"; 

export default function Profile({ src, alt, isVisible = true }) {
  if (!isVisible) return null; 
  return <img src={src} alt={alt} className="profile-image" />;
}
