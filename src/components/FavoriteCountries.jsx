import { useContext } from "react";
import { BlogsContext } from "../pages/Home";
import FavCountryCard from "./FavCountryCard";

const FavoriteCountries = () => {
  const allBlogs = useContext(BlogsContext) || [];
  const favCountriesExp = allBlogs.slice(6);

  return (
    <section className="mb-12 md:mb-16 lg:mb-[100px]">
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-black font-bold text-center mb-5 md:mb-12">
        The Country I Like
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
            {favCountriesExp.map(blog => <FavCountryCard key={blog.id} blog={blog} />)}
      </div>
    </section>
  );
};

export default FavoriteCountries;
