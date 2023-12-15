import { useEffect, useState } from "react";

export const useDebounce = (inputField, delayTime) => {
    const [inputValue, setInputValue] = useState(inputField);

    useEffect(() => {
        const timer = setTimeout(() => {
            setInputValue(inputField);
        },delayTime);

        return () => {
            clearTimeout(timer);
        }
    }, [inputField,delayTime]);

    return inputValue;
};

export default useDebounce;