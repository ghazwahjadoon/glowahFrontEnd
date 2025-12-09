import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaGoogle,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#fff5f8",
        textAlign: "center",
        padding: "40px 0",
        fontFamily: "Poppins, sans-serif",
        color: "#4a4a4a",
      }}
    >
     
      <h4 style={{ color: "#d63384", fontWeight: "600" }}>Stay Connected</h4>
      <p style={{ fontSize: "15px", maxWidth: "400px", margin: "10px auto" }}>
        Follow us on social media and stay updated with the latest trends 💖
      </p>

      {/* Social Icons */}
      <div style={{ marginTop: "20px" }}>
        <a href="#" style={iconStyle}>
          <FaFacebookF />
        </a>
        <a href="#" style={iconStyle}>
          <FaXTwitter />
        </a>
        <a href="#" style={iconStyle}>
          <FaGoogle />
        </a>
        <a href="#" style={iconStyle}>
          <FaInstagram />
        </a>
        <a href="#" style={iconStyle}>
          <FaLinkedinIn />
        </a>
        <a href="#" style={iconStyle}>
          <FaGithub />
        </a>
      </div>

      {/* Divider */}
      <div
        style={{
          width: "70%",
          height: "1px",
          backgroundColor: "#f3c5d2",
          margin: "30px auto",
        }}
      ></div>

      {/* Copyright */}
      <p style={{ fontSize: "14px", color: "#6c757d" }}>
        © {new Date().getFullYear()}{" "}
        <span style={{ color: "#d63384", fontWeight: "500" }}>YourBrand</span>.
        All rights reserved.
      </p>
    </footer>
  );
}

// Common style for icons
const iconStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  backgroundColor: "#fff",
  color: "#d63384",
  border: "1px solid #f3c5d2",
  fontSize: "18px",
  margin: "5px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  textDecoration: "none",
};

export default Footer;
