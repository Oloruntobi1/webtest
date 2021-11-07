import Link from 'next/link';

import style from '../styles/Header.module.css';
import NavbarToggler from '../components/Navigation/NavbarToggler';
import NavBar from '../components/Navigation/NavBar';

export default function Header() {
  return (
    <header
      id="header"
      className="header header-box-shadow-on-scroll header-abs-top-lg header-show-hide-lg"
      data-hs-header-options='{
      "fixMoment": 1000,
      "fixEffect": "slide"
    }'
    >
      <div className="header-section">
        <div id="logoAndNav" className="container py-2 py-lg-3">
          {/* Nav */}
          <nav className="navbar navbar-expand-lg align-items-center">
            {/* Logo */}
            <Link
              href="/"
              className={`navbar-brand ${style.navbarBrand}`}
              aria-label="10hourlabs"
            >
              <a href="/">
                <img
                  className="img-fluid"
                  src="/assets/svg/logo.svg"
                  alt="Logo"
                  width={180}
                  height={48}
                />
              </a>
            </Link>
            {/* End Logo */}
            {/* Responsive Toggle Button */}
            <button
              type="button"
              className="navbar-toggler navbar-nav-wrap-toggler btn btn-icon btn-sm rounded-circle"
              aria-label="Toggle navigation"
              aria-expanded="false"
              aria-controls="navBar"
              data-toggle="collapse"
              data-target="#navBar"
            >
              <NavbarToggler className="navbar-toggler-default">
                <path
                  fill="currentColor"
                  d="M17.4,6.2H0.6C0.3,6.2,0,5.9,0,5.5V4.1c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,5.9,17.7,6.2,17.4,6.2z M17.4,14.1H0.6c-0.3,0-0.6-0.3-0.6-0.7V12c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,13.7,17.7,14.1,17.4,14.1z"
                />
              </NavbarToggler>

              <NavbarToggler className="navbar-toggler-toggled">
                <path
                  fill="currentColor"
                  d="M11.5,9.5l5-5c0.2-0.2,0.2-0.6-0.1-0.9l-1-1c-0.3-0.3-0.7-0.3-0.9-0.1l-5,5l-5-5C4.3,2.3,3.9,2.4,3.6,2.6l-1,1 C2.4,3.9,2.3,4.3,2.5,4.5l5,5l-5,5c-0.2,0.2-0.2,0.6,0.1,0.9l1,1c0.3,0.3,0.7,0.3,0.9,0.1l5-5l5,5c0.2,0.2,0.6,0.2,0.9-0.1l1-1 c0.3-0.3,0.3-0.7,0.1-0.9L11.5,9.5z"
                />
              </NavbarToggler>
            </button>
            {/* End Responsive Toggle Button */}
            {/* Navigation */}
            <NavBar />
            {/* End Navigation */}
          </nav>
          {/* End Nav */}
        </div>
      </div>
    </header>
  );
}
