import BlogCard from "./BlogCard";
import { useContext } from "react";
import { BlogsContext } from "../pages/Home";

const Blogs = () => {
    const allBlogs = useContext(BlogsContext);
    allBlogs.map(blog => console.log(blog.id))
    return (
        <div className="mb-12 md:mb-16 lg:mb-[100px]">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-black font-bold text-center mb-5 md:mb-12">Adventures Beyond the Snow</h2>
            <div  className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {allBlogs.map(blog => <BlogCard key={blog.id} blog={blog} />)}
            </div>
        </div>
    );
};

export default Blogs;