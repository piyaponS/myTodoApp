import React from "react";
import classes from "./Header.module.css";
import { FaSignInAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className={classes.Header}>
      <div className={classes.logo}>
        <Link to="/" style={{ textDecoration: "none" }}>
          Todo-List
        </Link>
      </div>
      <ul className={classes.select}>
        <li className={classes.login}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <FaSignInAlt />
            Login
          </Link>
        </li>
        <li className={classes.register}>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <FaUser />
            Register
          </Link>
        </li>
      </ul>
    </header>
  );
}
export default Header;
