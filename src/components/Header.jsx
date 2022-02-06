import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo-2.png";
import { ReactComponent as Menu } from "../assets/icons/menu.svg";
import { ReactComponent as Person } from "../assets/icons/person.svg";
import { ReactComponent as Search } from "../assets/icons/search.svg";
import { ReactComponent as Bag } from "../assets/icons/bag.svg";
import { ReactComponent as CloseLeft } from "../assets/icons/close-left.svg";

const mainNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Products",
    path: "/catalog",
  },
  {
    display: "Accessories",
    path: "/assessories",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex(e => e.path === pathname);

  const headerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const menuLeft = useRef(null);

  const menuToggle = () => menuLeft.current.classList.toggle("active");

  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="header__menu">
          <div className="header__menu__mobile-toggle" onClick={menuToggle}>
            <Menu />
          </div>

          <div className="header__menu__left" ref={menuLeft}>
            <div className="header__menu__left__close" onClick={menuToggle}>
              <CloseLeft />
            </div>
            {mainNav.map((item, index) => (
              <div
                key={index}
                className={`header__menu__item header__menu__left__item ${
                  index === activeNav ? "active" : ""
                }`}
                onClick={menuToggle}
              >
                <Link to={item.path}>
                  <span>{item.display}</span>
                </Link>
              </div>
            ))}
          </div>

          <div className="header__menu__right">
            <div className="header__menu__item header__menu__right__item">
              <Search />
            </div>
            <div className="header__menu__item header__menu__right__item">
              <Link to="/cart">
                <Bag />
              </Link>
            </div>
            <div className="header__menu__item header__menu__right__item">
              <Person />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
