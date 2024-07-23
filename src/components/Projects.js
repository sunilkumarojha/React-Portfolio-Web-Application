import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
    return (
        <section id="projects" className="bg-gray-800 text-white p-10">
          <div className="container mx-auto">
            <div className="flex flex-col items-center">
              <CodeIcon className="h-10 w-10 mb-4 text-green-500" />
              <h2 className="text-3xl font-bold mb-4">Projects</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="bg-gray-700 p-6 rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded"
                  />
                  <h3 className="text-xl font-bold mt-4">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                  <div className="mt-4">
                    <a
                      href={project.link}
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );

}
