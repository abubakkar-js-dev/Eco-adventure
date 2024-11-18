import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Blogs from "../components/Blogs";
import { createContext } from "react";
import FavoriteCountries from "../components/FavoriteCountries";

// eslint-disable-next-line react-refresh/only-export-components
export const BlogsContext = createContext([]);

const Home = () => {
  const allBlogs = useLoaderData();
  console.log("From Home", allBlogs);
  return (
    <BlogsContext.Provider value={allBlogs}>
      <div>
        {/* Banner */}
        <Banner></Banner>
        <main>
          {/* blogs */}
          <Blogs />
            {/* Fav countries */}
          <FavoriteCountries />
        </main>
      </div>
    </BlogsContext.Provider>
  );
};

export default Home;
