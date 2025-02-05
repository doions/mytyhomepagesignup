import React, { useState } from 'react';
import validator from "validator";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Commander from "./Commander";


const Login = ({ SetIsLoading,handleBack }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validateEmail = (e) => {
        const email = e.target.value;
        return validator.isEmail(email);
    };
    const handleCommand = () => {
        handleBack('landing')
    }
    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Logged in successfully!");
        } catch (error) {
            console.error("Error logging in:", error.message);
            alert(error.message);
        }
    };

    return (
        <div className="flex items-center text-left space-x-10 w-full">
            <Commander state={"login"} handleCommand = {handleCommand}/>
            <input
                className="flex-1 border p-3 bg-gray-100 dark:bg-gray-800 text-black dark:text-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-md"
                type="email"
                placeholder="User ID or Email"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && validateEmail(e) && document.getElementById("password").focus()}
            />
            
            <input
                id="password"
                className="flex-1 border p-3 bg-gray-100 dark:bg-gray-800 text-black dark:text-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-md"
                type="password"
                placeholder="Your Password"
                pattern=".{8,}"
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && password.length >= 8 && handleLogin()}
            />
            
            <button
                onClick={handleLogin}
                className="bg-gray-500 text-white px-4 py-3 rounded-md shadow-md hover:bg-green-600 transition"
            >
                Login
            </button>
        </div>
    );
};

export default Login;
