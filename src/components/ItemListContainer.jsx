import { useState, useEffect } from "react";
import ItemList from "./itemList";

function ItemListContainer() {

  const [items, setItems] = useState([])

  useEffect(()=> {

    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => setItems(data.products))

  }, [])

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;