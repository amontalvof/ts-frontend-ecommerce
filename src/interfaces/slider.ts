export const SLIDER_LOADING = 'SLIDER_LOADING';
export const SLIDER_FAIL = 'SLIDER_FAIL';
export const SLIDER_SUCCESS = 'SLIDER_SUCCESS';

export type TSlide = {
    id: number;
    src: string;
    text: string;
    route: string;
    date: string;
};

export type TSlider = TSlide[];

export interface SliderLoading {
    type: typeof SLIDER_LOADING;
}

export interface SliderFail {
    type: typeof SLIDER_FAIL;
}

export interface SliderSuccess {
    type: typeof SLIDER_SUCCESS;
    payload: TSlider;
}

export type SliderDispatchTypes = SliderLoading | SliderFail | SliderSuccess;
