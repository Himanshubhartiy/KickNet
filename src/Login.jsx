import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";

function Login({ setUsername }) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = { identifier, password };

    try {
      const response = await fetch(
        "http://localhost/php-redis-backend/login.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      if (response.ok) {
        const username = result.username;
        sessionStorage.setItem("username", username);
        setUsername(username);
        navigate("/");
      } else {
        setErrorMessage(result.message || "Login failed.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setErrorMessage("An error occurred while logging in.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="container mt-5 d-flex justify-content-center bg-light">
        <div className="p-4">
          <div className="card p-4 shadow-lg rounded-3">
            <h2 className="card-title text-center mb-4">Login</h2>
            {errorMessage && (
              <div className="alert alert-danger" role="alert">
                {errorMessage}
              </div>
            )}
            <form onSubmit={handleLogin}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control rounded-4"
                  id="identifierInput"
                  placeholder="Enter username or email"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  required
                />
                <label htmlFor="identifierInput">
                  Username or Email Address
                </label>
              </div>

              <div className="form-floating mb-3 position-relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control rounded-4"
                  id="exampleInputPassword1"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="exampleInputPassword1">Password</label>
                <button
                  type="button"
                  className="position-absolute top-50 end-0 translate-middle-y border-0 bg-transparent me-3"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>

              <Link
                to={"/createaccount"}
                className="nav-link text-decoration-underline text-end"
              >
                Register To Create Account
              </Link>

              <div className="d-grid gap-2">
                <button
                  type="submit"
                  className="btn btn-secondary rounded-pill mt-4"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
