import React, { useState } from "react";
import "../App.css";

const ImageGenerator = ({ onImageGeneration, generatedImages }) => {
  const [prompt, setPrompt] = useState("");

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your API call logic to generate images
    onImageGeneration(prompt);
  };

  return (
    <div className="image-generator">
      <div className="prompt-container">
        <label htmlFor="prompt">Image Prompt: </label>
        <input
          type="text"
          id="prompt"
          value={prompt}
          onChange={handlePromptChange}
          className="prompt-input"
        />
        <button onClick={handleSubmit} className="generate-img-btn">
          Generate Image
        </button>
      </div>
      <div className="img-container">
        {generatedImages && generatedImages.length > 0 ? (
          generatedImages.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`Generated ${index}`}
              className="generated-img"
            />
          ))
        ) : (
          <div className="img-placeholder">Image will be displayed here</div>
        )}
      </div>
    </div>
  );
};

export default ImageGenerator;
