import React, { useState } from "react";
import "./App.css";

import UserAuth from "./components/UserAuth";
import FileSelector from "./components/FileSelector";
import FileEditor from "./components/FileEditor";
import ImageGenerator from "./components/ImageGenerator";
// import CharacterSelector from "./components/CharacterSelector";

function App() {
  const [user, setUser] = useState(null);
  const [mdFile, setMdFile] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  // const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [generatedImage, setGeneratedImage] = useState(null);

  return (
    <div className="App">
      <div className="navbar">
        <div className="nav-title">Wenquxing</div>
        <UserAuth setUser={setUser} user={user} />
      </div>
      <div className="content">
        <div className="left-column">
          <FileSelector setSelectedFile={setSelectedFile} />
        </div>
        <div className="center-column">
          <FileEditor
            onMdFileChange={setMdFile}
            mdFileContent={mdFile}
            selectedFile={selectedFile}
            // onCharacterChange={setSelectedCharacters}
            // selectedCharacters={selectedCharacters}
          />
        </div>
        <div className="right-column">
          <ImageGenerator
            mdFile={mdFile}
            onImageGeneration={setGeneratedImage}
            generatedImage={generatedImage}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
