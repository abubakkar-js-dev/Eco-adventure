import Banner from "../components/Banner";
import Blogs from "../components/Blogs";
import { createContext, useEffect, useState } from "react";
import FavoriteCountries from "../components/FavoriteCountries";
import Adventures from "../components/Adventures";

// eslint-disable-next-line react-refresh/only-export-components
export const BlogsContext = createContext([]);

const Home = () => {
  const [allBlogs,setAllBlogs] = useState([]);
  useEffect(()=>{
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => setAllBlogs(data));
  },[]);
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
          {/* Adventures */}
          <Adventures />
        </main>
      </div>
    </BlogsContext.Provider>
  );
};

export default Home;
