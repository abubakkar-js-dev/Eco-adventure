import { useLoaderData, useParams } from "react-router-dom";
import unavailableIcon from '../assets/icons/unavailable.png'
import { useRef } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

const BlogDetails = () => {
  const { id } = useParams();
  const allBlogs = useLoaderData();
  const blog = allBlogs.find((blog) => blog.id === parseInt(id));
  const modalRef = useRef(null);

  useDocumentTitle(blog.adventureTitle);

  const {
    adventureTitle,
    image,
    categoryName,
    shortDescription,
    adventureCost,
    bookingAvailability,
    location,
    duration,
    adventureLevel,
    includedItems,
    ecoFriendlyFeatures,
    maxGroupSize,
    specialInstructions,
  } = blog;

  const handleTalkWithBtn = () =>{
    const date = new Date();
    const currentHour = date.getHours();
    console.log(currentHour);

    if(currentHour >= 10 && currentHour < 20){
        window.open("https://meet.google.com","_blank");
    }else{
        if(modalRef.current){
            modalRef.current.showModal();
        }
    }
  }

  return (
    <div className="container mx-auto mb-12 md:mb-16 lg:mb-[100px]">
      <div className="flex flex-col lg:flex-row bg-white shadow-md rounded-lg overflow-hidden p-4 md:p-6 lg:p-8">
        {/* Left Side: Image */}
        <div className="lg:w-1/2">
          <img
            src={image}
            alt={adventureTitle}
            className="h-full w-full object-cover rounded-xl"
          />
        </div>

        {/* Right Side: Information */}
        <div className="lg:w-1/2 p-6 lg:py-0 flex flex-col gap-4">
          {/* Adventure Title and Category */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              {adventureTitle}
            </h1>
            <p className="text-sm text-gray-500 pl-2 pt-1">({categoryName})</p>
          </div>

          {/* Short Description */}
          <p className="text-gray-600">{shortDescription}</p>

          {/* Key Information */}
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="text-gray-800">
              <span className="font-semibold">Cost:</span> ${adventureCost}
            </div>
            <div className="text-gray-800">
              <span className="font-semibold">Location:</span> {location}
            </div>
            <div className="text-gray-800">
              <span className="font-semibold">Duration:</span> {duration}
            </div>
            <div className="text-gray-800">
              <span className="font-semibold">Level:</span> {adventureLevel}
            </div>
            <div className="text-gray-800">
              <span className="font-semibold">Max Group Size:</span>{" "}
              {maxGroupSize}
            </div>
            <div className="flex gap-2 font-semibold">
              <span className="font-semibold">Availability:</span>
              <p
                className={`${
                  bookingAvailability ? "text-green-600" : "text-red-600"
                }`}
              >
                {bookingAvailability ? "Available for Booking" : "Fully Booked"}
              </p>
            </div>
          </div>

          {/* Included Items */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mt-6">
              Included Items
            </h2>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              {includedItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Eco-Friendly Features */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mt-6">
              Eco-Friendly Features
            </h2>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              {ecoFriendlyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Special Instructions */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mt-6">
              Special Instructions
            </h2>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              {specialInstructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <button onClick={handleTalkWithBtn} className="mt-6 py-2 px-4  bg-cyan-400 text-white rounded-md hover:bg-cyan-500 transition">
            Talk with Expert
          </button>

          {/* Modal will open by click talk with expert btn */}

        <dialog ref={modalRef} id="consultation_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box flex flex-col justify-center items-center gap-y-3">
            <img className="w-12 h-12 lg:w-14 lg:h-14" src={unavailableIcon} alt="Unavailabe icon" />
            <h3 className="font-bold text-lg md:text-xl">Unavailable Now!</h3>
            <p className="text-base text-gray-600">Consultation Time: 10:00 AM - 8:00 PM</p>
            <div className="modal-action">
            <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn px-8 py-2 bg-base-300">Close</button>
            </form>
            </div>
        </div>
        </dialog>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
