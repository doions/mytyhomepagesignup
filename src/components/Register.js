import React, { useState } from "react";
import { Paperclip, Send, AtSign } from "lucide-react";

const Register = ({ onSendMessage, onUpload }) => {
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
        <AtSign size={30} className="text-gray-500 dark:text-gray-400" />
        <input type="file" className="hidden" onChange={handleUpload} />
      </label>
      <label className="cursor-pointer flex items-center justify-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg p-4">
<b>Register</b></label>- or -
<label className="cursor-pointer flex items-center justify-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg p-4">
<b>Login</b></label>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;<b>myty</b>is an AI bot for live entertainment.
     
     {/** css correction is required for mobile responsiveness of the text tag line. */} {/* Send Button 
      <button
        className="bg-black text-white p-5 rounded-lg hover:bg-black-600 flex items-center justify-center"
        onClick={handleSend}
      >
        <Send size={25} />
      </button>*/}
    </div>
  );
};

export default Register;
