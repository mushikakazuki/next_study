import { useEffect } from "react";
export const leghtblue = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
};
