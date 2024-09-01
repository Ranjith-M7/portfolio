import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

import { IoIosLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
    },
    {
      id: 2,
      src: installNode,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactParallax,
    },
    {
      id: 5,
      src: reactSmooth,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];
  return (
    <div name="portfolio" className="bg-black text-white w-full md:h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 inline border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href="http://www.google.com" className="px-6 py-3 m-4 hover:scale-105 duration-200 w-1/2 flex justify-around items-center cursor-pointer">
                  Demo <IoIosLink />
                </a>
                <a href="http://www.google.com" className="px-6 py-3 m-4 hover:scale-105 duration-200 w-1/2 flex justify-around items-center cursor-pointer">
                  Code <FaGithub />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
