import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "../App.css";

const FileEditor = ({
  onMdFileChange,
  mdFileContent,
  selectedFile,
  onCharacterChange,
  selectedCharacters,
}) => {
  const [content, setContent] = useState(mdFileContent || "");
  const [isPreview, setIsPreview] = useState(false);

  const handleContentChange = (e) => {
    const newContent = e.target.value;
    setContent(newContent);
    onMdFileChange(newContent);
  };

  return (
    <div className="file-editor">
      <div className="editor-header">
        <h2 className="editor-title">
          Editing: {selectedFile || "No file selected"}
        </h2>
        <button
          onClick={() => setIsPreview(!isPreview)}
          className="toggle-preview-btn"
        >
          {isPreview ? "Switch to Editor" : "Switch to Preview"}
        </button>
      </div>
      {/* <div className="character-selector">
        <label htmlFor="characters">Select Characters: </label>
        <select
          name="characters"
          id="characters"
          multiple
          onChange={(e) => {
            const selectedOptions = Array.from(
              e.target.selectedOptions,
              (option) => option.value
            );
            onCharacterChange(selectedOptions);
          }}
          value={selectedCharacters}
        >
          <option value="char1">Character 1</option>
          <option value="char2">Character 2</option>
        </select>
      </div> 
      */}
      <div className="editor-content">
        {isPreview ? (
          <ReactMarkdown className="markdown-preview">{content}</ReactMarkdown>
        ) : (
          <textarea
            value={content}
            onChange={handleContentChange}
            className="markdown-input"
          />
        )}
      </div>
    </div>
  );
};

export default FileEditor;
