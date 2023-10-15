import React, { useState } from "react";

const CharacterSelector = ({ onCharacterChange, selectedCharacters }) => {
  const [newCharacter, setNewCharacter] = useState("");

  const handleCharacterAddition = () => {
    if (newCharacter) {
      onCharacterChange([...selectedCharacters, newCharacter]);
      setNewCharacter("");
    }
  };

  return (
    <div className="character-selector">
      <h2>Character Selector</h2>
      <input
        type="text"
        value={newCharacter}
        onChange={(e) => setNewCharacter(e.target.value)}
        placeholder="Add a new character..."
      />
      <button onClick={handleCharacterAddition}>Add Character</button>
      <h3>Selected Characters:</h3>
      <ul>
        {selectedCharacters.map((char, idx) => (
          <li key={idx}>{char}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterSelector;
