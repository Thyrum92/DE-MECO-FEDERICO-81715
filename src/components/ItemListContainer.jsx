import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getProducts, getProductsByCategory } from "../firebase/db";
import ItemList from "./ItemList";

function ItemListContainer() {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const { id_categoria } = useParams()

  useEffect(()=> {

    setLoading(true)

    if(id_categoria) {

      getProductsByCategory(id_categoria)
      .then(data => { setItems(data); setLoading(false) })

    }else{

      getProducts()
      .then((data) => { setItems(data); setLoading(false) })

    }

  }, [id_categoria])

  return (
    <div>
      <ItemList items={items} loading={loading} />
    </div>
  );
}

export default ItemListContainer;