import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
    return (
        <div>
            <header className="">
                {/* Navbar */}
                <Navbar />
            </header>
           <main className="bg-slate-100">
            <Outlet />
           </main>
        </div>
    );
};

export default AuthLayout;