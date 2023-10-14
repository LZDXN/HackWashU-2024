import React, { useState } from "react";
import "./App.css";

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState("");
  const [keyword, setKeyword] = useState("");

  const handleDropdownChange = (e) => {
    setSelectedCharacter(e.target.value);
  };

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div className="container">
      <div className="left-column">
        {/* Chatting window or file selection */}
        <div className="chat-window">
          Chatting window or file selection goes here...
        </div>
      </div>
      <div className="center-column">
        {/* Dropdown for selecting characters */}
        <select
          className="character-dropdown"
          value={selectedCharacter}
          onChange={handleDropdownChange}
        >
          <option value="character1">Character 1</option>
          {/* Add more options as needed */}
        </select>

        {/* Input with keywords */}
        <div className="keyword-input">
          <input
            type="text"
            placeholder="Enter keyword..."
            value={keyword}
            onChange={handleKeywordChange}
          />
          <button>Submit</button>
        </div>

        {/* Placeholder for graphics */}
        <div className="graphic-placeholder">Graphic 1 placeholder</div>
        <div className="graphic-placeholder">Graphic 2 placeholder</div>
        {/* Add more graphics placeholders as needed */}
      </div>
    </div>
  );
}

export default App;
