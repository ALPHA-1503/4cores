import React from "react";
const BannerCard = ({ icon, title, description }) => {
  return (
    <div className="banner-card">
      <div className="banner-card-title">
        <img src={icon} alt="Icône" className="banner-icon" />
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default BannerCard;