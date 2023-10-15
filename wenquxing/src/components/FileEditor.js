import React, { useState } from "react";

const FileEditor = ({ onMdFileChange, mdFile }) => {
  const [editorContent, setEditorContent] = useState(mdFile);

  const handleContentChange = (e) => {
    setEditorContent(e.target.value);
    onMdFileChange(e.target.value);
  };

  return (
    <div className="file-editor">
      <h2>Markdown Editor</h2>
      <textarea
        value={editorContent}
        onChange={handleContentChange}
        placeholder="Write your markdown content here..."
      />
      {/* You may add additional features like file saving, deletion, etc. */}
    </div>
  );
};

export default FileEditor;
