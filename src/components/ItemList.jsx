import { ItemCard } from "./ItemCard";

function ItemList({ items }){

    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {items.map((item) => (
            <ItemCard key={item.id} item={item} />
        ))}
        </div>
    )

}

export default ItemList
