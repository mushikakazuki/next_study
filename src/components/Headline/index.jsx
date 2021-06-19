import Head from "next/head";
import Image from "next/image";
import styles from "src/components/Headline/Headline.module.css";

export function Headline(props) {
  return (
    <div>
      <h1 className={styles.title}>{props.page} page</h1>

      <p className={styles.description}>
        Get started by editing {props.children}
      </p>

      <button onClick={props.handleReduse}>減らす</button>
    </div>
  );
}
