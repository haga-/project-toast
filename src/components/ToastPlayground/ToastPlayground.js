import React from "react";

import Button from "../Button";
import ToastShelf from "../ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [currentVariant, setCurrentVariant] = React.useState(
    VARIANT_OPTIONS[0]
  );
  const [message, setMessage] = React.useState("");
  const [toasts, setToasts] = React.useState([]);

  const onClose = (idToRemove) => {
    setToasts(prevToasts => prevToasts.filter(({ id }) => id !== idToRemove))
  }

  const addToast = () => {
    const id = crypto.randomUUID();
    const newToast = { id, message, variant: currentVariant, onClose };
    const newToasts = [...toasts, newToast];
    setToasts(newToasts);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    addToast();

    setMessage('');
    setCurrentVariant('notice');
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} />

      <form onSubmit={onSubmit}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((variant) => (
                <label htmlFor={`variant-notice-${variant}`} key={variant}>
                  <input
                    id={`variant-notice-${variant}`}
                    type="radio"
                    name="variant"
                    value={variant}
                    checked={variant === currentVariant}
                    onChange={(event) => setCurrentVariant(event.target.value)}
                  />
                  {variant}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
