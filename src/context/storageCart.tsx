import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { redError } from '../constants';

export interface ICartObject {
    productId: number;
    portada: string;
    titulo: string;
    precio: number;
    tipo: string;
    peso?: number;
    cantidad: number;
    oferta: number;
    precioOferta: number;
}

interface ICartContext {
    cart: ICartObject[];
    total: number;
    cartItems: number;
    increaseAmount: (id: number) => void;
    decreaseAmount: (id: number, amount: number) => void;
    removeFromCart: (id: number) => void;
    addToCart: (product: ICartObject, colorfondo?: string) => any;
    clearCart: () => void;
}

const CartContext = React.createContext<ICartContext>({
    cart: [],
    total: 0,
    cartItems: 0,
    increaseAmount: (id: number) => {},
    decreaseAmount: (id: number, amount: number) => {},
    removeFromCart: (id: number) => {},
    addToCart: (product: ICartObject, colorfondo?: string) => {},
    clearCart: () => {},
});

const getCartFromLocalStorage = () => {
    const productList = localStorage.getItem('productList') || '[]';
    return JSON.parse(productList);
};

const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState(getCartFromLocalStorage());
    const [total, setTotal] = useState(0);
    const [cartItems, setCartItems] = useState(0);

    useEffect(() => {
        //local storage
        localStorage.setItem('productList', JSON.stringify(cart));
        //cart items
        let newCartItem = cart.reduce(
            (total: number, cartItem: ICartObject) => {
                return (total += cartItem.cantidad);
            },
            0
        );
        setCartItems(newCartItem);

        //cart total
        let newTotal = cart.reduce((total: number, cartItem: ICartObject) => {
            if (cartItem?.oferta) {
                return (total += cartItem.precioOferta * cartItem.cantidad);
            }
            return (total += cartItem.cantidad * cartItem.precio);
        }, 0);
        newTotal = parseFloat(newTotal.toFixed(2));
        setTotal(newTotal);
    }, [cart]);

    //remove item
    const removeFromCart = (id: number) => {
        setCart([...cart].filter((item: ICartObject) => item.productId !== id));
    };

    //increase amount
    const increaseAmount = (id: number) => {
        const newCart = [...cart].map((item: ICartObject) => {
            return item.productId === id
                ? { ...item, cantidad: item.cantidad + 1 }
                : { ...item };
        });
        setCart(newCart);
    };

    //decrease amount
    const decreaseAmount = (id: number, amount: number) => {
        if (amount === 1) {
            removeFromCart(id);
        } else {
            const newCart = [...cart].map((item: ICartObject) => {
                return item.productId === id
                    ? { ...item, cantidad: item.cantidad - 1 }
                    : { ...item };
            });
            setCart(newCart);
        }
    };

    //add to cart
    const addToCart = async (product: ICartObject, colorfondo?: string) => {
        const {
            productId,
            portada,
            titulo,
            precio,
            tipo,
            peso,
            oferta,
            precioOferta,
        } = product;
        const item = [...cart].find(
            (item: ICartObject) => item.productId === productId
        );
        if (item) {
            increaseAmount(productId);
        } else {
            const newItem = {
                productId,
                portada,
                titulo,
                precio,
                tipo,
                peso,
                oferta,
                precioOferta,
                cantidad: 1,
            };
            const newCart = [...cart, newItem];
            setCart(newCart);
        }
        const result = await Swal.fire({
            text: 'A new product has been added to the shopping cart.',
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: colorfondo,
            cancelButtonColor: redError,
            cancelButtonText: 'Continue on this page',
            confirmButtonText: 'Go to cart',
        });
        return result;
    };

    //clear cart
    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                total,
                cartItems,
                increaseAmount,
                decreaseAmount,
                removeFromCart,
                addToCart,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
