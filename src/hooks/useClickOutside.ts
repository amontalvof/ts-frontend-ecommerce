import { MutableRefObject } from 'react';
import useEventListener from './useEventListener';

const useClickOutside = (
    ref: MutableRefObject<HTMLElement>,
    cb: (event?: any) => void
) => {
    useEventListener(
        'click',
        (event) => {
            if (ref.current == null || ref.current.contains(event.target))
                return;
            cb(event);
        },
        document
    );
};

export default useClickOutside;
