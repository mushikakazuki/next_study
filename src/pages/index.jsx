import Head from "next/head";
import Image from "next/image";
import styles from "src/styles/Home.module.css";

import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [foo, setfoo] = useState(1);
  const [moji, setmoji] = useState("");
  const [flg, setflg] = useState(true);
  const [array, setarray] = useState([]);
  const handleClick = useCallback(() => {
    if (foo < 10) {
      setfoo((foo) => foo + 1);
    }
  }, [foo]);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const flgchange = useCallback(() => {
    setflg((flg) => !flg);
  }, []);

  const handleAdd = useCallback(() => {
    setarray((array) => {
      if (array.some((item) => item === moji)) {
        alert("NG");
        return array;
      }
      const newarray = [...array, moji];
      return newarray;
    });
  }, [moji]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      {flg ? <h1>{foo}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={flgchange}>{flg ? "非表示" : "表示"}</button>
      <input
        type="text"
        value={moji}
        onChange={(e) => {
          setmoji(e.target.value);
        }}
      ></input>
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
