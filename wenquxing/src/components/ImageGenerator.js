import React, { useState } from "react";

const ImageGenerator = ({ onImageGeneration, generatedImage }) => {
  const [prompt, setPrompt] = useState("");

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleImageGeneration = () => {
    // Implement API call logic here
    // onImageGeneration(generatedImageDataFromAPI);
  };

  return (
    <div className="image-generator">
      <h2>Image Generator</h2>
      <textarea
        value={prompt}
        onChange={handlePromptChange}
        placeholder="Enter the prompt for image generation..."
      />
      <button onClick={handleImageGeneration}>Generate Image</button>
      {generatedImage && (
        <div className="generated-image">
          <h3>Generated Image:</h3>
          {/* Display the generated image here */}
          {/* Example assuming generatedImage is a URL: */}
          <img src={generatedImage} alt="Generated" />
        </div>
      )}
    </div>
  );
};

export default ImageGenerator;
