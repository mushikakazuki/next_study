import { useCallback, useState } from "react";

export const useArray = () => {
  const [moji, setmoji] = useState("");

  const [array, setarray] = useState([]);

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

  const handleChnge = (e) => {
    setmoji(e.target.value);
  };

  return { moji, array, handleAdd, handleChnge };
};
