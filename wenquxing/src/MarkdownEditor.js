import React, { useState } from "react";
const marked = require("marked"); // Library to parse markdown

function MarkdownEditor({ onSave }) {
  const [content, setContent] = useState(""); // Local state to manage the markdown content

  // Function to handle content changes
  const handleChange = (e) => {
    setContent(e.target.value);
  };

  // Function to handle content save
  const handleSave = () => {
    onSave(content);
  };

  // Function to convert markdown to HTML for preview
  const getMarkdownPreview = () => {
    return { __html: marked(content) };
  };

  return (
    <div className="markdown-editor">
      {/* Editor Pane */}
      <textarea
        value={content}
        onChange={handleChange}
        className="editor-pane"
      />

      {/* Preview Pane */}
      <div
        className="preview-pane"
        dangerouslySetInnerHTML={getMarkdownPreview()}
      />

      {/* Save Button */}
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default MarkdownEditor;
