import React, { useState } from "react";
import { auth,googleProvider,database } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInAnonymously,
  sendEmailVerification,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { ref, set, onValue } from "firebase/database";
console.log(database)
const dbRef = ref(database, "users/1");
set(dbRef, {
  username: "JohnDoe",
  email: "johndoe@example.com",
  profile_picture: "https://example.com/johndoe.jpg"
}).then(() => {
  console.log("Data saved successfully!");
}).catch((error) => {
  console.error("Error writing data: ", error);
});
onValue(dbRef, (snapshot) => {
  const data = snapshot.val();
  console.log("Data fetched: ", data);
});

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

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
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userRef = ref(database, 'users/' + name);
      await set(userRef, {
        name: name,
        age: age
      });
      console.log('Data added successfully!');
      setName('');
      setAge('');
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  return (


   
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <div><div>
      <h2>Add User Data</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div></div>
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
