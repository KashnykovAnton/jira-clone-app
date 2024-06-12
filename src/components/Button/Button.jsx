import classNames from "classnames";
import s from "./Button.module.css";

const Button = ({ type = "button", onClick, styleButton, children }) => {
  const buttonClass = classNames(s.buttonBase, {
    [s.red]: styleButton === "red",
    [s.blue]: styleButton === "blue",
  });
  return (
    <button type={type} className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
