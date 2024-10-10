import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Buynow() {
  const location = useLocation();
  const { product } = location.state || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    paymentMethod: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Order details:", {
      product: product.name,
      ...formData,
    });

    alert("Order placed successfully!");
    setFormData({
      name: "",
      email: "",
      mobile: "",
      address: "",
      paymentMethod: "",
    });
  };

  return (
    <>
      <div className="container mt-5">
        <h2 className="mb-4 text-center">Place Your Order</h2>

        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-md-5 align-content-center text-center">
            {product && (
              <div className="card shadow-sm p-3 bg-white rounded">
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-fluid rounded"
                  style={{
                    width: "100%",
                    maxHeight: "400px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h4 className="card-title">{product.name}</h4>
                  <h5 className="text-muted">Price: {product.price}</h5>
                </div>
              </div>
            )}
          </div>
          <div className="col-md-6">
            <form
              onSubmit={handleSubmit}
              className="p-4 border rounded shadow-sm"
            >
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name" // Add name attribute for state management
                  placeholder="Enter your name"
                  value={formData.name} // Bind value to state
                  onChange={handleChange} // Handle input change
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email" // Add name attribute for state management
                  placeholder="Enter your email"
                  value={formData.email} // Bind value to state
                  onChange={handleChange} // Handle input change
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="mobile"
                  name="mobile"
                  placeholder="Enter your mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Delivery Address
                </label>
                <textarea
                  className="form-control"
                  id="address"
                  name="address"
                  rows="3"
                  placeholder="Enter your full delivery address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="mb-3">
                <h5 className="mb-3">Payment Method</h5>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="upi"
                    name="paymentMethod"
                    value="upi"
                    checked={formData.paymentMethod === "upi"}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="upi">
                    UPI Payment
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="cod"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === "cod"}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="cod">
                    Cash on Delivery
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-secondary btn-lg mt-3">
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Buynow;
