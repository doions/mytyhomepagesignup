import React from 'react'
import { Bot } from 'lucide-react';




const Landing = ({ handleLanding }) => {
    const handleRegister = () => {
        console.log("hello")
        handleLanding("register")
    }
    const handleLogin = () => {
      console.log("hello")
      handleLanding("login")
  }
  const handleCommand = () => {
    handleLanding('chat')
}
  return (
      <>                 <div className="flex  text-left items-center space-x-30 w-full">
                  
<span className='inline-flex items-center gap-4'><Bot size={30}/><p><b>Get started with myty - Register now!</b></p></span>
</div>
              <div className="flex items-center flex-row-reverse text-center space-x-30 w-full">

    <label onClick = {handleLogin} className="cursor-pointer flex  bg-zinc-200 dark:bg-gray-800 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white rounded-lg p-4 mr-4">
    <b>Login</b></label>
    <label onClick = {handleRegister} className="cursor-pointer flex  bg-gray-800 text-white dark:bg-gray-800 hover:bg-white hover:text-black dark:hover:bg-gray-700 rounded-lg p-4 mr-4">
    <b>Register</b></label>

   </div>
    </>
  )
}

export default Landing