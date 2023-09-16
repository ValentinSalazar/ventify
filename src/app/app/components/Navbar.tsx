"use client";

import React, { useState } from "react";
import { FaFileInvoiceDollar, FaHome } from "react-icons/fa";
import { ImTruck } from "react-icons/im";
import {
  MdExitToApp,
  MdInventory,
  MdOutlineClear,
  MdPeople,
  MdPointOfSale,
  MdSettings,
} from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathName = usePathname();

  const isActiveLink = (href: any) => {
    return pathName === href ? "bg-slate-500" : "text-white";
  };

  const [navBar, setNavBar] = useState(false);

  const handleClick = () => {
    setNavBar(!navBar);
  };

  return (
    <nav className="md:hidden text-white bg-slate-800 h-16 relative shadow-primaryShadow">
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2"
        onClick={handleClick}
      >
        {navBar ? <MdOutlineClear size={30} /> : <IoMenu size={30} />}
      </button>
      <h3 className="absolute right-4 top-1/2 -translate-y-1/2 uppercase font-bold text-right">Nombre del negocio/Imagen</h3>
      <ul
        className={
          navBar
            ? "bg-slate-800 p-2 [&>a]:flex [&>a]:gap-2 [&>a]:p-2 [&>a]:my-2 [&>a]:rounded w-80 relative top-20 left-2 rounded list-none shadow-secondShadow"
            : "hidden"
        }
      >
        <Link
          href="/app/inicio"
          className={`hover:bg-slate-700 transition-colors ${isActiveLink(
            "/app/inicio"
          )}`}
          onClick={handleClick}
        >
          <FaHome size={20} />
          Inicio
        </Link>
        <Link
          href="/app/caja"
          className={`hover:bg-slate-700 transition-colors ${isActiveLink(
            "/app/caja"
          )}`}
          onClick={handleClick}
        >
          <MdPointOfSale size={20} />
          Caja
        </Link>
        <Link
          href="/app/inventario"
          className={`hover:bg-slate-700 transition-colors ${isActiveLink(
            "/app/inventario"
          )}`}
          onClick={handleClick}
        >
          <MdInventory size={20} />
          Inventario
        </Link>
        <Link
          href="/app/proveedores"
          className={`hover:bg-slate-700 transition-colors ${isActiveLink(
            "/app/proveedores"
          )}`}
          onClick={handleClick}
        >
          <ImTruck size={20} />
          Proveedores
        </Link>
        <Link
          href="/app/clientes"
          className={`hover:bg-slate-700 transition-colors ${isActiveLink(
            "/app/clientes"
          )}`}
          onClick={handleClick}
        >
          <MdPeople size={20} />
          Clientes
        </Link>
        <Link
          href="/app/facturacion"
          className={`hover:bg-slate-700 transition-colors ${isActiveLink(
            "/app/facturacion"
          )}`}
          onClick={handleClick}
        >
          <FaFileInvoiceDollar />
          Facturacion
        </Link>
        <Link
          href="/app/ajustes"
          className={`hover:bg-slate-700 transition-colors ${isActiveLink(
            "/app/ajustes"
          )}`}
          onClick={handleClick}
        >
          <MdSettings size={20} />
          Ajustes
        </Link>
        <Link href='../auth/login' className="w-full rounded bg-slate-700 px-2 py-2 font-bold tracking-wide flex items-center gap-2">
          <MdExitToApp size={20} />
          SALIR
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
