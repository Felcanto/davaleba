"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function TestPage() {
  const [count, setCount] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const savedCount = localStorage.getItem("count");

    if (savedCount) {
      setCount(JSON.parse(savedCount));
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("count", JSON.stringify(count));
    }
  }, [count, loaded]);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count === 0) return;

    setCount(count - 1);
  };

  return (
    <main className={styles.page}>
      <h2 className={styles.count}>{count}</h2>

      <div className={styles.buttons}>
        <button className={styles.button} onClick={increase}>
          +
        </button>
        <button className={styles.button} onClick={decrease}>
          -
        </button>
      </div>
    </main>
  );
}
