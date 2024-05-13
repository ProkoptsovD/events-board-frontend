import { useCallback, useEffect, useRef } from "react";

export const useOutsideClick = <TElement extends HTMLElement>(
  callback: (e?: any) => void
): React.RefObject<TElement> => {
  const ref = useRef<TElement>(null);

  const handleClick = useCallback(
    (event: MouseEvent) => {
      const { target } = event;
      if (target instanceof Node && !ref.current?.contains(target)) {
        callback(event as unknown as React.MouseEvent<TElement>);
      }
    },
    [callback]
  );

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [handleClick]);

  return ref;
};
