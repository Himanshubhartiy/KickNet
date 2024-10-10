import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

function Header({ username, setUsername }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      setUsername(null);
      localStorage.removeItem("username");
      sessionStorage.removeItem("username");
      navigate("/login");
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      if (!username) {
        navigate("/login");
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [username, navigate]);

  const isVerifying = location.pathname === "/verifyemail";

  return (
    <nav className="navbar navbar-expand-lg p-3 border-info">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3" to="/">
          KickNet.
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${isVerifying ? "disabled" : ""}`}
                to="/"
                onClick={isVerifying ? (e) => e.preventDefault() : null}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about__section">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact__section">
                Contact Us
              </a>
            </li>

            {username ? (
              <>
                <Link to={`/addcart`} className="btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-cart4"
                    viewBox="0 0 16 16"
                  >
                    <g fill="black">
                      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                    </g>
                  </svg>
                </Link>
                <span className="navbar-text ms-3">{username}</span>
                <button
                  className="btn btn-dark ms-3"
                  onClick={handleLogout}
                  title="Logout"
                >
                  <FaSignOutAlt />
                </button>
              </>
            ) : (
              <>
                <Link
                  to={`/createaccount`}
                  className="btn btn-primary ms-2 text-decoration-none text-dark"
                >
                  Create Account
                </Link>
                <Link
                  to={`/login`}
                  className="btn btn-primary ms-2 text-decoration-none text-dark"
                >
                  Login
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
