import React, { useState } from "react";
import "../App.css";

const FileSelector = ({ onFileSelect, selectedFile }) => {
  const [files, setFiles] = useState(["example.md"]);
  const [newFileName, setNewFileName] = useState("");
  const [isCreatingFile, setIsCreatingFile] = useState(false);

  const handleFileCreate = () => {
    if (!newFileName) return;
    let formattedFileName = newFileName.endsWith(".md")
      ? newFileName
      : newFileName + ".md";
    setFiles((prevFiles) => [...prevFiles, formattedFileName]);
    setIsCreatingFile(false);
    setNewFileName("");
  };

  const handleFileDelete = (fileName) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file !== fileName));
    if (selectedFile === fileName) onFileSelect("");
  };

  const handleFileRename = (oldFileName) => {
    const newName = prompt("New name:", oldFileName);
    if (!newName || newName === oldFileName) return;
    let formattedFileName = newName.endsWith(".md") ? newName : newName + ".md";
    setFiles((prevFiles) =>
      prevFiles.map((file) => (file === oldFileName ? formattedFileName : file))
    );
    onFileSelect(formattedFileName);
  };

  return (
    <div className="file-selector">
      <button onClick={() => setIsCreatingFile(true)}>Create</button>
      {isCreatingFile && (
        <div className="new-file-input">
          <input
            type="text"
            placeholder="New file name"
            value={newFileName}
            onChange={(e) => setNewFileName(e.target.value)}
          />
          <button onClick={handleFileCreate}>Add</button>
        </div>
      )}
      <div className="file-list">
        {files.map((file, index) => (
          <div key={index} className="file-list-item">
            <button
              className={`file-button ${
                selectedFile === file ? "selected" : ""
              }`}
              onClick={() => onFileSelect(file)}
            >
              {file}
            </button>
            <button
              className="edit-button"
              onClick={() => handleFileRename(file)}
            >
              Edit
            </button>
            <button
              className="delete-button"
              onClick={() => handleFileDelete(file)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileSelector;
