import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const FileEditor = ({ onMdFileChange, mdFile, fileName, onFileNameChange }) => {
  const [content, setContent] = useState(mdFile || "");
  const [isPreview, setIsPreview] = useState(false);

  const handleContentChange = (e) => {
    const newContent = e.target.value;
    setContent(newContent);
    onMdFileChange(newContent);
  };

  const handleFileNameChange = (e) => {
    onFileNameChange(e.target.value);
  };

  return (
    <div className="file-editor">
      <input
        type="text"
        value={fileName}
        onChange={handleFileNameChange}
        placeholder="File Name"
      />
      <button onClick={() => setIsPreview(!isPreview)}>
        {isPreview ? "Switch to Editor" : "Switch to Preview"}
      </button>
      <div className="editor-container">
        {isPreview ? (
          <ReactMarkdown className="markdown-preview" children={content} />
        ) : (
          <textarea
            value={content}
            onChange={handleContentChange}
            className="markdown-input"
            style={{ width: "100%", height: "100%" }}
          />
        )}
      </div>
    </div>
  );
};

export default FileEditor;
