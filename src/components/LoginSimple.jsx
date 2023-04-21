import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // Send login request to API
      const url = "http://localhost:3000/api/v1/users/login";
      const response = await axios.post(url, {
        email,
        password,
      });

      console.log("Login response:", response);
      // Extract JWT from response
      const { token } = response.data;

      // Store JWT in a cookie
      Cookies.set("token", token, { expires: 1 }); // Expires in 1 day

      // Redirect or perform other actions on successful login
      // e.g., history.push('/dashboard');
    } catch (error) {
      // Handle error response from API
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
