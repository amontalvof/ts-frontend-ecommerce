export interface IOrder {
    id_usuario?: number;
    id_producto: number;
    direccion: string;
    envio: number;
    metodo: string;
    email?: string;
    pais: string;
}
