import React from "react";
import heroImg from "../assets/heroImage.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-scroll";
import { IoIosArrowDown } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Home = () => {
  const links = [
    {
      id: 1,
      child: <BsFillPersonLinesFill size={20} />,
      href: "/Ranjith_M_Resume.pdf",
      download: true,
    },
    {
      id: 2,
      child: <HiOutlineMail size={20} />,
      href: "mailto:ranjith.mathiyazhagan@gmail.com",
    },
    {
      id: 3,
      child: <FaGithub size={20} />,
      href: "https://github.com/ranjith-m7",
    },
    {
      id: 4,
      child: <FaLinkedin size={20} />,
      href: "https://www.linkedin.com/in/ranjith-mathiyazhagan/",
    },
  ];
  return (
    <div
      name="home"
      className="w-full min-h-screen flex items-center justify-center pt-20 md:pt-0"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center md:flex-row px-4 gap-8 capitalize">
        <div className="flex flex-col justify-center h-full ">
          <h2 className="text-4xl sm:text-7xl font-bold ">
            <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
              Hello, I'm Ranjith,
            </span>
            <br /> <span className="font-overpass">a Front End Developer</span>
          </h2>
          <p className="text-gray-500 py-4 md:max-w-md text-center md:text-left">
            I love creating web applications that are both functional and
            user-friendly. Let's connect! Feel free to reach out to discuss your
            project ideas or just say hi. You can find my contact information
            and portfolio links below.
          </p>
          <div className="flex justify-center md:justify-start my-2 gap-6 lg:hidden">
            {links.map(({ id, child, href, download }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                className="text-white w-fit px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-400 rounded-md flex items-center justify-center"
                download={download}
              >
                {child}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex">
            <Link
              to="portfolio"
              smooth
              className="group text-white w-fit px-6 py-3 flex items-center bg-gradient-to-r from-purple-500 to-blue-400 cursor-pointer rounded-md"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <FaArrowRight size={17} className="ml-2" />
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
      <div className="animate-bounce hidden lg:flex absolute bottom-10">
        <IoIosArrowDown size={25} />
      </div>
    </div>
  );
};

export default Home;
