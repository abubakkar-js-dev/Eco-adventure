import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Blogs from "../components/Blogs";

const Home = () => {
    const allBlogs = useLoaderData();
    console.log('From Home',allBlogs);
    return (
        <div>
            {/* Banner */}
            <Banner></Banner>
            <main className="container">
                <Blogs />
            </main>
        </div>
    );
};

export default Home;