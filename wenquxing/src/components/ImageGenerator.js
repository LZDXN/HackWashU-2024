// ImageGenerator.js
import React, { useState } from "react";
import "../App.css";
import keywordsData from "../data/keywords.json";

const ImageGenerator = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);

  const handleButtonClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setImages(["1.jpg", "2.jpg", "3.jpg"]);
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="image-generator">
      <h3>Keywords</h3>
      <p>Initial: {keywordsData.initial.join(", ")}</p>
      {/* <p>After LLM: {keywordsData.afterLLM.join(", ")}</p> */}
      <button onClick={handleButtonClick}>Generate Images</button>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="image-container">
          {images.map((image, index) => (
            <img
              key={index}
              src={process.env.PUBLIC_URL + "/img/" + image}
              alt={`Generated ${index + 1}`}
              className="generated-image"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGenerator;
