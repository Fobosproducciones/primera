import React from "react";
import "./Footer.css";
import { Link } from "wouter";
import footerLogo from "../../assets/img/logo-footer.svg";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer--container">
          <ul>
            <li>
              <a href="/">Linkedin</a>
            </li>
            <li>
              <a href="/">Crunchbase</a>
            </li>
            <li>
              <a href="/">Hackernews</a>
            </li>
          </ul>
          <Link to="/">
            <img src={footerLogo} alt="logo"></img>
          </Link>
        </div>
      </footer>
    </div>
  );
}
