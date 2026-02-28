import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemList from "./ItemList";

function ItemListContainer() {

  const [items, setItems] = useState([])
  const { nombreCategoria } = useParams()

  useEffect(()=> {

    let url = 'https://dummyjson.com/products'

    if(nombreCategoria) {

      url = `https://dummyjson.com/products/category/${nombreCategoria}`

    }

    fetch(url)
    .then(res => res.json())
    .then(data => setItems(data.products))

  }, [nombreCategoria])

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;