import Header from "../components/Header";
import classes from "./ThankPage.module.css";

function ThankPage() {
  return (
    <div>
      <Header />
      <div className={classes.load}>Thank you...</div>
    </div>
  );
}

export default ThankPage;
