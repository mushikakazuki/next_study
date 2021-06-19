import { useEffect } from "react";
import { useRouter } from "next/router";
export const useBgColor = () => {
  const router = useRouter();
  useEffect(() => {
    document.body.style.backgroundColor =
      router.pathname === "/" ? "lightblue" : "#fafa";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [router.pathname]);
};
