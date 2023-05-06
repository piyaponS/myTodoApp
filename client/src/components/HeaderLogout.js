import React from "react";
import classes from "./HeaderLogout.module.css";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function HeaderLogout() {
  const logoutHandler = () => {};
  return (
    <header className={classes.Header}>
      <div className={classes.logo}>
        <Link to="/" style={{ textDecoration: "none" }}>
          Todo-List
        </Link>
      </div>
      <ul className={classes.select}>
        <li className={classes.logout}>
          <Link style={{ textDecoration: "none" }} onClick={logoutHandler}>
            <FaSignOutAlt />
            Logout
          </Link>
        </li>
        <li className={classes.username}></li>
      </ul>
    </header>
  );
}

export default HeaderLogout;
