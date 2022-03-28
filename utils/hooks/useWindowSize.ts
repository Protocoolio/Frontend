import { useCallback, useEffect, useState } from "react";
import { throttle } from "lodash";

interface IWindowSize {
  height: number;
  width: number;
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<IWindowSize>({
    height: 0,
    width: 0,
  });

  const isMaxWidth = useCallback(
    (breakpoint: number) => windowSize.width < breakpoint,
    [windowSize.width]
  );

  useEffect(() => {
    const handleResize = throttle(
      () =>
        setWindowSize({
          height: window.innerHeight,
          width: window.innerWidth,
        }),
      200
    );

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isMaxWidth, windowSize };
};
