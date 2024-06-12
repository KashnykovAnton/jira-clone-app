import React from "react";
import { Link } from "react-router-dom";
import s from "./StyledLink.module.css";

const StyledLink = ({ url = "/", children }) => {
  return (
    <div>
      <p className={s.linkContainer}>
        <Link to={url} className={s.link}>
          {children}
        </Link>
      </p>
    </div>
  );
};

export default StyledLink;
