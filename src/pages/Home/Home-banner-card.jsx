import React from "react";

const BannerCard = ({ title, description }) => {
  return (
    <div className="banner-card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default BannerCard;
