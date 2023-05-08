import Header from "../components/Header";
import classes from "./LoadingPage.module.css";
import ClipLoader from "react-spinners/ClipLoader";

function LoadingPage() {
  return (
    <div>
      <Header />
      <div className={classes.load}>
        <ClipLoader size={150} />
      </div>
    </div>
  );
}

export default LoadingPage;
