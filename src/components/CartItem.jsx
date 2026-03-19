import { formatPrice } from "../utils/fomats";
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { ToastContext } from "../context/ToastContext";

export function CartItem({ item }) {

    const { eliminarDelCarrito } = useContext(CartContext);
    const { showToast } = useContext(ToastContext);

    const handleEliminar = () => {
        if (confirm(`¿Eliminar ${item.title} del carrito?`)) {
            eliminarDelCarrito(item.id);
            showToast(`${item.title} eliminado del carrito`, "success");
        }
    };

    return (
        <div
        key={item.id}
        className="card card-side bg-base-100 shadow-md p-4 items-center"
        >
            <img
                src={item.thumbnail}
                alt={item.title}
                className="w-24 h-24 object-contain"
            />

            <div className="flex-1 px-4">
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-sm text-base-content/70">
                    Cantidad: {item.cantidad}
                </p>
            </div>

            <div className="text-right">
                <p className="font-bold">
                {formatPrice(item.price * item.cantidad)}
                </p>
                <button
                    className="btn btn-xs btn-error mt-2"
                    onClick={handleEliminar}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}