import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Navigate</h4>
        <ul>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            Sustainability
            <ul>
              <li>
                <a href="#">Our Planet</a>
              </li>
              <li>
                <a href="#">Our People</a>
              </li>
              <li>
                <a href="#">Our Partners</a>
              </li>
              <li>
                <a href="#">Green Story</a>
              </li>
              <li>
                <a href="#">Certifications</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">Custom Craft</a>
          </li>
          <li>
            <a href="#">Corporate Gifts</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Atelier</h4>
        <ul>
          <li>
            <a href="#">Journal</a>
          </li>
          <li>
            <a href="#">Press & Media</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Need help?</h4>
        <ul>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>All rights reserved - 2020 Studio Beej</p>
        <p>
          <a href="#">Terms & Conditions</a>
        </p>
      </div>
    </footer>
  );
}
