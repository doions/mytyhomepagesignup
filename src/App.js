import React, { useState } from "react";
import { auth,googleProvider } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInAnonymously,
  sendEmailVerification,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  // Monitor authentication state
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Sign up user
  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      alert("User created successfully!");
      await sendEmailVerification(userCredential.user);
      alert("Verification email sent!");


    } catch (error) {
      console.error("Error signing up:", error.message);
      alert(error.message);
    }
  };

  // Log in user
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in successfully!");
    } catch (error) {
      console.error("Error logging in:", error.message);
      alert(error.message);
    }
  };
    // Sign in with Google

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Google Sign-In successful!");
    } catch (error) {
      console.error("Error with Google Sign-In:", error.message);
      alert(error.message);
    }
  };

  // Sign in anonymously
  const handleAnonymousSignIn = async () => {
    try {
      await signInAnonymously(auth);
      alert("Signed in anonymously!");
    } catch (error) {
      console.error("Error with anonymous sign-in:", error.message);
      alert(error.message);
    }
  };
  // Log out user
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
      alert(error.message);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h1>Firebase Auth</h1>
      {user ? (
        <div>
          <h2>Welcome, {user.email || "Anonymous User"}</h2>
          {user.emailVerified === false && user.email && (
            <p style={{ color: "red" }}>Please verify your email!</p>
          )}
          <button onClick={handleLogout} style={{ marginTop: "10px" }}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ display: "block", margin: "10px 0", padding: "8px" }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ display: "block", margin: "10px 0", padding: "8px" }}
          />
          <button onClick={handleSignup} style={{ margin: "5px" }}>
            Sign Up
          </button>
          <button onClick={handleLogin} style={{ margin: "5px" }}>
            Log In
          </button>
          <button onClick={handleGoogleSignIn} style={{ margin: "5px" }}>
            Sign In with Google
          </button>
          <button onClick={handleAnonymousSignIn} style={{ margin: "5px" }}>
            Sign In Anonymously
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
