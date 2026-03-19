import { useState } from "react";
import ItemCount from "./ItemCount";
import { formatPrice } from "../utils/fomats";

function ItemDetail({ producto }) {

  const [cantidad, setCantidad] = useState(1);

  const total = producto?.price
    ? producto.price * cantidad
    : 0;

  if (!producto) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <div className="card w-full max-w-4xl bg-base-100 shadow-md">
          
          <div className="grid md:grid-cols-2 gap-6 p-6">
            
            <div className="skeleton h-80 w-full rounded-xl"></div>

            <div className="space-y-4">
              <div className="skeleton h-6 w-2/3"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-5/6"></div>

              <div className="flex gap-3">
                <div className="skeleton h-6 w-24"></div>
                <div className="skeleton h-6 w-20"></div>
              </div>

              <div className="skeleton h-10 w-40"></div>
              <div className="skeleton h-10 w-32"></div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-[70vh] px-4">
      <div className="card w-full max-w-4xl bg-base-100 shadow-md">
        
        <div className="grid md:grid-cols-2 gap-6 p-6">

          {/* Imagen */}
          <div className="flex items-center justify-center bg-base-200 rounded-xl">
            <img
              src={producto.thumbnail}
              alt={producto.title}
              className="h-80 object-contain p-4"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-between">

            <div className="space-y-3">
              <h2 className="text-2xl font-bold">{producto.title}</h2>

              <p className="text-base-content/70">
                {`marca: ${producto.brand}`}
              </p>

              <p className="text-base-content/70">
                {`sku: ${producto.sku}`}
              </p>

              <p className="text-base-content/70">
                {producto.detail}
              </p>

              <div className="flex gap-3">
                <span className="badge badge-primary text-sm">
                  {formatPrice(producto.price)}
                </span>
                <span className="badge badge-outline text-sm">
                  Stock: {producto.stock}
                </span>
              </div>
            </div>

            {/* Acciones */}
            <div className="space-y-4 mt-6">

              <ItemCount
                producto={producto}
                onChange={setCantidad}
              />

              <p className="text-xl font-semibold">
                Total: {formatPrice(total)}
              </p>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default ItemDetail;