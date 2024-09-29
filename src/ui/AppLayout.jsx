import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      <Header />
      <main className="p-5 overflow-auto w-2/4 mx-auto  ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
