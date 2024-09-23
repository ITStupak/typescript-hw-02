import css from "./LoadMoreBtn.module.css";
import { FC } from "react";
import { LoadMoreBtnType } from "../../types";

const LoadMoreBtn:FC<LoadMoreBtnType> = ({ children, onClick, disabled }) => {
  return (
    <button className={css.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default LoadMoreBtn;
