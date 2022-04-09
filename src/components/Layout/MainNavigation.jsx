import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../services/api";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const dispatch = useDispatch();
  const { token, isLoggedIn } = useSelector((state) => state.users);

  const logoutHandler = (event) => {
    event.preventDefault();
    dispatch(logoutUser(token));
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>Home page</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to={"/register"}>Register</Link>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
          )}
          {isLoggedIn && <button onClick={logoutHandler}>Logout</button>}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
