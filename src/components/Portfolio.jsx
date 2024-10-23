import React from "react";

import artspot from "../assets/portfolio/artspot.png";
import datadna from "../assets/portfolio/datadna.png";
import dentacare from "../assets/portfolio/dentacare.png";
import graders from "../assets/portfolio/graders.png";
import marvelmart from "../assets/portfolio/marvelmart.png";
import miniProjects from "../assets/portfolio/mini-reactjs-projects.png";
import flowershop from "../assets/portfolio/theflowergarden.png";
import weather from "../assets/portfolio/zilla-weather-app.png";
import netflix from "../assets/portfolio/netflix-clone.png";

import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: netflix,
      href: "https://nextflixhub.netlify.app",
      github: "https://github.com/Ranjith-M7/Netflix-Clone",
    },
    {
      id: 2,
      src: marvelmart,
      href: "https://marvelmart.netlify.app/",
      github: "https://github.com/Ranjith-M7/MarvelMart-Ecommerce",
    },
    {
      id: 3,
      src: artspot,
      href: "https://artspot.netlify.app/",
      github: "https://github.com/Ranjith-M7/ArtSpot-Creative-Hub",
    },
    {
      id: 4,
      src: flowershop,
      href: "https://theflowergarden.netlify.app/",
      github: "https://github.com/Ranjith-M7/flower-shop",
    },

    {
      id: 5,
      src: miniProjects,
      href: "https://mini-reactjs-projects.netlify.app/",
      github: "https://github.com/Ranjith-M7/react-projects-showcase",
    },
    {
      id: 6,
      src: weather,
      href: "https://zilla-weather-app.netlify.app/",
      github: "https://github.com/Ranjith-M7/Weather-App",
    },

    {
      id: 7,
      src: dentacare,
      href: "https://dentacare2-3c703.web.app/",
      github: "https://github.com/Ranjith-M7/dentacare",
    },

    {
      id: 8,
      src: datadna,
      href: "https://datadna-4eb54.web.app/",
      github: "https://github.com/Ranjith-M7/datadna",
    },
    {
      id: 9,
      src: graders,
      href: "https://graders-51b05.web.app/",
      github: "https://github.com/Ranjith-M7/graders",
    },
  ];
  return (
    <div name="portfolio" className=" w-full pt-20">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="mb-12">
          <h3>Portfolio</h3>
          <p className="text-center text-2xl">
            Check out some of my work right here
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 sm:px-0 ">
          {portfolios.map(({ id, src, href, github }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 flex flex-col rounded-md"
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 bg-center bg-cover flex-1"
              />
              <div className="flex items-center justify-center text-sm bg-[#fafafa] rounded-md">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={href}
                  className="px-6 py-3 m-4 hover:scale-105 duration-200 w-1/2 flex justify-around items-center cursor-pointer"
                >
                  Demo <FaExternalLinkAlt className="ml-2" />
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={github}
                  className="px-6 py-3 m-4 hover:scale-105 duration-200 w-1/2 flex justify-around items-center cursor-pointer"
                >
                  Code <FaGithub className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Portfolio;
