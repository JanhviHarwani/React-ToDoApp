import styles from "./ErrorModal.module.css";
import ReactDom from "react-dom";
const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClosePopUp} />;
};
const PopUp = (props) => {
  return (
    <div className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
        <footer className={styles.actions}>
          <button className={styles.button} onClick={props.onClosePopUp}>
            OK
          </button>
        </footer>
      </div>
    </div>
  );
};
const ErrorModal = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onClosePopUp={props.onClosePopUp} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <PopUp
          title={props.title}
          message={props.message}
          onClosePopUp={props.onClosePopUp}
        />,
        document.getElementById("popup-root")
      )}
    </>
  );
};
export default ErrorModal;
