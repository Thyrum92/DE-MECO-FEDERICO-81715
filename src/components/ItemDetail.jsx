import { useState } from "react";
import ItemCount from "./ItemCount";

function ItemDetail({ producto }) {

  const [cantidad, setCantidad] = useState(1);

  const total = producto?.price
    ? producto.price * cantidad
    : 0;

  return (
    <div className="card lg:card-side bg-base-100 shadow-sm">
      <figure>
        <img
          src={producto.thumbnail}
          alt={producto.title}
          className="h-64 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{producto.title}</h2>
        <p>{producto.description}</p>
        <p>Price: ${producto.price}</p>
        <p>Stock: {producto.stock}</p>

        <div className="card-actions justify-end items-center gap-6">
          
          <ItemCount
            stock={producto.stock}
            cantidad={cantidad}
            setCantidad={setCantidad}
          />

          <p className="font-bold text-lg">
            Total: ${Math.round(total * 100) / 100}
          </p>

          <button
            className="btn btn-primary"
            disabled={producto.stock === 0}
          >
            Add to cart
          </button>

        </div>
      </div>
    </div>
  );
}

export default ItemDetail;