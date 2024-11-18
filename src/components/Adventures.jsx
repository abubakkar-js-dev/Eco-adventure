import hikingIcon from "../assets/icons/hiking-trails.png";
import bikeIcon from "../assets/icons/bike-routes.png";
import fishingIcon from "../assets/icons/fishing-location.png";
import riverIcons from "../assets/icons/lake-river.png";
import AdventureCard from "./AdventureCard";

const Adventures = () => {
  const adventureData = [
    { title: "Hiking Trails", img: hikingIcon },
    { title: "Hiking Trails", img: bikeIcon },
    { title: "Hiking Trails", img: fishingIcon },
    { title: "Hiking Trails", img: riverIcons },
  ];

  return (
    <section className="mb-12 md:mb-16 lg:mb-[100px]">
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-black font-bold text-center mb-5 md:mb-12">
        Adventures
      </h2>
      <div className="container grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
        {adventureData.map((data, inx) => (
          <AdventureCard
            key={inx}
            icon={data.img}
            title={data.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Adventures;
