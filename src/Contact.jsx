import React from "react";
import contact from "./assets/contact.png";

function Contact() {
  return (
    <>
      <div className="container" id="contact__section">
        <h2 className="mt-5 text-center">Contact Us</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="mt-4 mt-md-0">
            <img
              src={contact}
              alt="contact_us"
              className="img-fluid"
              style={{ maxWidth: "350px" }}
            />
          </div>
          <div className="box row justify-content-center align-self-center border border-dark-subtle p-4 rounded">
            <div className="mb-3 mt-3 col-12 col-md-6">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email Address.."
              />
            </div>
            <div className="mb-3 mt-3 col-12 col-md-6">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name.."
              />
            </div>
            <div className="mb-3 col-12">
              <label htmlFor="textarea" className="form-label">
                Leave us a few words
              </label>
              <textarea
                className="form-control"
                id="textarea"
                rows="2"
                placeholder="Your message..."
              ></textarea>
            </div>
            <div className="col-12 mb-3">
              <button type="button" className="btn btn-secondary w-100">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
