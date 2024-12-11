import { useEffect, useRef } from "react";

export function FocusableInput() {
  const inputRef = useRef(null);
  const mountedRef = useRef(false);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    if (!mountedRef.current) {
      mountedRef.current = true;
      console.log("Componente montato per la prima volta");
    } else {
      console.log("Componente rimontato");
    }
  }, []);

  return (
    <>
      <input ref={inputRef} type="text" />
    </>
  );
}
