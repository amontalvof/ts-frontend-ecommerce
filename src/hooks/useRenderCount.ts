import { useEffect, useRef } from 'react';

const useRenderCount = () => {
    const count = useRef(1);
    useEffect(() => {
        const newCount = count.current + 1;
        count.current = newCount;
    });
    return count.current;
};

export default useRenderCount;
