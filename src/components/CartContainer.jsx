import { CartList } from "./CartList"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router";

function CartContainer() {

    const { cart } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
            <h2 className="text-2xl font-semibold">Tu carrito está vacío</h2>
            <Link to="/" className="btn btn-primary">
                Ver productos
            </Link>
            </div>
        );
    }

    const total = cart.reduce((acc, item) => acc + item.price * item.cantidad, 0);

    return (
        <CartList cart={cart} total={total} />
    );
}

export default CartContainer;