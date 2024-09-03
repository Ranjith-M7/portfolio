import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full py-8 "
    >
      <div className="max-w-screen-lg p-4 flex flex-col justify-center mx-auto h-full w-full">
        <div className="mb-12">
          <h3 className="text-4xl font-bold mb-4">
            Contact
          </h3>
          <p>Submit the form below to get in touch with me. I’d love to hear from you!</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/bwngmqea"
            method="POST"
            className="flex flex-col w-full sm:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows={10}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              placeholder="Enter your message"
            ></textarea>
            <button className="text-white bg-gradient-to-r from-purple-500 to-blue-400 px-6 py-3 rounded-md mx-auto mt-4 hover:scale-105 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
