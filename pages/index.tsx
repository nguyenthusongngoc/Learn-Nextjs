import type { NextPage } from "next";
// import Head from "next/head";
// import Image from "next/image";
// import Link from "next/link";
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../src/store";
import { decrement, increment, incrementAsync, incrementByAmount, incrementIfOdd, selectCount } from "../src/store/counter";
import { $http } from "../src/utils/http";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");
  const incrementValue = Number(incrementAmount) || 0;
  console.log(process.env.URL);

  useEffect(()=>{
    async function fetchApi() {
      try {
        const res = await $http.get('/posts')
        console.log(res);
      } catch (error) {
        console.log('Fail ', error);
      }
    }
    fetchApi();
  } ,[])
  return (
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
  );
};

export default Home;
