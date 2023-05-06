import React, { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import classes from "./LoginPage.module.css";
import Header from "../components/Header";

function LoginPage() {
  const [enteredData, setEnteredData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = enteredData;
  const submitHandler = (event) => {
    event.preventDefault();
  };
  const changeHandler = (event) => {
    setEnteredData((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };
  return (
    <>
      <Header />
      <section className={classes.h1}>
        <h1>
          <BiUserCircle />
        </h1>
      </section>
      <form onSubmit={submitHandler} className={classes.group}>
        <div className={classes.block}>
          <h3 className={classes.h3}>Email</h3>
          <input
            required
            className={classes.input}
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={changeHandler}
            autoComplete="off"
          />
        </div>
        <div className={classes.block}>
          <h3 className={classes.h3}>Password</h3>
          <input
            required
            type="password"
            className={classes.input}
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={changeHandler}
            autoComplete="off"
          />
        </div>

        <button className={classes.button} type="submit">
          Login
        </button>
      </form>
    </>
  );
}

export default LoginPage;
