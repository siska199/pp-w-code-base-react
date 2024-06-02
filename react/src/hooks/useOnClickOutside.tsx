import { RefObject, useEffect } from "react";

interface TProps<T> {
    handler: () => void;
    ref : RefObject<T>;
}

const useOnClickOutside = <T,>(props: TProps<T>) => {
    const { ref, handler } = props
    useEffect(() => {
        const handleListener = () => {
            if (!ref.current) {
                return;
            }
            handler();
        };

        document.addEventListener("mousedown",handleListener);
        document.addEventListener("touchstart", handleListener);

        return () => {
            document.removeEventListener("mousedown", handleListener);
            document.removeEventListener("touchstart", handleListener);
        };
    }, [ref, handler]);
};

export default useOnClickOutside;