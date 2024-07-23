import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials() {
    return (
        <section id="testimonials" className="bg-gray-800 text-white p-10">
          <div className="container mx-auto flex flex-col items-center">
            <UsersIcon className="h-10 w-10 mb-4 text-green-500" />
            <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-700 p-6 rounded-lg">
                <TerminalIcon className="h-6 w-6 mb-4 text-green-500" />
                <p className="text-lg font-medium mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                    <p className="text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      );

}
