import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleSlide = ({ blog }) => {
  return (
    <div
      className="relative h-[470px] w-full bg-cover bg-center"
      style={{
        backgroundImage: `url('${
          blog.image ||
          "https://i.ibb.co.com/60dRhsG/Mountain-Serenity-Trek.jpg"
        }')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white flex flex-col justify-center items-center h-full">
        <h1 className="text-3xl font-semibold">{blog.adventureTitle}</h1>
        <p className="mt-2 text-xl">This is a best Winter Adventure</p>
        <Link to={`/blog-details/${blog.id}`} className="mt-4 px-6 py-2 bg-orange-400 hover:bg-orange-500 text-white rounded">
          Discover More
        </Link>
      </div>
    </div>
  );
};

SingleSlide.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default SingleSlide;
