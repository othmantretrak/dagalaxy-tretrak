import React from "react"
import { Link } from "gatsby"
function Drawer({ nav, closeNav }) {
  const classes = nav ? "drawer nav-active" : "drawer"
  return (
    <nav className={classes}>
      <ul className="navList">
        <li onClick={closeNav}>
          <Link className="navItem" activeClassName="activeNavItem" to="/">
            Home
          </Link>
        </li>

        <li onClick={closeNav}>
          <a
            href="https://www.facebook.com/dagalaxy"
            target="_blank"
            rel="noopener noreferrer"
            className="navItem"
          >
            Follow On Facebook
          </a>
        </li>
        <li onClick={closeNav}>
          <Link
            className="navItem"
            activeClassName="activeNavItem"
            to="/contact"
          >
            Contact Us
          </Link>
        </li>
        <li onClick={closeNav}>
          <Link
            className="navItem"
            activeClassName="activeNavItem"
            to="/privacy-policy"
          >
            Privacy Policy
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Drawer
