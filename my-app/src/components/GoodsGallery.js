import React from "react";
import GoodsCard from "./GoodsCard";

function GoodsGallery() {
  const products = [
    {
      id: 1,
      name: "Apple",
      price: "15 grn",
      image: `${process.env.PUBLIC_URL}/images/apple.png`,
    },
    {
      id: 2,
      name: "Pear",
      price: "20 grn",
      image: `${process.env.PUBLIC_URL}/images/pear.png`,
    },
    {
      id: 3,
      name: "Grape",
      price: "25 grn",
      image: `${process.env.PUBLIC_URL}/images/grape.png`,
    },
    {
      id: 4,
      name: "Peach",
      price: "18 grn",
      image: `${process.env.PUBLIC_URL}/images/peach.png`,
    },
    {
      id: 5,
      name: "Banana",
      price: "22 grn",
      image: `${process.env.PUBLIC_URL}/images/banana.png`,
    },
    {
      id: 6,
      name: "Orange",
      price: "23 grn",
      image: `${process.env.PUBLIC_URL}/images/orange.png`,
    },
  ];

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Fruits Gallery</h2>
      <div className="gallery-grid">
        {products.map((product) => (
          <GoodsCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default GoodsGallery;
