import React , { useState } from 'react'
import { AtSign,UserPlus,ArrowLeft,Bot } from "lucide-react";

const Commander = ({ state,handleCommand }) => {
    const [presentState, setPresentState] = useState(state)
    let data = false;
    
    console.log("jj")
    const handleClick = (command) => {
        if(command === "back"){
            handleCommand("back")
            console.log("clicked back", command);
        }
        else 
        {
            console.log("clicked", command);
            setPresentState(command);
        }
       
    }
    
  return (
    <>
      {presentState === "init" ? (
        <div onClick={() => handleClick("userplus")}>
          <AtSign
            size={30}
            className={`text-gray-500 dark:text-gray-400 ${data ? "animate-spin" : ""}`}
          />
        </div>
      ) : null}

      {presentState === "userplus" ? (
        <div onClick={() => handleClick("init")}>
          <UserPlus
            size={30}
            className={`text-gray-500 dark:text-gray-400 ${data ? "animate-spin" : ""}`}
          />
        </div>
      ) : null}
      {presentState === "login" || presentState === "signup" ? (
        <div onClick={() => handleClick("back")}>
          <ArrowLeft
            size={30}
            className={`text-gray-500 dark:text-gray-400 hover:text-black ${data ? "animate-spin" : null}`}/>
        </div>
      ) : null}
      {presentState === "init" || presentState === "bot" ? (
        <div onClick={() => handleClick("back")}>
          <Bot
            size={30}
            className={`text-gray-500 dark:text-gray-400 hover:text-black ${data ? "animate-spin" : null}`}/>
        </div>
      ) : null}
    </>
  )
}

export default Commander