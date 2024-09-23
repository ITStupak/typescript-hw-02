import style from "./ErrorMessage.module.css";
import { FC } from "react";

export interface ErrorMessage {
  children: any;
  textAlign?: string;
  marginBottom?: string;
}

const ErrorMessage:FC<ErrorMessage> = ({ children, textAlign = "", marginBottom = "0" }) => {
  return (
    <p
      className={[
        style["text"],
        style[textAlign],
        style[`marginBottom${marginBottom}`],
      ].join(" ")}
    >
      {children}
    </p>
  );
};

export default ErrorMessage;
