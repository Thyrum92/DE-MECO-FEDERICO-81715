import { CartItem } from "./CartItem";
import { formatPrice } from "../utils/fomats";
import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { ToastContext } from "../context/ToastContext";
import { CartModalContainer } from "./CartModalContainer";

export function CartList({ cart, total }) {

    const { vaciarCarrito } = useContext(CartContext);
    const { mostrarToast } = useContext(ToastContext);
    const [estadoModal, setEstadoModal] = useState(false);

    const handleVaciar = () => {
        if (confirm("¿Seguro que querés vaciar el carrito?")) {
            vaciarCarrito();
            mostrarToast(`Carrito vaciado`, "success");
        }
    };

    return (

        <div className="max-w-6xl mx-auto p-6">

            <h1 className="text-3xl font-bold mb-6">Carrito</h1>

            <div className="grid lg:grid-cols-3 gap-6">

                <div className="lg:col-span-2 space-y-4">

                {cart.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}

                </div>

                <div className="card bg-base-100 shadow-md p-6 h-fit">

                <h2 className="text-xl font-bold mb-4">Resumen</h2>

                <div className="flex justify-between mb-2">
                    <span>Productos</span>
                    <span>{cart.length}</span>
                </div>

                <div className="flex justify-between mb-4">
                    <span>Total</span>
                    <span className="font-bold text-lg">
                    {formatPrice(total)}
                    </span>
                </div>

                <button
                    className="btn btn-primary w-full mb-2"
                    onClick={() => setEstadoModal(true)}
                >
                    Finalizar compra
                </button>

                <button
                    className="btn btn-outline w-full"
                    onClick={handleVaciar}
                >
                    Vaciar carrito
                </button>

                </div>

            </div>

            {estadoModal && (
                <CartModalContainer 
                    onClose={() => setEstadoModal(false)} 
                    cart={cart}
                    total={total}
                />
            )}

        </div>
    )

}