'use client'

import { useEffect } from "react";

function InventarioPage () {

    useEffect(()=>{
        fetch('https://ventify-back.azurewebsites.net/api/productos')
        .then(res => res.json())
        .then(res => console.log(res))
    })

    return <h1>Inventario</h1>
}

export default InventarioPage;