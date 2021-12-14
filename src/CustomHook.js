import { useEffect } from "react";

const CustomHook = (count) => {
  useEffect(() => {
    document.title = { count };
  }, [count]);
};

export default CustomHook;
