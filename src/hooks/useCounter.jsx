import { useCallback, useMemo, useState } from "react";

export const useCounter = () => {
  const [foo, setfoo] = useState(1);
  const [flg, setflg] = useState(true);

  const doublecount = useMemo(() => {
    return foo * 2;
  }, [foo]);

  const handleClick = useCallback(() => {
    if (foo < 10) {
      setfoo((foo) => foo + 1);
    }
  }, [foo]);

  const flgchange = useCallback(() => {
    setflg((flg) => !flg);
  }, []);

  return { foo, flg, doublecount, handleClick, flgchange };
};
