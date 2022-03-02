interface IGetCursorParams {
    event: React.MouseEvent<HTMLImageElement, MouseEvent>;
    img: HTMLImageElement;
}

const getCursor = ({ event, img }: IGetCursorParams) => {
    const bounds = img.getBoundingClientRect();
    const x = event.pageX - bounds.left;
    const y = event.pageY - bounds.top;
    const newX = x - window.pageXOffset;
    const newY = y - window.pageYOffset;
    return { x: newX, y: newY };
};

export default getCursor;
