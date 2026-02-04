import "../../Pages/Login/login.css";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Redux/Action/authAction";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    if (username.trim() === "" || password.trim() === "") {
      alert("Please enter username and password");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }
    const user = {
      name: username,
      avatar: "https://cdn-icons-png.flaticon.com/512/847/847969.png"
    };
    dispatch(loginUser(user));
    alert("Login successful 🎉");
    navigate("/");
  };
  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Login to continue</p>
        <input
          type="text"
          placeholder="Username"
          className="login-input"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className="login-btn" onClick={handleLogin}>
          Sign In
        </button>
        <p className="login-footer">
          Don’t have an account? <span>Register</span>
        </p>
      </div>
    </div>
  );
};
export default Login;
