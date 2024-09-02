import React from "react";
import heroImg from "../assets/heroImage.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full min-h-screen bg-black pt-10 md:pt-0"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center min-h-screen md:flex-row px-4 gap-8 md:gap-10">
        <div className="flex flex-col justify-center h-full font-acumin">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
              Hello, I'm Ranjith,
            </span>
            <br /> a Front End Developer
          </h2>
          <p className="text-gray-500 py-4 md:max-w-md text-center md:text-left">
            I love creating web applications that are both functional and user-friendly. Let's connect! Feel free to reach out to discuss your project ideas or just say hi. You can find my contact information and portfolio links below.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center bg-gradient-to-r from-purple-500 to-blue-400 cursor-pointer rounded-md"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <FaArrowRight size={17} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={heroImg}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full max-w-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
