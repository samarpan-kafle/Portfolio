import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleScroll = () => {
    const navbar = document.querySelector("nav");
    const position = window.scrollY;
    if (position > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav class="navbar nav nav-scrolled transparent justify-content-between px-5 sticky-top">
      <a class="col transparent nav-link d-flex ps-5" href="#">
        {/* <img className="transparent" alt="abc" src={logo} height={60} />  */}
        <div class="wrapper five">
          <span class="float-box">
            <h3 class="float">Welcome! Stalk At Your Own Risk.</h3>
          </span>
        </div>
      </a>
      <div className="col transparent d-flex justify-content-between pe-5">
        <a className="btn fw-bold" onClick={() => navigate("/")}>
          Home
        </a>
        <a className="btn fw-bold" onClick={() => navigate("/about")}>
          About
        </a>
        <a className="btn fw-bold" onClick={() => navigate("/services")}>
          Services
        </a>
        <a className="btn fw-bold" onClick={() => navigate("/contact")}>
          Contact
        </a>
        <a
          className="btn fw-bold btn-danger"
          onClick={() => navigate("/internet")}
        >
          Internet
        </a>
      </div>
    </nav>
  );
}
