
function ItemList({ items }){

    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
            <div key={item.id} className="card bg-base-100 shadow hover:shadow-lg transition">
                <figure>
                    <img
                        src={item.thumbnail}
                        alt={item.title}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title line-clamp-1">{item.title}</h2>

                    <div className="flex flex-wrap gap-2">
                        <span className="badge badge-primary">Precio: ${item.price}</span>
                        <span className="badge badge-outline">Stock: {item.stock}</span>
                    </div>

                    <p className="text-sm text-base-content/80 line-clamp-3">
                    {item.description}
                    </p>

                    <div className="card-actions justify-end">
                        <a className="btn btn-sm btn-primary">
                            Ver más
                        </a>
                    </div>
                </div>
            </div>
        ))}
        </div>
    )

}

export default ItemList
