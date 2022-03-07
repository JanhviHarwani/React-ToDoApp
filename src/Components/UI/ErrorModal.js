import styles from "./ErrorModal.module.css";
import ReactDom from "react-dom";
import PropTypes from "prop-types";

const Backdrop = ({ onClosePopUp }) => {
  return <div className={styles.backdrop} onClick={onClosePopUp} />;
};
const PopUp = ({ title, message, onClosePopUp }) => {
  return (
    <div className={styles.modal}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
      <div className={styles.content}>
        <p>{message}</p>
        <footer className={styles.actions}>
          <button className={styles.button} onClick={onClosePopUp}>
            OK
          </button>
        </footer>
      </div>
    </div>
  );
};
const ErrorModal = ({ title, message, onClosePopUp }) => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onClosePopUp={onClosePopUp} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <PopUp title={title} message={message} onClosePopUp={onClosePopUp} />,
        document.getElementById("popup-root")
      )}
    </>
  );
};

ErrorModal.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  onClosePopUp: PropTypes.func,
};
PopUp.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  onClosePopUp: PropTypes.func,
};
Backdrop.propTypes = {
  onClosePopUp: PropTypes.func,
};
export default ErrorModal;
