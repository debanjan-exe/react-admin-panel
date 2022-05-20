import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../../assets/images/error404.jpg";
import homeIcon from "../../assets/images/home-icon.png";
import "./errorpage.scss";

const Errorpage = () => {
  return (
    <div className="errorpage_wrapper">
      <img
        style={{ height: "350px", width: "350px" }}
        src={errorImg}
        alt="404"
      />
      <Link to="/" style={{ textDecoration: "none" }}>
        <button className="go_back_to_home">
          <img src={homeIcon} alt="home" />
          <h2>Go to Home</h2>
        </button>
      </Link>
    </div>
  );
};

export default Errorpage;
