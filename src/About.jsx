import React from "react";
import aboutImg from "./assets/about.png";

function About() {
  return (
    <div className="about container my-5" id="about__section">
      <h2 className="mb-4 text-center">ABOUT US</h2>
      <div className="row align-items-center">
        <div className="col-12 col-md-8">
          <p>
            Welcome to KickNet, your ultimate destination for premium football
            sportswear! Born from a passion for the beautiful game, we aim to
            provide athletes and football enthusiasts with high-quality,
            performance-driven apparel that enhances every moment on the field.
          </p>
          <p>
            Our collection features the latest in sports technology, blending
            style, comfort, and durability to support you in achieving your best
            game. Whether you're gearing up for a competitive match or a casual
            kickabout, we've got you covered with jerseys, shorts, boots, and
            accessories that meet professional standards.
          </p>
          <p>
            At KickNet, we believe in empowering every player—from amateurs to
            professionals—by offering gear that’s not only functional but
            fashionable. Our commitment to quality and customer satisfaction
            drives us to continually innovate, ensuring that you look and feel
            your best every time you play.
          </p>
          <p>
            Join us in celebrating the sport we all love. Shop with confidence
            and take your game to the next level with KickNet.
          </p>
        </div>
        <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
          <img src={aboutImg} alt="About us" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default About;
