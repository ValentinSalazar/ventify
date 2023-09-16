import { FaHome } from 'react-icons/fa'
import { MdPointOfSale, MdInventory, MdPeople, MdSettings, MdExitToApp } from 'react-icons/md'
import {ImTruck} from 'react-icons/im'
import { FaFileInvoiceDollar} from 'react-icons/fa'
import Navbar from './components/Navbar'


function AppLayout(){
    return(
        <>
        <aside className='hidden h-screen fixed w-52 bg-slate-800 md:flex flex-col p-2 text-gray-200 gap-3 [&>a]:rounded [&>a]:p-2 [&>a]:flex [&>a]:gap-2 [&>a]:items-center'>
        <h3 className='flex justify-center items-center text-xl text-center uppercase font-bold h-20'>Nombre del negocio/Imagen</h3>
        <hr />
        <a><FaHome size={20} />Inicio</a>
        <a><MdPointOfSale size={20} />Caja</a>
        <a><MdInventory size={20} />Inventario</a>
        <a><ImTruck size={20} />Proveedores</a>
        <a><MdPeople size={20} />Clientes</a>
        <a><FaFileInvoiceDollar />Facturacion</a>
        <a><MdSettings size={20} />Ajustes</a>


        <button
          className='absolute bottom-10 left-1/2 -translate-x-1/2 rounded bg-slate-700 px-5 py-2 font-bold tracking-wide flex items-center gap-2'>
          <MdExitToApp size={20} />
          SALIR
        </button>

      </aside>
      <nav>Navbar mobile!</nav>
      {/* Importar el componente navbar */}

      </>
    )
}


export default AppLayout;