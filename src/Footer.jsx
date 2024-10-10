import React from "react";

function Footer() {
  return (
    <>
      <div className="footer position-relative mt-5">
        <img
          src="img/dot.png"
          className="dots-group position-absolute"
          alt=""
        />
        <img
          src="img/zig.png"
          className="zigzag-lines position-absolute start-0"
          alt=""
        />
        <div className="container">
          <div className="row about-company">
            <div className="col-12 col-md-6">
              <div className="grabstar-logo text-center mb-3">
                <h2>KickNet</h2>
              </div>
              <div className="social-media d-flex justify-content-start mb-4">
                <div
                  className="social-image rounded-circle align-content-center text-center me-3 wow zoomIn"
                  data-wow-duration="0.8s"
                  data-wow-delay="0s"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="20"
                    viewBox="4 0 20 30"
                    id="instagram"
                  >
                    <path
                      fill="#303c42"
                      d="M17 23H7a6 6 0 0 1-6-6V7a6 6 0 0 1 6-6h10a6 6 0 0 1 6 6v10a6 6 0 0 1-6 6ZM7 3a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Z"
                    ></path>
                    <path
                      fill="#303c42"
                      d="M12 18a6 6 0 1 1 6-6 6 6 0 0 1-6 6Zm0-10a4 4 0 1 0 4 4 4 4 0 0 0-4-4Z"
                    ></path>
                    <circle cx="18" cy="5" r="1" fill="#303c42"></circle>
                  </svg>
                </div>

                <div
                  className="social-image rounded-circle align-content-center text-center me-3 wow zoomIn"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.2s"
                >
                  <svg
                    width="9"
                    height="15"
                    viewBox="0 0 9 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="slick_next_arrow"
                      d="M2.69904 14.393L2.67857 8.09607H0V5.39738H2.67857V3.59825C2.67857 1.17015 4.17099 0 6.32088 0C7.35069 0 8.23577 0.0772455 8.4937 0.111771V2.64928L7.00264 2.64996C5.83342 2.64996 5.60703 3.20973 5.60703 4.03116V5.39738H8.92857L8.03571 8.09607H5.60702V14.393H2.69904Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div
                  className="social-image rounded-circle align-content-center text-center wow zoomIn"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.4s"
                >
                  <svg
                    width="15"
                    height="12"
                    viewBox="0 0 15 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.2857 1.34934C13.75 1.61921 13.2143 1.70917 12.5893 1.79913C13.2143 1.4393 13.6607 0.899563 13.8393 0.179913C13.3036 0.539738 12.6786 0.719651 11.9643 0.899563C11.4286 0.359825 10.625 0 9.82143 0C8.30357 0 6.96429 1.34935 6.96429 2.96856C6.96429 3.23843 6.96429 3.41834 7.05357 3.59825C4.64286 3.5083 2.41071 2.33886 0.982143 0.539738C0.714286 0.98952 0.625 1.4393 0.625 2.069C0.625 3.05852 1.16071 3.95808 1.96429 4.49782C1.51786 4.49782 1.07143 4.3179 0.625 4.13799C0.625 5.57729 1.60714 6.74673 2.94643 7.01659C2.67857 7.10655 2.41071 7.10655 2.14286 7.10655C1.96429 7.10655 1.78571 7.10655 1.60714 7.01659C1.96429 8.18603 3.03571 9.08559 4.375 9.08559C3.39286 9.8952 2.14286 10.345 0.714286 10.345C0.446429 10.345 0.267857 10.345 0 10.345C1.33929 11.1546 2.85714 11.6943 4.46429 11.6943C9.82143 11.6943 12.7679 7.19651 12.7679 3.32838C12.7679 3.23843 12.7679 3.05852 12.7679 2.96856C13.3929 2.51878 13.9286 1.97904 14.2857 1.34934Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-12 col-md-4 mb-3">
                  <h4 className="mb-3">About Us</h4>
                  <a href="#" className="text-decoration-none">
                    <p>Our Company</p>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <p>Blog</p>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <p>Blog</p>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <p>Press Center</p>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <p>Contact</p>
                  </a>
                </div>
                <div className="col-12 col-md-4 mb-3">
                  <h4 className="mb-3">Community</h4>
                  <a href="#" className="text-decoration-none">
                    <p>Support Center</p>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <p>Freelancer</p>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <p>Reviews</p>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <p>Log In</p>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <p>Sign Up</p>
                  </a>
                </div>
                <div className="col-12 col-md-4 mb-3">
                  <h4 className="mb-3">Business</h4>
                  <a href="#" className="text-decoration-none">
                    <p>Grabstar Business</p>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <p>Product</p>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <p>Pricing</p>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <p>Template</p>
                  </a>
                  <a href="#" className="text-decoration-none">
                    <p>Find Job</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row copyright-ofspace py-3">
            <div className="col-12 col-md-6">
              <p>Copyright 2010 - 2021 Ofspace</p>
            </div>
            <div className="col-12 col-md-6 text-end">
              <p>Privacy Policy I Website Terms</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
