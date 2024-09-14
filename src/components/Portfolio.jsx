import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

import { FaExternalLinkAlt } from "react-icons/fa";
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
    <div name="portfolio" className=" w-full pt-20">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="mb-12">
          <h3>
            Portfolio
          </h3>
          <p className="text-center text-2xl">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 sm:px-0 ">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href="http://www.google.com" className="px-6 py-3 m-4 hover:scale-105 duration-200 w-1/2 flex justify-around items-center cursor-pointer">
                  Demo <FaExternalLinkAlt />
                </a>
                <a href="http://www.google.com" className="px-6 py-3 m-4 hover:scale-105 duration-200 w-1/2 flex justify-around items-center cursor-pointer">
                  Code <FaGithub />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
