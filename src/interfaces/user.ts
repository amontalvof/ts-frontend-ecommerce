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
    comprasFecha: string;
    comprasId: number;
    descripcion: string;
    descuentoOferta: number;
    detalles: string;
    direccion: string;
    email: string;
    entrega: number;
    envio: number;
    fecha: string;
    finOferta: string | null;
    id: number;
    id_categoria: number;
    id_producto: number;
    id_subcategoria: number;
    id_usuario: number;
    imgOferta: '';
    metodo: string;
    multimedia: string;
    nuevo: number;
    oferta: number;
    ofertadoPorCategoria: number;
    ofertadoPorSubCategoria: number;
    pais: string;
    peso: number;
    portada: string;
    precio: number;
    precioOferta: number;
    productosFecha: string;
    productosId: number;
    ruta: string;
    tipo: string;
    titular: string;
    titulo: string;
    ventas: number;
    ventasGratis: number;
    vistas: number;
    vistasGratis: number;
}
