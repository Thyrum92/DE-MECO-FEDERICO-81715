import { CartModalForm } from "./CartModalForm";
import { validarFormulario } from "../utils/validaciones";
import { createOrder } from "../firebase/db";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { serverTimestamp } from "@firebase/firestore";

export function CartModalContainer({ onClose, cart, total }) {

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    direccion: "",
    codigoPostal: "",
    localidad: "",
    provincia: "",
    telefono: ""
  });

  const { vaciarCarrito } = useContext(CartContext);

  const [errores, setErrores] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resultado = validarFormulario(formData);

    if (!resultado.esValido) {
      setErrores(resultado.errores);
      return;
    }

    try {
      setIsLoading(true);

      const order = {
        buyer: formData,
        items: cart,
        total,
        createdAt: serverTimestamp()
      };

      const order_id = await createOrder(order);

      setOrderId(order_id);
      setIsSuccess(true);

      setTimeout(() => {
        vaciarCarrito();
      }, 3000);

    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (

    <CartModalForm
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      onClose={onClose}
      errores={errores}
      isLoading={isLoading}
      isSuccess={isSuccess}
      orderId={orderId}
    />

  );
}