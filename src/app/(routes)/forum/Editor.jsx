"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

const EditorComponent = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bold: false,
        italic: false,
      }),
      Placeholder.configure({
        placeholder: "What's on your mind?",
      }),
    ],
    content: "", // Default content
  });

  return (
    <div className="editor-container">
      <EditorContent editor={editor} className="w-full p-3 max-h-[20rem] overflow-y-auto border-none" />
    </div>
  );
};

export default EditorComponent;
