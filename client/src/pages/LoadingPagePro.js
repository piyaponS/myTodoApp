import HeaderLogout from "../components/HeaderLogout";
import classes from "./LoadingPagePro.module.css";
import ClipLoader from "react-spinners/ClipLoader";

function LoadingPagePro() {
  return (
    <div>
      <HeaderLogout />
      <div className={classes.load}>
        <ClipLoader size={150} />
      </div>
    </div>
  );
}

export default LoadingPagePro;
