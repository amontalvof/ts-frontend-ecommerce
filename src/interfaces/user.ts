import { IProduct } from './product';

export interface IUserInfo {
    checking?: boolean;
    uid?: number;
    name?: string;
    foto?: string;
    modo?: string;
    email?: string;
}

export interface IOrderInfo extends IProduct {
    direccion: string;
    email: string;
    envio: number;
    fecha: string;
    id: number;
    id_producto: number;
    id_usuario: number;
    metodo: string;
    pais: string;
}
