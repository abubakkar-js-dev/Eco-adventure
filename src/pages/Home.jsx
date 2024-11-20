import Banner from "../components/Banner";
import Blogs from "../components/Blogs";
import { createContext, useContext, useEffect, useState } from "react";
import FavoriteCountries from "../components/FavoriteCountries";
import Adventures from "../components/Adventures";
import 'animate.css';
import {AuthContext} from '../provider/AuthProvider'
import Loading from "../components/Loading";
import useDocumentTitle from "../hooks/useDocumentTitle";

// eslint-disable-next-line react-refresh/only-export-components
export const BlogsContext = createContext([]);

const Home = () => {
  useDocumentTitle();
  const [allBlogs,setAllBlogs] = useState([]);
  const {loading,setLoading} = useContext(AuthContext);
  if(allBlogs.length < 0){
    setLoading(true);
  }
  useEffect(()=>{
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => setAllBlogs(data));
  },[]);

  if(loading){
    return <Loading />
  }


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
