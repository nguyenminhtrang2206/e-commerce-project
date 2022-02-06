import React from "react";

import { Link } from "react-router-dom";

import Grid from "./Grid";

import logo from "../assets/logo-2.png";

const footerAboutLinks = [
  {
    display: "About",
    path: "/about",
  },
  {
    display: "Contact",
    path: "/about",
  },
  {
    display: "Careers",
    path: "/about",
  },
  {
    display: "News",
    path: "/about",
  },
  {
    display: "Stores",
    path: "/about",
  },
];

const footerCustomerLinks = [
  {
    display: "Return Policy",
    path: "/about",
  },
  {
    display: "Contact",
    path: "/about",
  },
  {
    display: "Careers",
    path: "/about",
  },
];
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div>
            <div className="footer__title">Support</div>
            <div className="footer__content">
              <p>
                Contact info <strong>012345678</strong>
              </p>
              <p>
                Contact info <strong>012345678</strong>
              </p>
              <p>
                Contact info <strong>012345678</strong>
              </p>
            </div>
          </div>

          <div>
            <div className="footer__title">About us</div>
            <div className="footer__content">
              {footerAboutLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>

          <div>
            <div className="footer__title">Customer Support</div>
            <div className="footer__content">
              {footerCustomerLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>

          <div>
            <p>
              <Link to="/">
                <img src={logo} className="footer__logo" alt="" />
              </Link>
            </p>
            <p>
              Our target is to bring joy and happiness to you and your loved one
              by helping you find the most suitable indoor plants for your
              space.
            </p>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
