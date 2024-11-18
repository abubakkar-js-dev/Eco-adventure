import { useLoaderData } from "react-router-dom";

const Blogs = () => {
    const allBlogs = useLoaderData();
    allBlogs.map(blog => console.log(blog.id))
    return (
        <div className="container">
            <h2>Adventures Beyond the Snow</h2>
        </div>
    );
};

export default Blogs;