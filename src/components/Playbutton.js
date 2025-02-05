import React, {useState} from 'react'
import { CirclePlay, CirclePause } from "lucide-react";


const Playbutton = () => {
  const [show, setShow] = useState(true);
  
  const handlePlay = () => {
    console.log(show);
    setShow(false)
    
  }
  const handlePause = () => {
    console.log("Pause")
    setShow(true)

  }
  return (
    <>{show ? (<CirclePlay size={30} className={`text-gray-500 dark:text-gray-400 justify-end`} onClick={handlePlay}/>):
      (<CirclePause size={30} className={`text-gray-500 dark:text-gray-400 justify-end`} onClick={handlePause}/>)}</>
  )
}

export default Playbutton