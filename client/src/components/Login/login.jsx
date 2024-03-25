import { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();
      console.log(data);
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
          Getting bored studying and coding at home and hostel. Join us lets
          explore the nature and beauty of the earth with eyes not with a
          camera.
        </p>
      </div>
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          {usernameField()}
          {emailField()}
          {passwordField()}
          <button type="submit" className="LoginBtn">
            Login
          </button>

          <Link to="/signup">Don&apos;t have an account? Sign up</Link>
          <Link to="/forget_password">Forgot Password?</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
