import { ReactChild, ReactChildren } from 'react';

interface IRenderIfProps {
    isTrue: boolean;
    children: ReactChild | ReactChildren;
}

const RenderIf = ({ isTrue, children }: IRenderIfProps) => {
    if (isTrue) {
        return <>{children}</>;
    }
    return null;
};

export default RenderIf;
