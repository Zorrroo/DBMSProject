import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./fg.css";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/fg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        history.push("/login");
      }
    } catch (error) {
      console.error("Error submitting login data:", error);
    }
  };

  const usernameField = () => {
    return (
      <div className="inputField">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          id="username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
    );
  };

  const emailField = () => {
    return (
      <div className="inputField">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
    );
  };

  const passwordField = () => {
    return (
      <div className="inputField">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
    );
  };

  return (
    <div className="login-container">
      <div className="welcome-message">
        <h1>Welcome to PlanYourTrip</h1>
        <p>
          Keep a password that you use in your daily life so that you need not visit this page every time...
        </p>
      </div>
      <div className="login-form">
        <h2>Reset Your Password</h2>
        <form onSubmit={handleSubmit}>
          {usernameField()}
          {emailField()}
          {passwordField()}
          <button type="submit" className="LoginBtn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
