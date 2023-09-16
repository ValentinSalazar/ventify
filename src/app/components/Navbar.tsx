'use client'
import Link from "next/link"
import { useState } from 'react'

export default function Navbar(){
    const [navbarState, setNavbarState] = useState(false);
    
    return(
        <nav className="bg-primaryColor h-10 relative">
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2">
          Hola!
        </button>
        <ul className="flex">
          <li><Link href='/'>Inicio</Link></li>
          <li><Link href='/'>Inicio</Link></li>
          <li><Link href='/'>Inicio</Link></li>
          <li><Link href='/'>Inicio</Link></li>
        </ul>
      </nav>
    )
}