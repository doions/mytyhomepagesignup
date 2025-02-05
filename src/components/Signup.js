import React, { useState } from 'react'
import validator from "validator";
import { auth,/*  googleProvider, database */ } from "./firebase";
import {
    createUserWithEmailAndPassword,
    /* signInWithEmailAndPassword,
    signInWithPopup,
    signInAnonymously, */
    sendEmailVerification,
    onAuthStateChanged,
    /* signOut, */
} from "firebase/auth";
import Commander from "./Commander";


const Signup = ( {SetIsLoading,handleBack}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("anurag");
    const [emailError, setEmailError] = useState(0);
    //const [show, setShow] = useState(true);
    console.log(emailError)

    React.useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);
    //const showLoader = () => { setShow((s) => !s)}
//I want to start the spin of the parent component from here.and print loading at the main panel of input area.
const handleCommand = () => {
    handleBack('landing')
}
    const handleSignup = async () => {
        
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("User created successfully!");
            setEmailError(3);
            SetIsLoading(true);
            await sendEmailVerification(userCredential.user);
            console.log("Verification email sent!".user);
            setEmailError(4);
            SetIsLoading(false);

        } catch (error) {
            console.error("Error signing up:", error.message);
            alert(error.message);
            setEmailError(5);
        }
    };
    
    const validateEmail = (e) => {
        const email = e.target.value;

        if (validator.isEmail(email)) {
            setEmailError(1);
            console.log(email);
        } else {
            setEmailError(2);
            console.log(emailError);
        }
    };
    return (

      
        <> {/** this needs correction next 5feb 10am 25- anurag jain doions pvt ltd*/}<Commander state={emailError === 4 ? "": "signup"} handleCommand = {handleCommand}/>{emailError === 4 ? ("Verification email sent, loggin you in. and then loader and then logout and continue to chat next") : emailError === 0 || emailError === 2 ? (<input
            className="flex-1 resize-none border  p-3 bg-gray-100 dark:bg-gray-800 text-black dark:text-white border-gray-100 dark:border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-100 dark:focus:ring-gray-600 text-xl"
            placeholder="Type your email -n- Press enter"
            autoFocus={true}
            onKeyDown={(e) => {
                if (e.key === "Enter")
                    validateEmail(e);
            }}
            onChange={(e) => setEmail(e.target.value)}

        ></input>) : (<><input
            className="flex-1 resize-none border  p-3 bg-gray-100 dark:bg-gray-800 text-black dark:text-white border-gray-100 dark:border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-100 dark:focus:ring-gray-600 text-xl invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
            type={'password'}
            autoFocus={true}
            pattern=".{8,}"
            onKeyDown={(e) => {
                if (e.key === "Enter" && e.target.value.length >= 8){
                    handleSignup(e);
                }
                else{
                    console.log(e.target.value.length)
                }
                    
            }}
            onChange={(e) =>
                setPassword(e.target.value
                    
                    )}

        ></input><span class="text-gray-600 animate-pulse">Set your password, min 8 char</span></>)
        }
            <span className="text-red-600 animate-pulse" >
                {emailError === 2 ? "oops, this is not a valid emailid" : ""
                }
                {emailError === 4 ? user : ""
                }
            </span></>
    )



}

export default Signup