import React from "react";
import HeaderImg from "../../Assests/Images/HeaderImg.jpg";
const MainHeader = () => {
  return (
    <div className="bg-[#FAFAFC] px-4 md:px-10 flex flex-col-reverse md:flex-col-reverse lg:flex-row justify-center md:justify-between md:items-center w-100 text-center md:text-left max-w-[1440px] mx-auto h-[90vh]">
      <div className="w-50 md:ml-5">
        <h1 className="text-2xl md:text-4xl text-[#799F23] font-roboto mb-5 font-bold ">
          WELCOME TO FOOD STORE
        </h1>
        <p className="text-normal md:text-[20px] text-gray-600 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          laboriosam aperiam praesentium ex voluptatem iusto error eius libero
          deleniti? Aut inventore magni ut labore aliquam architecto.{" "}
        </p>
        <button className="bg-[#799F23] text-white py-2 px-6 rounded hover:bg-green-700 duration-300 ease-in-out mt-4 text-lg font-semibold font-sans">
          Order Foods
        </button>
      </div>
      <div className="w-50">
        <img className="" src={HeaderImg} alt="" />
      </div>
    </div>
  );
};

export default MainHeader;
