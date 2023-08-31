import React, { useState } from "react";
import leftArrowIcon from "../path-to-left-arrow.svg"; // Replace with your actual path
import rightArrowIcon from "../path-to-right-arrow.svg"; // Replace with your actual path
import "../components/Component.css";

const Component = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [scrollIndex, setScrollIndex] = useState(0); // Track the current scroll position
  const imageWidth = 300; // Adjust this to the actual width of your images
  const galleryWidth = images.length * imageWidth;

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handlePrevClick = () => {
    setScrollIndex(Math.max(scrollIndex - 1, 0));
  };

  const handleNextClick = () => {
    setScrollIndex(Math.min(scrollIndex + 1, images.length - 1));
  };

  return (
    <div className="image-gallery">
      <div className="scroll-container" style={{ width: galleryWidth }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className="circleImages"
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
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
