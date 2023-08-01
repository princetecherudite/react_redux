import React from "react";
import styles from "./bar.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  selectCount,
  resetValue
} from "../../Services/Reducer/Reducers";

function IncDescBar() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <div className={`${styles.mainContainer} `}>
      <div className={`${styles.container}`}>
        <div className={`${styles.boxIncDesc}`} >
          <div className={`${styles.IncDescBar}`}>
            <button
              onClick={() => {
                dispatch(decrement());
              }}
            >
              -
            </button>
            <span>{count}</span>
            <button
              onClick={() => {
                dispatch(increment());
              }}
            >
              +
            </button>
          </div>
          <div className={`${styles.resetBtn}`}>
            <button
              onClick={() => {
                dispatch(resetValue());
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IncDescBar;
