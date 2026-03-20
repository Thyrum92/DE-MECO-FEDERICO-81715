import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getProduct } from "../firebase/db";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {

    const [producto, setProducto] = useState(null);
    const { id } = useParams();

    useEffect(() => {

        getProduct(id)
        .then(data => setProducto(data))

    }, [id]);

    return (
        <ItemDetail producto={producto} />
    );
}

export default ItemDetailContainer;