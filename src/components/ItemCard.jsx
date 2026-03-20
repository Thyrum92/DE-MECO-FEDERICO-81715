import { Link } from "react-router"
import { formatPrice } from "../utils/fomats"

export function ItemCard({ item }) {

    if(!item){

        return (
            <div className="card bg-base-100 shadow">

            <figure className="bg-base-200">
                <div className="skeleton w-full h-60"></div>
            </figure>

            <div className="card-body space-y-3">

                <div className="skeleton h-5 w-3/4"></div>

                <div className="flex gap-2">
                    <div className="skeleton h-5 w-20"></div>
                    <div className="skeleton h-5 w-16"></div>
                </div>

                <div className="space-y-2">
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-5/6"></div>
                    <div className="skeleton h-4 w-4/6"></div>
                </div>

                <div className="flex justify-end">
                    <div className="skeleton h-8 w-20"></div>
                </div>

            </div>
        </div>
        );

    }

    return (
        <div key={item.id} className="card bg-base-100 shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <figure className="overflow-hidden bg-base-200">
                <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full max-h-60 object-contain transition-transform duration-300 group-hover:scale-105"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title line-clamp-1">{item.title}</h2>

                <div className="flex flex-wrap gap-2">
                    <span className="badge badge-primary">{formatPrice(item.price)}</span>
                    <span className="badge badge-outline">Stock: {item.stock}</span>
                </div>

                <p className="text-sm text-base-content/80 line-clamp-3">
                {item.description}
                </p>

                <div className="card-actions justify-end">
                    <Link to={`/producto/${item.id}`} className="btn btn-sm btn-primary">
                        Ver más
                    </Link>
                </div>
            </div>
        </div>
    )
}
