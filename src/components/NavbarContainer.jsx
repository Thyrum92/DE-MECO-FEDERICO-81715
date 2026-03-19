import { useEffect, useState } from "react"
import { getCategories } from "../firebase/db"
import Navbar from "./Navbar"

function NavbarConainer( ){

    const [categorias, setCategorias] = useState([])

    useEffect(()=>{

        getCategories()
        .then(categorias => setCategorias(categorias))

    }, [])

    return(
        <Navbar categorias={categorias} />
    )

}

export default NavbarConainer