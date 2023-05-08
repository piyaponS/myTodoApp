import React, { useEffect } from "react";
import classes from "./HeaderLogout.module.css";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { reset, logout } from "./../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function HeaderLogout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, dispatch, navigate]);
  const logoutHandler = () => {
    dispatch(logout());
    dispatch(reset());
  };
  return (
    <header className={classes.Header}>
      <div className={classes.logo}>Todo-List</div>
      <ul className={classes.select}>
        <li className={classes.welcome}>
          <div>{user && `Welcome: ${user.name}`}</div>
        </li>
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
