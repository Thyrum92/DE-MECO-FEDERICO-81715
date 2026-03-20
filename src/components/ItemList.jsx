import { ItemCard } from "./ItemCard";

function ItemList({ items, loading }){

    if (loading) {
        return (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {Array(5).fill(null).map((_, i) => (
                <ItemCard key={i} item={null} />
            ))}
            </div>
        )
    }

    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {items.map((item) => (
            <ItemCard key={item.id} item={item} />
        ))}
        </div>
    )

}

export default ItemList
