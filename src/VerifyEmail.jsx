import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function VerifyEmail() {
  const navigate = useNavigate();

  const handleVerification = () => {
    localStorage.setItem("emailVerified", true);
    navigate("/createaccount");
  };

  useEffect(() => {
    const emailVerified = localStorage.getItem("emailVerified");
    if (emailVerified) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="container mt-4 text-center">
      <h2>Please Verify Your Email</h2>
      <p>
        We have sent a verification email to your registered email address.
        Please check your inbox.
      </p>
      <button className="btn btn-primary mt-4" onClick={handleVerification}>
        Simulate Email Verification
      </button>
    </div>
  );
}

export default VerifyEmail;
