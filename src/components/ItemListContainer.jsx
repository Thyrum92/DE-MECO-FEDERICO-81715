import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getProducts, getProductsByCategory } from "../firebase/db";
import ItemList from "./ItemList";

function ItemListContainer() {

  const [items, setItems] = useState([])
  const { id_categoria } = useParams()

  useEffect(()=> {

    if(id_categoria) {

      getProductsByCategory(id_categoria)
      .then(data => setItems(data))

    }else{

      getProducts()
      .then((data) => setItems(data))

    }

  }, [id_categoria])

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;