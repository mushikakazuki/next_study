import styles from "src/components/Main/Main.module.css";
import { useCallback, useState } from "react";

import { Headline } from "src/components/Headline";
import { Links } from "src/components/Links";

const ITEMS = [
  {
    href: "https://nextjs.org/docs",
    title: "Documentation →",
    description: "Find in-depth information about Next.js features and API.",
  },
  {
    href: "https://nextjs.org/learn",
    title: "Learn →",
    description: "Learn about Next.js in an interactive course with quizzes!",
  },
  {
    href: "https://github.com/vercel/next.js/tree/master/examples",
    title: "Examples →",
    description: "Discover and deploy boilerplate example Next.js projects.",
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy →",
    description:
      "Instantly deploy your Next.js site to a public URL with Vercel.",
  },
];

export function Main(props) {
  const [item, setitem] = useState(ITEMS);
  const handleReduse = useCallback(() => {
    setitem((item) => item.slice(0, item.length - 1));
  }, []);

  return (
    <main className={styles.main}>
      <Headline page={props.page} handleReduse={handleReduse}>
        {<code className={styles.code}>pages/{props.page}.js</code>}
      </Headline>
      <Links item={item} />
    </main>
  );
}
