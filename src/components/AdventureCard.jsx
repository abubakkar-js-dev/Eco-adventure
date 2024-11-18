import PropTypes from "prop-types";

const AdventureCard = ({icon,title}) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 border rounded hover:bg-cyan-50 cursor-pointer transition">
      <img className="h-10 mb-5" src={icon} alt="adventure icon" />
      <h3 className="text-lg lg:text-xl font-semibold">{title}</h3>
    </div>
  );
};

AdventureCard.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,

}

export default AdventureCard;
