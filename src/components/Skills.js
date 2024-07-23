import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
    return (
        <section id="skills" className="bg-gray-700 text-white p-10">
          <div className="container mx-auto flex flex-col items-center">
            <ChipIcon className="h-10 w-10 mb-4 text-green-500" />
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <div key={skill} className="bg-gray-800 p-6 rounded-lg flex items-center">
                <BadgeCheckIcon className="h-6 w-6 mr-4 text-green-500" />
                <span className="text-lg font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </section>
      );
 
}
