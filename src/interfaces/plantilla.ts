export const STYLES_LOADING = 'STYLES_LOADING';
export const STYLES_FAIL = 'STYLES_FAIL';
export const STYLES_SUCCESS = 'STYLES_SUCCESS';

export type TStyles = TStyle[];

export type TStyle = {
    id: number;
    barraSuperior: string;
    textoSuperior: string;
    colorFondo: string;
    colorTexto: string;
    logo: string;
    icono: string;
    redesSociales: string;
    fecha: string;
};

export interface StylesLoading {
    type: typeof STYLES_LOADING;
}

export interface StylesFail {
    type: typeof STYLES_FAIL;
}

export interface StylesSuccess {
    type: typeof STYLES_SUCCESS;
    payload: TStyles;
}

export type StylesDispatchTypes = StylesLoading | StylesFail | StylesSuccess;
