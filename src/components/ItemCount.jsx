import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ToastContext } from "../context/ToastContext";

function ItemCount({ producto, onChange }) {

  const { agregarAlCarrito } = useContext(CartContext);
  const { showToast } = useContext(ToastContext);

  const [cantidad, setCantidad] = useState(1);

  const incrementar = () => {
    if (cantidad < producto.stock) {
      const nuevaCantidad = cantidad + 1;
      setCantidad(nuevaCantidad);
      onChange?.(nuevaCantidad);
    }
  };

  const decrementar = () => {
    if (cantidad > 1) {
      const nuevaCantidad = cantidad - 1;
      setCantidad(nuevaCantidad);
      onChange?.(nuevaCantidad);
    }
  };

  const agregarAlCarritoHandler = () => {
    agregarAlCarrito({ ...producto, cantidad });
    showToast(`${cantidad} ${producto.title} agregado${cantidad > 1 ? 's' : ''} al carrito`, "success");
  };

  return (
    <div className="flex items-center gap-2">

      <button className="btn btn-sm" onClick={decrementar} disabled={cantidad <= 1}>
        −
      </button>

      <span className="w-8 text-center font-bold">
        {cantidad}
      </span>

      <button className="btn btn-sm" onClick={incrementar} disabled={cantidad >= producto.stock}>
        +
      </button>

      <button
        className="btn btn-primary w-full"
        onClick={agregarAlCarritoHandler}
        disabled={producto.stock === 0}
      >
        Add to cart
      </button>

    </div>
  );
}

export default ItemCount;