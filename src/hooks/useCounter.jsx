import { useCallback, useState } from "react";

export const useCounter = () => {
  const [foo, setfoo] = useState(1);
  const [flg, setflg] = useState(true);

  const handleClick = useCallback(() => {
    if (foo < 10) {
      setfoo((foo) => foo + 1);
    }
  }, [foo]);

  const flgchange = useCallback(() => {
    setflg((flg) => !flg);
  }, []);

  return { foo, flg, handleClick, flgchange };
};
