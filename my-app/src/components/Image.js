import React, { useState } from "react";

function Image() {
  const [images, setImages] = useState([]);
  const [size, setSize] = useState({ width: 1200, height: 900 });

  const url =
    "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/22/16/oslo.jpg?width=1200&height=900&fit=crop";

  const addImage = () => {
    setImages([...images, { id: Date.now(), src: url }]);
  };

  const zoomIn = () =>
    setSize({ width: size.width + 100, height: size.height + 100 });
  const zoomOut = () =>
    setSize({ width: size.width - 100, height: size.height - 100 });

  const removeImage = () => {
    if (images.length > 0) {
      setImages(images.slice(0, -1));
    }
  };

  return (
    <div>
      {/* Кнопки управления */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button onClick={addImage}>Add</button>
        <button onClick={zoomIn}>Zoom In</button>
        <button onClick={zoomOut}>Zoom Out</button>
        <button onClick={removeImage}>Remove</button>
      </div>
      {/* Отображение изображений */}
      <div>
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt="Oslo city"
            style={{
              width: size.width,
              height: size.height,
              marginBottom: "10px",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Image;
