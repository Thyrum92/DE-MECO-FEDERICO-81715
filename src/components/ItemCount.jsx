function ItemCount({ stock, cantidad, setCantidad }) {

  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div className="flex items-center gap-2">

      <button
        className="btn btn-sm"
        onClick={decrementar}
        disabled={cantidad <= 1}
      >
        −
      </button>

      <span className="w-8 text-center font-bold">
        {cantidad}
      </span>

      <button
        className="btn btn-sm"
        onClick={incrementar}
        disabled={cantidad >= stock}
      >
        +
      </button>

    </div>
  );
}

export default ItemCount;