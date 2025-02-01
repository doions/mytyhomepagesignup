import React from "react";
//import MytyCanvas from "./MytyCanvas";
import MediaBotLogo from "./MediaBotLogo";
//import ChatInput from "./components/ChatInput";
//import Chatbot from "./components/Chatbot";
import Register from "./components/Register";


function App() {

    /* const toggleDarkMode = () => {
        document.documentElement.classList.toggle("dark");
        console.log("clicked")
      }; 
      
    const handleSendMessage = (message, file) => {
        console.log("Message:", message);
        if (file) console.log("Uploaded File:", file);
      };
    
      const handleUpload = (file) => {
        console.log("File Uploaded:", file);
      };*/
  return (
    <div className="App">
     
      <div className="flex justify-center items-center min-h-screen bg-black">
      <MediaBotLogo size={200} />
    </div>
   
    <div className="min-h-screen flex  justify-center bg-gray-100">

     <Register/>
{/*   Make a condition render later - aj   <ChatInput onSendMessage={handleSendMessage} onUpload={handleUpload} />
 */} </div>
   
    </div>
  );
}

export default App;
