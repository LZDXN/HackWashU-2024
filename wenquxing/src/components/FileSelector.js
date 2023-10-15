import React, { useState, useEffect } from "react";
import "../App.css";
import filesData from "../data/files.json"; // Importing local JSON data

const FileSelector = ({ onFileSelect, selectedFile }) => {
  const [files, setFiles] = useState([]);
  const [newFileName, setNewFileName] = useState("");
  const [isCreatingFile, setIsCreatingFile] = useState(false);

  useEffect(() => {
    // Use local JSON data instead of fetching from API
    setFiles(filesData.map((file) => file.filename));
  }, []);

  const handleFileCreate = () => {
    if (!newFileName) return;
    let formattedFileName = newFileName.endsWith(".md")
      ? newFileName
      : newFileName + ".md";
    if (!files.includes(formattedFileName)) {
      setFiles((prevFiles) => [...prevFiles, formattedFileName]);
      setIsCreatingFile(false);
      setNewFileName("");
    } else {
      alert("File name is either empty or already exists.");
    }
  };

  const handleFileDelete = (fileName) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file !== fileName));
    if (selectedFile === fileName) onFileSelect("");
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
