import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"; // Changed import for CSS file
import { Link } from "react-router-dom";

const Login = () => { // Changed component name to CustomLogin
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        history.push("/home");
      }
    } catch (error) {
      console.error("Error submitting login data:", error);
    }
  };

  return (
    <div className="custom-login-container"> {/* Changed className */}
      <div className="custom-login-form"> {/* Changed className */}
        <h2>Welcome to PlanYourTrip</h2>
        <p>Explore the beauty of the earth with us!</p>
        <form onSubmit={handleSubmit}>
          <div className="custom-inputField"> {/* Changed className */}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="custom-inputField"> {/* Changed className */}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="custom-loginBtn"> {/* Changed className */}
            Login
          </button>
          <div className="custom-links"> {/* Changed className */}
            <Link to="/signup">Sign up</Link>
            <Link to="/forget_password">Forgot Password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
