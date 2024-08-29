import React from "react";
import heroImg from "../assets/heroImage.png";
import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row px-4 ">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have been Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Ipsa dolorum error explicabo porro, atque tempora suscipit
            fuga asperiores quam exercitationem!
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer rounded-md">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <FaArrowRight size={17} className="ml-1" />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={heroImg}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
