import Header from "../components/Header";
import classes from "./LoadingPage.module.css";

function LoadingPage() {
  return (
    <div>
      <Header />
      <div className={classes.load}>Loading...</div>
    </div>
  );
}

export default LoadingPage;
