import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";

const BlogCard = ({ blog }) => {
  const { adventureTitle, image, ecoFriendlyFeatures } = blog;

  return (
    <div className="w-full rounded overflow-hidden shadow-lg bg-white">
      {/* Blog Image */}
      <div className="relative h-48 w-full">
        <img 
          src={image || 'https://via.placeholder.com/400x200'} 
          alt={adventureTitle} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Blog Content */}
      <div className="p-4">
        {/* Adventure Title */}
        <h2 className="text-xl font-semibold mb-2 text-gray-800">
          {adventureTitle}
        </h2>

        {/* Eco-friendly Features */}
        <ul className="list-disc list-inside text-gray-600">
          {ecoFriendlyFeatures && ecoFriendlyFeatures.length > 0 ? (
            ecoFriendlyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))
          ) : (
            <p className="text-sm italic text-gray-500">No eco-friendly features listed.</p>
          )}
        </ul>
              {/* Button */}
              <button className="mt-4 flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Explore More <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
    blog: PropTypes.object.isRequired,
}

export default BlogCard;

