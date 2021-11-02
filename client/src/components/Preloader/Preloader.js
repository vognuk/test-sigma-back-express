import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Preloader = () => (
  <Loader
    className="loader"
    type="TailSpin"
    color="grey"
    height={50}
    width={50}
    timeout={2000}
  />
);

export default Preloader;
