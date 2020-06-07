import { useEffect } from "react";
function useClickOutSide(ref, handler) {
    useEffect(function () {
        var listener = function (event) {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener("click", listener);
        return function () {
            // 移除事件
            document.removeEventListener("click", listener);
        };
    }, [handler, ref]);
}
export default useClickOutSide;
