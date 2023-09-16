function LoginPage () {
    return(
        <main className="flex items-center justify-center h-screen w-full p-4 md:p-24 [&>aside]:h-[80vh] text-black">
            <aside className="hidden md:block md:w-[50%] md:h-[500px] md:bg-primaryColor md:rounded-l-lg md:shadow-2xl">Hola</aside>
            <aside className="relative flex flex-col justify-center w-full p-10 bg-primaryColor h-[400px] md:h-[500px] rounded-lg shadow-2xl md:w-[50%] md:bg-transparent md:rounded-r-lg md:rounded-none text-balance">
                <h1 className="text-2xl font-bold text-white md:text-[#333333] text-center md:text-left">Bienvenidos!</h1>
                <p className="text-sm text-gray-100 md:text-gray-400 mt-2 font-light mb-5 text-center md:text-left">
                Administra, gestiona y controla tu negocio de manera eficiente.
                </p>
                <p className="text-center absolute bottom-3 left-1/2 transform -translate-x-1/2 text-white md:text-gray-400 text-sm">© 2023 ALL RIGHTS RESERVED</p>
            </aside>
        </main>
    )
}
export default LoginPage;