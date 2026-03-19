import {CartContext} from './CartContext';
import { useState } from 'react';

export function CartProvider({children}) {

    const [cart, setCart] = useState([]);

    const agregarAlCarrito = producto => {

        const inCart = cart.some(item => item.id === producto.id);

        if(inCart) {

            const carritoActualizado = cart.map(item => {
                if(item.id === producto.id) {
                    return { ...item, cantidad: item.cantidad + producto.cantidad };
                }
                return item;
            });

            setCart(carritoActualizado);

        } else {

            setCart([...cart, producto]);

        }
    };

    const unidadesCarrito = () =>  {
        const total = cart.reduce((acc, item) => acc + item.cantidad, 0);
        return total;
    };

    const eliminarDelCarrito = (id) => {
        const nuevoCarrito = cart.filter(item => item.id !== id);
        setCart(nuevoCarrito);
    };

    const vaciarCarrito = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, agregarAlCarrito, unidadesCarrito, eliminarDelCarrito, vaciarCarrito }}>
            {children}
        </CartContext.Provider>
    )

};