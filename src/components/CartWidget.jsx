import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartWidget() {
  const { unidadesCarrito } = useContext(CartContext);
  const count = unidadesCarrito();

  return (
    <Link to="/cart" className="btn btn-ghost btn-circle">
      <div className="indicator">

        {/* Badge */}
        {count > 0 && (
          <span className="indicator-item badge badge-error badge-sm -top-1 -right-1">
            {count}
          </span>
        )}

        {/* Icono */}
        <div className="p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13 5.4 5M7 13l-2 8h14l-2-8M10 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
          </svg>
        </div>

      </div>
    </Link>
  );
}
export default CartWidget