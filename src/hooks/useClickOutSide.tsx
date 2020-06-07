import { RefObject, useEffect } from "react";
function useClickOutSide(ref: RefObject<HTMLElement>, handler: Function) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("click", listener);

    return () => {
      // 移除事件
      document.removeEventListener("click", listener);
    };
  }, [handler, ref]);
}

export default useClickOutSide;
