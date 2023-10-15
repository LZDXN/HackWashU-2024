import React, { useState } from "react";
import "../App.css"; // Importing unified CSS

const UserAuth = ({ onUserAuth }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    // Handle Sign In Logic
    onUserAuth(username);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle Sign Up Logic
    onUserAuth(username);
  };

  return (
    <div className="user-auth">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="button" onClick={handleSignIn}>
        Sign In
      </button>
      <button type="button" onClick={handleSignUp}>
        Register
      </button>
    </div>
  );
};

export default UserAuth;
