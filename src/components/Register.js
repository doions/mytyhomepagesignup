import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import Landing from "./Landing";
import Playbutton from "./Playbutton.js";
import Chat from "./Chat";


const Register = ({ onSendMessage, onUpload }) => {
  const [authSelect, setauthSelect] = useState("landing")
  const [isLoading, setIsLoading] = useState(false)
  //const [command, setCommand] = useState("init")

  const handleAuth = (data) => {
    setauthSelect(data)
    console.log("auth set screen next")
  }
  
  /* const [message, setMessage] = useState("");
  const [file, setFile] = useState(null); */

  /* const handleSend = () => {
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
*/
  return (
    <>  <div className="fixed bottom-0 w-full bg-white dark:bg-gray-900 p-4 shadow-lg border-t dark:border-gray-700 flex  gap-3 md:max-w-3xl mx-auto rounded-t-2xl">
      {/* File Upload Button , aj i need to add a component here which renders a button depends on the content on the panel.*/}
      <label className="cursor-pointer w-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg p-2">

        {authSelect === "landing" ? (<><Landing handleLanding={handleAuth} /><span className="flex flex-row">
         {/*  <Playbutton /> we will see later*/}
          </span></>) : ""}

        {authSelect === "register" ? (<Signup SetIsLoading={setIsLoading} handleBack={handleAuth}/>) : ""}

        {authSelect === "login" ? (<Login handleBack={handleAuth}/>) : ""}
        {authSelect === "chat" ? (<Chat />) : ""}


      </label>





      {/** css correction is required for mobile responsiveness of the text tag line. */} {/* Send Button 
      <button
        className="bg-black text-white p-5 rounded-lg hover:bg-black-600 flex items-center justify-center"
        onClick={handleSend}
      >
        <Send size={25} />
      </button>*/}
    </div></>
  );
};

export default Register;
