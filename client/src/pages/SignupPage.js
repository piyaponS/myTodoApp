import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import classes from "./SignupPage.module.css";
import Header from "../components/Header";

function SignupPage() {
  const [enteredData, setEnteredData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { name, email, password, confirmPassword } = enteredData;
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
      <section className={classes.header}>
        <h1 className={classes.h1}>
          <FaUser />
          REGISTRATION
        </h1>
        <p className={classes.p}>
          Please fill in this form to create an account
        </p>
      </section>
      <form onSubmit={submitHandler} className={classes.form}>
        <div>
          <h3 className={classes.h3}>Username</h3>
          <input
            className={classes.input}
            type="text"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={changeHandler}
          />
        </div>
        <div>
          <h3 className={classes.h3}>Email</h3>
          <input
            className={classes.input}
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={changeHandler}
          />
        </div>
        <div>
          <h3 className={classes.h3}>Password</h3>
          <input
            className={classes.input}
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={changeHandler}
          />
        </div>
        <div>
          <h3 className={classes.h3}>Confirm Password</h3>
          <input
            className={classes.input}
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm your password"
            onChange={changeHandler}
          />
        </div>
        <button type="submit" className={classes.button}>
          Create User
        </button>
      </form>
    </>
  );
}

export default SignupPage;
