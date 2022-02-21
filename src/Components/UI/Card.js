import React from "react";
import css from "./Card.module.css";
export default function Card(props) {

  return (
    <>
      <div className={css.card}>
        <div>{props.children}</div>
      </div>
    </>
  );
}
