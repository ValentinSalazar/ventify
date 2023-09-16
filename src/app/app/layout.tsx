
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function AppLayout({ children }:any) {
  return (
    <>
      <Sidebar />
      <Navbar />
      <main className="md:ml-52 p-5">
      { children }
      </main>
    </>
  );
}

export default AppLayout;
