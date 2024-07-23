import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-4 fixed w-full z-10">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-lg font-bold">My Portfolio</div>
            <div className="flex items-center">
              <a href="#about" className="text-gray-300 mx-2 flex items-center">
                About
                <ArrowRightIcon className="h-5 w-5 ml-1" />
              </a>
              <a href="#projects" className="text-gray-300 mx-2 flex items-center">
                Projects
                <ArrowRightIcon className="h-5 w-5 ml-1" />
              </a>
              <a href="#skills" className="text-gray-300 mx-2 flex items-center">
                Skills
                <ArrowRightIcon className="h-5 w-5 ml-1" />
              </a>
              <a href="#contact" className="text-gray-300 mx-2 flex items-center">
                Contact
                <ArrowRightIcon className="h-5 w-5 ml-1" />
              </a>
            </div>
          </div>
        </nav>
      );

}
