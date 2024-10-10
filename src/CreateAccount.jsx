import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function CreateAccount({ setUsername }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "", // New state for confirm password
    name: "",
    contact: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // New state for show/hide confirm password
  const [successMessage, setSuccessMessage] = useState("");
  const [usernameExists, setUsernameExists] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isContactValid, setIsContactValid] = useState(false);
  const navigate = useNavigate();

  const handleChange = async (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });

    if (id === "username") {
      await checkUsernameUniqueness(value);
    }

    if (id === "password") {
      setIsPasswordValid(validatePassword(value));
    }
    if (id === "contact") {
      setIsContactValid(/^\d{10}$/.test(value));
    }
  };

  const checkUsernameUniqueness = async (username) => {
    if (username) {
      try {
        const response = await fetch(
          "http://localhost/php-redis-backend/api_getunique_username.php",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username }),
          }
        );

        const result = await response.json();

        if (result.exists) {
          setUsernameExists(true);
        } else {
          setUsernameExists(false);
        }
      } catch (error) {
        console.error("Error checking username uniqueness:", error);
      }
    } else {
      setUsernameExists(false);
    }
  };

  const validatePassword = (password) => {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@$#!%*?&]{8,}$/;
    return passwordPattern.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      loading ||
      usernameExists ||
      formData.password !== formData.confirmPassword
    ) {
      return;
    }

    setLoading(true);
    setSuccessMessage("");

    try {
      const response = await fetch(
        "http://localhost/php-redis-backend/create.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem("username", formData.username);
        setUsername(formData.username);
        setSuccessMessage("Account created successfully");
        navigate("/");
      } else {
        if (result.message.includes("Username already exists")) {
          setUsernameExists(true);
        } else {
          setSuccessMessage("Failed to create account: " + result.message);
        }
      }
    } catch (error) {
      console.error("Error creating account:", error);
      setSuccessMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="container mt-4 d-flex align-items-center justify-content-center bg-light">
      <div className="p-4">
        <div className="card shadow-lg p-3 rounded-3">
          <h2 className="card-title text-center mb-4">Create Account</h2>

          {successMessage && (
            <div className="alert alert-success" role="alert">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control rounded-4"
                id="username"
                placeholder="Enter username"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <label htmlFor="username">Username</label>
              {usernameExists && (
                <small className="text-danger mt-2">
                  Username already exists. Please choose another one.
                </small>
              )}
            </div>

            <div className="form-floating mb-3 position-relative">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control rounded-4"
                id="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
                onFocus={() =>
                  setIsPasswordValid(validatePassword(formData.password))
                }
                onBlur={() =>
                  setIsPasswordValid(validatePassword(formData.password))
                }
              />
              <label htmlFor="password">Password</label>
              <button
                type="button"
                className="position-absolute top-50 end-0 translate-middle-y border-0 bg-transparent me-3"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            {formData.password && !isPasswordValid && (
              <small className="form-text text-muted mb-3">
                Password must be at least 8 characters long, include uppercase
                letters, lowercase letters, numbers, and special characters.
              </small>
            )}

            <div className="form-floating mb-3 position-relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="form-control rounded-4"
                id="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <label htmlFor="confirmPassword">Confirm Password</label>
              <button
                type="button"
                className="position-absolute top-50 end-0 translate-middle-y border-0 bg-transparent me-3"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            {formData.confirmPassword &&
              formData.password !== formData.confirmPassword && (
                <small className="form-text text-danger mb-3">
                  Passwords do not match. Please try again.
                </small>
              )}

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control rounded-4"
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="name">Name</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="tel"
                className="form-control rounded-4"
                id="contact"
                placeholder="Enter contact number"
                value={formData.contact}
                onChange={handleChange}
                required
              />
              <label htmlFor="contact">Contact Number</label>
            </div>
            {formData.contact && !isContactValid && (
              <small className="form-text text-muted mb-3">
                Please enter a 10-digit mobile number without any spaces or
                special characters.
              </small>
            )}

            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control rounded-4"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="email">Email</label>
            </div>

            <Link
              to={"/login"}
              className="nav-link text-decoration-underline text-end mb-3"
            >
              Already have an account? Log in
            </Link>

            <button
              type="submit"
              className="btn btn-secondary rounded-4 w-100"
              disabled={
                loading ||
                usernameExists ||
                formData.password !== formData.confirmPassword
              }
            >
              {loading ? "Creating..." : "Create Account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
