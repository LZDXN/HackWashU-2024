import React, { useState, useEffect } from "react";
import "../App.css";

const FileSelector = ({ onFileSelect, selectedFile }) => {
  const [files, setFiles] = useState([]);
  const [newFileName, setNewFileName] = useState("");
  const [isCreatingFile, setIsCreatingFile] = useState(false);
  const userId = "652c10efb332296501abe46b";

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/files?userId=${userId}`,
          {
            headers: {
              Authorization: "Basic " + btoa("lzdxn:qwertyuiop[]"),
            },
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const files = await response.json();
        setFiles(files.map((file) => file.filename));
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };
    fetchFiles();
  }, [userId]);

  const handleFileCreate = async () => {
    if (!newFileName) return;
    let formattedFileName = newFileName.endsWith(".md")
      ? newFileName
      : newFileName + ".md";
    try {
      await fetch("http://localhost:3000/file", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          filename: formattedFileName,
          body: "",
          user_id: "652c10efb332296501abe46b",
        }),
      });
      setFiles((prevFiles) => [...prevFiles, formattedFileName]);
      setIsCreatingFile(false);
      setNewFileName("");
    } catch (error) {
      console.error("Error creating new file:", error);
    }
  };

  const handleFileDelete = async (fileName) => {
    try {
      await fetch(`http://localhost:3000/file/${fileName}`, {
        method: "DELETE",
      });
      setFiles((prevFiles) => prevFiles.filter((file) => file !== fileName));
      if (selectedFile === fileName) onFileSelect("");
    } catch (error) {
      console.error("Error deleting file:", error);
    }
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
