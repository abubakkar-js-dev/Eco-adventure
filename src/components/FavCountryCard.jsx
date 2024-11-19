import PropTypes from "prop-types";

const FavCountryCard = ({blog}) => {
  const countryName = blog.location.split(',')[1] || blog.location.split(',')[0];
  
    return (
      <div className="group relative w-full h-80 overflow-hidden cursor-pointer flex flex-col items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{
            backgroundImage: `url(${blog.image})`, 
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 p-4 flex flex-col justify-center items-center">
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">{countryName}</h2>
          <p className="text-white text-lg md:text-xl mt-2">
            {blog.includedItems.length} Reasons Why You Should Visit {countryName} Now
          </p>
          <span className="text-white text-xs opacity-80 mt-5 inline-block">
            1 DESTINATIONS
          </span>
        </div>

        <div className="absolute inset-0 bg-black/30"></div>
      </div>
    );
};

FavCountryCard.propTypes = {
  blog: PropTypes.object.isRequired,
}

export default FavCountryCard;