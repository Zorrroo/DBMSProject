import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./fg.css";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/fg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, phone, password }),
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

  const phoneField = () => {
    return (
      <div className="inputField">
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          id="phone"
          onChange={(e) => setPhone(e.target.value)}
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

  return (
    <div className="forget-container">
      <div className="forget-form">
        <h2 className="headResetPassword">Reset Your Password</h2>
        <form onSubmit={handleSubmit}>
          {emailField()}
          {phoneField()}
          {passwordField()}
          <button type="submit" className="ForgetBtn">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
