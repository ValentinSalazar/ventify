'use client'
import { useEffect } from "react";

function InventarioPage () {

    useEffect(()=>{
        fetch('https://ventify-back.azurewebsites.net/api/productos')
        .then((res) => console.log(res.json()))
    },[])

    return(
        <h1>Inventario!</h1>
    )
}

export default InventarioPage;