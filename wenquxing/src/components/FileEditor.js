// FileEditor.js
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "../App.css";
import storyData from "../data/story.json";

const FileEditor = ({ selectedFile }) => {
  const [content, setContent] = useState("");
  const [isPreview, setIsPreview] = useState(false);

  useEffect(() => {
    if (!selectedFile) {
      setContent(storyData.content);
    }
  }, [selectedFile]);
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleContentSave = () => {
    alert(
      "File saved successfully! (Note: Changes are not persistent and will be lost on refresh)"
    );
  };

  return (
    <div className="file-editor">
      <div className="editor-header">
        <h2 className="editor-title">Editing: {selectedFile || ""}</h2>
        <button
          onClick={() => setIsPreview(!isPreview)}
          className="toggle-preview-btn"
        >
          {isPreview ? "Switch to Editor" : "Switch to Preview"}
        </button>
        <button onClick={handleContentSave} className="save-btn">
          Save
        </button>
      </div>
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
