import React from "react";

function Contact() {
  return (
    <div className="flex flex-col items-center mb-10 mx-auto p-4 md:p-8">
      <h2 className="text-2xl font-bold text-center mb-8">Contact</h2>
      <div className="w-full md:w-7/12">
        <form
          action="https://getform.io/f/aolmgwdb"
          method="POST"
          className="flex flex-col space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="self-center px-8 py-3 text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-green-500 drop-shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Contact Me
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;