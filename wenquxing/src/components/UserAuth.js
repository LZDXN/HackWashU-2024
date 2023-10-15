import React, { useState } from "react";
import "./UserAuth.css";

const UserAuth = ({ onUserAuth }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    // Implement API call for sign-in here
    // On success:
    // onUserAuth({ username, /* other user data */ });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Implement API call for registration here
    // On success:
    // onUserAuth({ username, /* other user data */ });
  };

  return (
    <div className="user-auth">
      <form onSubmit={handleSignIn}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Sign In</button>
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default UserAuth;
