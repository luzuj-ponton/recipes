import React, { useRef, RefObject } from "react";
import { useEffectAfterMount } from "src/hooks/useEffectAfterMount";

import { ClickOutsideProps } from "./ClickOutside.types";

export const ClickOutside: React.FC<ClickOutsideProps> = ({ onClickOutside, children }) => {
  const wrapperRef: RefObject<HTMLDivElement> = useRef(null);

  useEffectAfterMount(() => {
    const handleClickOutside = (event: Event) => {
      const target = event.target as Node;
      if (wrapperRef && !wrapperRef.current?.contains(target)) {
        onClickOutside();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClickOutside]);

  return <div ref={wrapperRef}>{children}</div>;
};
