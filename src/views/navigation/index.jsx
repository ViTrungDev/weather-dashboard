import { Outlet } from "react-router-dom";
import Header from "./header/index.jsx";
import Footer from "./footer/footer.jsx";

const Layout = () => {
  return (
    <div className=" flex flex-col h-screen overflow-hidden bg-slate-950">
      <header className="h-16 flex-none border-b border-slate-800 bg-slate-900 z-50 p-4">
        <Header />
      </header>
      <div className="flex-1 overflow-y-auto">
        <main className="min-h-[calc(100vh-64px-80px)]">
          <Outlet />
        </main>
        <footer className="h-20 border-t border-slate-800 bg-slate-900/50">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Layout;
