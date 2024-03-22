// import Button from "./button";
import { Link } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";
export default function Header({ active, setActive, user, handleLogout }) {
  const userId = user?.uid;
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 768) {
      setShowMenu(false);
    }
  };
  return (
    <div className="nav-container">
      <nav className="nav">
        <div className="logo-container">
          <img
            className="logo"
            src="/images/logo.png"
            alt="logo-img"
            loading="lazy"
          />
        </div>
        <div className={`nav-links ${showMenu ? "show-menu" : ""}`}>
          <ul className={`nav-list `}>
            <Link to="/">
              <li
                className={`nav-item ${active === "home" ? "active" : ""}`}
                onClick={() => setActive("home")}
              >
                Home
              </li>
            </Link>
            {user && (
              <Link to="create">
                <li
                  className={`nav-item ${active === "create" ? "active" : ""}`}
                  onClick={() => setActive("create")}
                >
                  Create
                </li>
              </Link>
            )}
            <Link to="/blog-page">
              <li
                className={`nav-item ${active === "blog-page" ? "active" : ""}`}
                onClick={() => setActive("blog-page")}
              >
                Blog
              </li>
            </Link>
            <li
              className={`nav-item ${active === "" ? "active" : ""}`}
              onClick={() => setActive("")}
            >
              About Us
            </li>
          </ul>
          <div className="btn-container">
            {userId ? (
              <li className="nav-item" onClick={handleLogout}>
                Log Out
              </li>
            ) : (
              <Link to="/login">
                <li className="nav-item">Login</li>
              </Link>
            )}
          </div>
        </div>
        {showMenu && (
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        )}
        {!showMenu && (
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <IoMenu />
          </div>
        )}
      </nav>
    </div>
  );
}
