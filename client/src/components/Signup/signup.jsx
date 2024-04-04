import { useState } from "react";
import "./signup.css";
import {useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const history = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (phone.length !== 10) {
      setError("Phone number must be 10 digits");
      return;
    }
    setError("");
    history("/login")
  };

  const usernameField = () => {
    return (
      <div className="inputField">
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

  const confirmPasswordField = () => {
    return (
      <div className="inputField">
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          id="pass"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
    );
  };

  const phoneNumber = () => {
    return (
      <div className="inputField">
        <input
          type="number"
          placeholder="Enter Your Number"
          value={phone}
          id="ph"
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
    );
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2 className="headCreateAcc">Ready to create an account</h2>
        <form onSubmit={handleSubmit}>
          {usernameField()}
          {emailField()}
          {passwordField()}
          {confirmPasswordField()}
          {phoneNumber()}
          <button type="submit" className="signupBtn">
            signup
          </button>
          <p className="warning">{error}</p>
          {/* <Link to="/signup">Don&apos;t have an account? Sign up</Link>
          <Link to="/forget_password">Forgot Password?</Link> */}
        </form>
      </div>
    </div>
  );
};

export default Signup;
