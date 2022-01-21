import type { NextPage } from "next";
// import Head from "next/head";
// import Image from "next/image";
// import Link from "next/link";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../src/utils/hooks/global";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  selectCount,
} from "../src/store/counter";
import styles from "../styles/Home.module.css";
import useFetch from "../src/utils/hooks/useFetch";
import Link from "next/link";

const Home: NextPage = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");
  const incrementValue = Number(incrementAmount) || 0;

  const { isLoading, serverError, apiData } = useFetch("GET", "posts/1", null);
  return (
    <>
      {/* Pre-fetch -> when page rendered, child page in <Link/> href attribute will pre-fetch */}
      {/* More detail: Network inspect, you can see post.json and chunks/post */}
      <Link href={"/post"}>
        <a>To Post Page</a>
      </Link>
      <div className={styles.container}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <div className={styles.row}>
          <input
            className={styles.textbox}
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
          />
          <button
            className={styles.button}
            onClick={() => dispatch(incrementByAmount(incrementValue))}
          >
            Add Amount
          </button>
          <button
            className={styles.asyncButton}
            onClick={() => dispatch(incrementAsync(incrementValue))}
          >
            Add Async
          </button>
          <button
            className={styles.button}
            onClick={() => dispatch(incrementIfOdd(incrementValue))}
          >
            Add If Odd
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
