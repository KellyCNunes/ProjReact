import React from "react";
import Profile from "./Profile";
import "./Gallery.css"; // Importa o CSS específico do componente

export default function Gallery() {
  // Dados de exemplo para a galeria
  const profiles = [
    { id: 1, src: "https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2020/07/dandara.jpg?quality=70&strip=info&w=650", alt: "imagem1" },
    { id: 2, src: "https://s2.glbimg.com/T3S3_cKTfptrgh-jPFfAYdbp_h4=/e.glbimg.com/og/ed/f/original/2018/03/15/marielle_franco_xGYRDDR.jpg", alt: "imagem2" },
    { id: 3, src: "https://s2.glbimg.com/3sMPdx6Wv1NnP2wS5a_f8-3nXIA=/e.glbimg.com/og/ed/f/original/2020/06/25/valerie-thomas.png", alt: "Dandara" },


];


  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Galeria de Perfis</h2>
      <div className="gallery">
        {profiles.map((profile) => (
          <Profile key={profile.id} src={profile.src} alt={profile.alt} />
        ))}
      </div>
    </div>
  );
}
