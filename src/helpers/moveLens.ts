interface IMoveLensParams {
    pos: {
        x: number;
        y: number;
    };
    lens: HTMLDivElement;
    img: HTMLImageElement;
}

const moveLens = ({ pos, lens, img }: IMoveLensParams) => {
    let positionLeft = pos.x - lens.offsetWidth / 2;
    let positionTop = pos.y - lens.offsetHeight / 2;

    if (positionLeft < 0) {
        positionLeft = 0;
    }

    if (positionTop < 0) {
        positionTop = 0;
    }

    if (positionLeft > img.width - lens.offsetWidth) {
        positionLeft = img.width - lens.offsetWidth;
    }

    if (positionTop > img.height - lens.offsetHeight) {
        positionTop = img.height - lens.offsetHeight;
    }

    // if (positionLeft > img.width - lens.offsetWidth / 3) {
    //     positionLeft = img.width - lens.offsetWidth / 3;
    // }

    // if (positionTop > img.height - lens.offsetHeight / 3) {
    //     positionTop = img.height - lens.offsetHeight / 3;
    // }

    return { positionLeft, positionTop };
};

export default moveLens;
