import Head from "next/head";
import styles from "src/styles/Home.module.css";

import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";

import { useCounter } from "src/hooks/useCounter";
import { useArray } from "src/hooks/useArray";
import { leghtblue } from "src/hooks/leghtblue";

export default function Home() {
  const { foo, flg, handleClick, flgchange } = useCounter();
  const { moji, array, handleAdd, handleChnge } = useArray();
  leghtblue();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      {flg ? <h1>{foo}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={flgchange}>{flg ? "非表示" : "表示"}</button>
      <input type="text" value={moji} onChange={handleChnge}></input>
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page="index" />
      <Footer />
    </div>
  );
}
