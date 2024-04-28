import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="h-40 flex bg-slate-50 justify-between items-center ">
      <div className="ml-20 text-gray-400 font-bold">
        2024 nithin raj .All rights reserved.
      </div>
      <div className="flex gap-10 mr-10">
        <div className="text-3xl">
          <a >
            <FaInstagram />
          </a>
        </div>
        <div className="text-3xl">
          <FaGithubSquare />
        </div>
        <div className="text-3xl">
          <FaSquareXTwitter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
