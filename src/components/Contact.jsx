import React, { useState } from "react";
import { useSendContactFormMutation } from "../redux/contactSlice";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const [sendContactForm, { isLoading, isSuccess, isError, error }] =
    useSendContactFormMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const contactData = { username: name, email, message };
      const response = await sendContactForm(contactData).unwrap();

      setStatus("Message sent successfully!");
      console.log("Message sent:", response);
    } catch (error) {
      console.error("Failed to send message:", error);
      console.error("Failed to send message:", error);
      setStatus(
        `Failed to send message: ${error?.data?.message || error.message}`
      );
    }
  };

  return (
    <div
      id="contact"
      className="reveal container px-5 py-10 m-auto flex flex-col justify-around items-center p-5  "
    >
      <h1 className="text-3xl md:text-5xl text-text1 flex justify-center items-center ">
        <span className="bg-custom-gradient border-2 border-white rounded-lg flex justify-center items-center text-white shadow-lg p-2">
          <span>Se</span>
        </span>
        nd me a message
      </h1>
      <form
        onSubmit={handleSubmit}
        className="lg:w-full text-font2 md:w-2/3 w-full flex flex-col md:ml-auto md:py-8 mt-8 md:mt-0 items-center justify-around"
      >
        <input type="hidden" name="form-name" value="Contact" />
        <div className="relative mb-4">
          <label
            htmlFor="name"
            className="leading-7  text-2xl text-text1 lowercase"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full font-font2 bg-gray-800 rounded border-2 border-white focus:border-white/40 focus:ring-2 focus:ring-white/50 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="relative mb-4 ">
          <label
            htmlFor="email"
            className="leading-7 text-2xl text-text1 lowercase"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full font-font2 bg-gray-800 rounded  border-2 border-white focus:border-white/40 focus:ring-2 focus:ring-white/50 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="relative mb-4">
          <label
            htmlFor="message"
            className="leading-7 text-2xl text-text1 lowercase"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full font-font2 bg-white/30 rounded  border-2 border-white focus:border-white/40 focus:ring-2 focus:ring-white/50 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-custom-gradient  py-2 px-3 focus:outline-none rounded text-[15px] font-font2 font-semibold mt-3 transition-transform transform hover:scale-105"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send message"}
        </button>
        {status && <p className="text-white mt-4">{status}</p>}
      </form>
      {isError && (
        <p className="text-red-500 mt-4">
          Failed to send message: {error?.data?.message || error.message}
        </p>
      )}
      <p className="text-text1/35 text-[15px] mt-10 font-font2">
        contact me - rajeshande2004@gmail.com
      </p>
      <p className="text-text1/35 text-[10px] mt-4 font-font2">
        All Rights Reserved @2024 RAJESH ANDE
      </p>
    </div>
  );
};
