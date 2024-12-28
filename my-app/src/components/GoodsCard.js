import React from "react";

function GoodsCard({ image, name, price }) {
  return (
    <div className="goods-card">
      <div className="goods-image-container">
        <img src={image} alt={name} className="goods-image" />
      </div>
      <h4 className="goods-name">{name}</h4>
      <p className="goods-price">Cost: {price}</p>
    </div>
  );
}

export default GoodsCard;
