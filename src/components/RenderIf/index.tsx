import { ReactChild, ReactChildren } from 'react';

interface IRenderIfProps {
    isTrue: boolean;
    children: ReactChild | ReactChildren;
}

export const RenderIf = ({ isTrue, children }: IRenderIfProps) => {
    if (isTrue) {
        return <>{children}</>;
    }
    return null;
};
