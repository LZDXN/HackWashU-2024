import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "../App.css";

const FileEditor = ({ selectedFile }) => {
  const [content, setContent] = useState("");
  const [isPreview, setIsPreview] = useState(false);

  useEffect(() => {
    // Fetch the file content from the server when a file is selected
    const fetchFileContent = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/file/${selectedFile}`
        );
        const file = await response.json();
        setContent(file.body);
      } catch (error) {
        console.error("Error fetching file content:", error);
      }
    };
    if (selectedFile) {
      fetchFileContent();
    } else {
      setContent("");
    }
  }, [selectedFile]);

  const handleContentChange = async (e) => {
    const newContent = e.target.value;
    setContent(newContent);
  };

  const handleContentSave = async () => {
    try {
      await fetch(`http://localhost:3000/file/${selectedFile}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body: content }),
      });
      alert("File saved successfully!");
    } catch (error) {
      console.error("Error saving file content:", error);
    }
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
