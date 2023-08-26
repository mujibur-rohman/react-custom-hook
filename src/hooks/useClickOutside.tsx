import { RefObject, useEffect } from "react";

function useClickOutside(
  ref: RefObject<HTMLElement>,
  callback: () => void,
  dependencies: boolean
) {
  const handleClick = (event: globalThis.MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, []);
}

export default useClickOutside;
