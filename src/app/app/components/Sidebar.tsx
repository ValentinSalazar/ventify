'use client'
import { FaHome } from "react-icons/fa";
import {
  MdPointOfSale,
  MdInventory,
  MdPeople,
  MdSettings,
  MdExitToApp,
} from "react-icons/md";
import { ImTruck } from "react-icons/im";
import { FaFileInvoiceDollar } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Sidebar() {

  const pathName = usePathname();

  const isActiveLink = (href: string) => {
    return pathName === href ? "bg-slate-500" : "text-white";
  };

  return (
    <aside className="hidden h-screen fixed w-52 bg-slate-800 md:flex flex-col p-2 text-gray-200 gap-3 [&>a]:rounded [&>a]:p-2 [&>a]:flex [&>a]:gap-2 [&>a]:items-center">
      <h3 className="flex justify-center items-center text-xl text-center uppercase font-bold h-20">
        Nombre del negocio/Imagen
      </h3>
      <hr />
      <Link href="/app/inicio" className={`hover:bg-slate-700 ${isActiveLink('/app/inicio')}`}>
        <FaHome size={20} />
        Inicio
      </Link>
      <Link href="/app/caja" className={`hover:bg-slate-700 ${isActiveLink('/app/caja')}`}>
        <MdPointOfSale size={20} />
        Caja
      </Link>
      <Link href="/app/inventario" className={`hover:bg-slate-700 ${isActiveLink('/app/inventario')}`}>
        <MdInventory size={20} />
        Inventario
      </Link>
      <Link href="/app/proveedores" className={`hover:bg-slate-700 ${isActiveLink('/app/proveedores')}`}>
        <ImTruck size={20} />
        Proveedores
      </Link>
      <Link href="/app/clientes" className={`hover:bg-slate-700 ${isActiveLink('/app/clientes')}`}>
        <MdPeople size={20} />
        Clientes
      </Link>
      <Link href="/app/facturacion" className={`hover:bg-slate-700 ${isActiveLink('/app/facturacion')}`}>
        <FaFileInvoiceDollar />
        Facturacion
      </Link>
      <Link href="/app/ajustes" className={`hover:bg-slate-700 ${isActiveLink('/app/ajustes')}`}>
        <MdSettings size={20} />
        Ajustes
      </Link>

      <Link
        href="../auth/login"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 rounded bg-slate-700 px-5 py-2 font-bold tracking-wide flex items-center gap-2 hover:bg-slate-900 active:opacity-50 transition-colors"
      >
        <MdExitToApp size={20} />
        SALIR
      </Link>
    </aside>
  );
}
