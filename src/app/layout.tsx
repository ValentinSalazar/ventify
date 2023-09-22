import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Ventify',
  description: 'Administra y gestiona tu negocio de la manera mas eficiente. Podras realizar todas tus operaciones de caja, gestionar con simpleza tu inventario, tener el mejor contacto con tus proveedores y clientes, y ademas facturar la venta que desees. Todos estos modulos, se encuentran integrado en una misma aplicacion.',
}

export default function RootLayout({ children, }: {children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className='overflow-hidden font-Poppins'>
        {children}
      </body>
    </html>
  )
}
