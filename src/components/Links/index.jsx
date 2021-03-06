import { useCallback, useState } from "react";
import styles from "src/components/Links/Links.module.css";

export function Links({ item }) {
  return (
    <div className={styles.grid}>
      {item.map((item) => {
        return (
          <a key={item.href} href={item.href} className={styles.card}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </a>
        );
      })}
    </div>
  );
}
