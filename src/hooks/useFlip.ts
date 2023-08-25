import { useState } from 'react';

/**
 * Custom hook to use a custom setStateAction for flip values
 *
 * @param {number} defaultVal the default value
 * @return {[string, (newFlip: number) => void]}
 */
function useFlip(defaultVal: number): [string, (newFlip: number) => void] {
    const [flip, setFlip] = useState(defaultVal < 10 ? `0${defaultVal}` : `${defaultVal}`);

    const customSetFlip = (newFlip: number) => setFlip(newFlip < 10 ? `0${newFlip}` : `${newFlip}`);

    return [flip, customSetFlip];
}

export default useFlip;
