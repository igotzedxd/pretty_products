/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect, useRef } from "react";
import styles from "./newsletter.module.css";

function Newsletter({ contact }) {
  const [inputValue, setInputValue] = useState("");
  const [finished, setFinished] = useState(false);
  const [done, setDone] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const validation = /^[^s@]+@[^s@]+.[^s@]+$/;
  const [focus, setFocus] = useState(false);
  const inputRef = useRef("");
  const [hoverBtn, setHoverBtn] = useState(false);
  const [active, setActive] = useState(true);

  useEffect(() => {
    contact && inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (finished) {
      setTimeout(() => {
        setDone(true);
        setTimeout(() => {
          setDone(false);
          setFinished(false);
          setInputValue("");
          setActive(false);
        }, 800);
      }, 0);
    }
  }, [finished]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validation.test(String(inputValue).toLowerCase());
    isValid ? setFinished(true) & setErrorMsg("") : setErrorMsg("Please enter a valid email");
    isValid && setFinished(true);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleFocus = () => {
    setFocus(true); // Assuming setFocus triggers the addition of the animation class
    triggerAnimationRestart();
  };

  const handleBlur = () => {
    setFocus(false); // Assuming setFocus triggers the removal of the animation class
    triggerAnimationRestart();
  };

  const triggerAnimationRestart = () => {
    const label = document.querySelector("." + styles.label);
    label.style.display = "none";
    void label.offsetWidth; // force reflow
    label.style.display = "block";
  };

  return (
    active && (
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.inner}>
          <div className={styles.headings}>
            <h3>Join our amazing</h3>
            <h2>Newsletter</h2>
            <p>We promise you will love it!</p>
          </div>
          <div className={styles.form}>
            <label className={`${styles.label} ${focus ? styles.focus : styles.unFocus}`}>
              <span className={`${focus ? styles.focuss : styles.unFocuss}`}>
                <input
                  required
                  ref={inputRef}
                  className={styles.input}
                  type="email"
                  placeholder="name@domain.tld"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </span>
            </label>
            <button
              className={`${styles.button} ${hoverBtn && styles.hover}`}
              onMouseOver={() => setHoverBtn(true)}
              onMouseLeave={() => setHoverBtn(false)}
              type="submit"
            >
              Send
            </button>
          </div>
          <p className={styles.error}>{errorMsg}</p>
          {done && (
            <div className={styles.modal}>
              Thanks {capitalizeFirstLetter(inputValue.split("@")[0])}
            </div>
          )}
        </div>
      </form>
    )
  );
}

export default Newsletter;

/*       
<p className={styles.error}>{errorMsg}</p>
  {done && (
    <div className={styles.modal}>Thanks {capitalizeFirstLetter(inputValue.split("@")[0])}</div>
  )}
        
*/

/* 
text.charAt(0).toUpperCase() + text.slice(1)
*/
