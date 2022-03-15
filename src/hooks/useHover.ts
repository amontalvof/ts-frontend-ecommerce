// TODO: Remove hook when the project is finished

import { useState } from 'react';
import useEventListener from './useEventListener';

const useHover = (ref: any) => {
    const [hovered, setHovered] = useState(false);

    useEventListener('mouseover', () => setHovered(true), ref.current);
    useEventListener('mouseout', () => setHovered(false), ref.current);

    return hovered;
};

export default useHover;
