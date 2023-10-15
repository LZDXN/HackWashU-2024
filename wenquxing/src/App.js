import React, { useState } from "react";
import "./App.css";
import UserAuth from "./components/UserAuth";
import FileEditor from "./components/FileEditor";
import CharacterSelector from "./components/CharacterSelector";
import ImageGenerator from "./components/ImageGenerator";
import FileSelector from "./components/FileSelector";

function App() {
  const [user, setUser] = useState(null);
  const [mdFile, setMdFile] = useState("");
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null); // New state for selected file

  const handleUserAuth = (userData) => setUser(userData);
  const handleMdFileChange = (newMdFile) => setMdFile(newMdFile);
  const handleCharacterChange = (newCharacterData) =>
    setSelectedCharacters(newCharacterData);
  const handleImageGeneration = (generatedImageData) =>
    setGeneratedImage(generatedImageData);
  const handleFileSelect = (selectedFileData) =>
    setSelectedFile(selectedFileData); // New handler

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-title">Wenquxing</div>
        <UserAuth onUserAuth={handleUserAuth} user={user} />
      </nav>

      <div className="content">
        <div className="left-column">
          <FileSelector
            onFileSelect={handleFileSelect}
            selectedFile={selectedFile}
          />
        </div>

        <div className="center-column">
          <CharacterSelector
            onCharacterChange={handleCharacterChange}
            selectedCharacters={selectedCharacters}
          />
          <FileEditor onMdFileChange={handleMdFileChange} mdFile={mdFile} />
        </div>

        <div className="right-column">
          <ImageGenerator
            onImageGeneration={handleImageGeneration}
            generatedImage={generatedImage}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
