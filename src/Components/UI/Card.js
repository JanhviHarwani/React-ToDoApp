import React from "react";
import css from "./Card.module.css";
import PropTypes from "prop-types";

function Card(props) {
  return (
    <>
      <div className={css.card}>
        <div>{props.children}</div>
      </div>
    </>
  );
}
Card.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Card;
