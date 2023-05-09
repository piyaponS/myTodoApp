import { Link } from "react-router-dom";
import classes from "./ThankPage.module.css";
import { BsFillCheckCircleFill } from "react-icons/bs";

function ThankPage() {
  return (
    <div className={classes.group}>
      <div className={classes.logo}>
        <BsFillCheckCircleFill />
      </div>
      <h1 className={classes.h1}>Thank You !</h1>
      <p className={classes.p}>
        Thank you for your interest! Please login and write your notes.
      </p>
      <button className={classes.button}>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Back to Login
        </Link>
      </button>
    </div>
  );
}

export default ThankPage;
