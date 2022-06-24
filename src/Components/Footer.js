import React from "react";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <section id="footer">
      <div className="footer-rights">
        <p>All Rights reserved by kevinomega</p>
      </div>
      <div className="footer-icons">
        <span>
          <BsGithub />
        </span>
        <span>
          <BsLinkedin />
        </span>
        <span>
          <BsInstagram />
        </span>
      </div>
    </section>
  );
};

export default Footer;
