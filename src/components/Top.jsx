import React, { useContext } from "react";
import { FaArrowUp } from "react-icons/fa";
import { ThemeContext } from "../Theme";
const Top = () => {
    const {theme} = useContext(ThemeContext);
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={`hidden lg:flex fixed bottom-10 right-0 p-2 border ${theme}`} onClick={handleClick}>
      <FaArrowUp className="cursor-pointer" size={25} />
    </div>
  );
};

export default Top;