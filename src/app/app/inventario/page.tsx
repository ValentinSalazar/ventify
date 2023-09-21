'use client'
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
import { useEffect } from "react";

function InventarioPage () {

    useEffect(()=>{
        fetch('https://ventify-back.azurewebsites.net/api/productos')
<<<<<<< Updated upstream
        .then(res => res.json())
        .then(res => console.log(res))
    })

    return <h1>Inventario</h1>
=======
        .then((res) => console.log(res.json()))
    },[])

    return(
        <h1>Inventario!</h1>
    )
>>>>>>> Stashed changes
}

export default InventarioPage;