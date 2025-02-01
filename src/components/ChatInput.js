import React, { useState } from "react";
import { Paperclip, Send } from "lucide-react";

const ChatInput = ({ onSendMessage, onUpload }) => {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);

  const handleSend = () => {
    if (message.trim() || file) {
      onSendMessage(message, file);
      setMessage("");
      setFile(null);
    }
  };

  const handleUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      onUpload(uploadedFile);
    }
  };

  return (
    <div className="fixed bottom-0 w-full bg-white dark:bg-gray-900 p-4 shadow-lg border-t dark:border-gray-700 flex items-center gap-3 md:max-w-3xl mx-auto rounded-t-2xl">
      {/* File Upload Button */}
      <label className="cursor-pointer flex items-center justify-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg p-2">
        <Paperclip size={40} className="text-gray-500 dark:text-gray-400" />
        <input type="file" className="hidden" onChange={handleUpload} />
      </label>

      {/* Text Input */}
      {/* <textarea
        rows="1"
        className="flex-1 resize-none border rounded-lg p-5 bg-gray-100 dark:bg-gray-800 text-black dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
        placeholder="Type YES to get started."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea> */}
{/* Text Input */}
<input
className="flex-1 resize-none border rounded-lg p-3 bg-gray-100 dark:bg-gray-800 text-black dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 text-3xl"
placeholder="Type `YES` to get started."
        value={message}
        onChange={(e) => setMessage(e.target.value)}

></input>
      {/* Send Button */}
      <button
        className="bg-black text-white p-5 rounded-lg hover:bg-black-600 flex items-center justify-center"
        onClick={handleSend}
      >
        <Send size={25} />
      </button>
    </div>
  );
};

export default ChatInput;
