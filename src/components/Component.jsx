import React, { useState } from "react";
import "../components/Component.css";

const Component = ({ images }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleNextImages = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 3, images.length - 1));
  };

  const handlePrevImages = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 3, 0));
  };

  const visibleImages = images.slice(startIndex, startIndex + 3);

  const showScrollButtons = images.length > 3;

  return (
    <div className="image-gallery">
      {showScrollButtons && (
        <button className="scroll-button1" onClick={handlePrevImages}>
          &lt;
        </button>
      )}
      <div className="image-row">
        {visibleImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className="circleImages"
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      {showScrollButtons && (
        <button className="scroll-button2" onClick={handleNextImages}>
          &gt;
        </button>
      )}
      {selectedImage && (
        <div className="modal">
          <span className="close-button" onClick={handleCloseModal}>
            &times;
          </span>
          <img
            src={selectedImage}
            alt="Full Screen"
            className="full-screen-image"
          />
        </div>
      )}
    </div>
  );
};

export default Component;
