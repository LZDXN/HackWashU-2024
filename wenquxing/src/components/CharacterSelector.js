import React from "react";
import "../App.css";

const CharacterSelector = ({ selectedCharacters, onCharacterChange }) => {
  const allCharacters = ["Character1", "Character2", "Character3"]; // Example characters

  const handleChange = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    onCharacterChange(selectedOptions);
  };

  return (
    <div className="character-selector">
      <label htmlFor="characters">Select Characters: </label>
      <select
        id="characters"
        multiple={true}
        value={selectedCharacters}
        onChange={handleChange}
        size={allCharacters.length}
      >
        {allCharacters.map((character, index) => (
          <option key={index} value={character}>
            {character}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CharacterSelector;
