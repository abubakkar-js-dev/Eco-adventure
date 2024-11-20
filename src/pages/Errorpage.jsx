import Navbar from "../components/Navbar";
import errorSvg from "../assets/svg/not-found.svg";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Errorpage = () => {
    const navigate = useNavigate('/');
    return (
        <div>
            {/* navbar */}
            <header>
                <Navbar />
            </header>
            <main className="container flex flex-col justify-center items-center min-h-[calc(100vh-68px)]">
                <img className="max-w-sm w-full p-4 mb-3" src={errorSvg} alt="404 error svg" />
                <div className="text-center space-y-5">
                    <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold">Opps, Wrong Turn...</h2>
                    <p className="pb-3">Seems like you&apos;ve strayed off the path. Let&apos;s get you back on track!</p>
                    <button onClick={() => navigate('/')} className="btn bg-orange-400 text-white hover:bg-orange-500">
                        <FaArrowLeft />
                        Back to home</button>
                </div>
            </main>
        </div>
    );
};

export default Errorpage;