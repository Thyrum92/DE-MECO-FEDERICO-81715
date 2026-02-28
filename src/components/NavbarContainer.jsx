import { useEffect, useState } from "react"
import Navbar from "./Navbar"

function NavbarConainer( ){

    const [categorias, setCategorias] = useState([])

    useEffect(()=>{
        fetch('https://dummyjson.com/products/categories')
        .then(res => res.json())
        .then(data =>{
            const primeras = data.slice(0,5)
            setCategorias(primeras)
        }
        )
    }, [])

    return(
        <Navbar categorias={categorias} />
    )

}

export default NavbarConainer