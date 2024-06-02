import React, { useState } from 'react';

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div id='contact' className="reveal container px-5 py-10 mx-auto flex flex-col justify-around items-center p-5 m-5">
      <h2 className="text-white sm:text-4xl text-3xl mb-8 font-bold">
        Send a message
      </h2>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        action="/thank-u"
        className="lg:w-full md:w-2/3 w-full flex flex-col md:ml-auto md:py-8 mt-8 md:mt-0 items-center justify-around"
      >
        <input type="hidden" name="form-name" value="contact" />
        {/* Rest of your form inputs */}
        <button
          type="submit"
          className="text-black bg-white border-0 py-2 px-3 focus:outline-none 
             rounded text-[15px]  font-font2 mt-3"
        >
          Send message
        </button>
      </form>
      <p className='text-text1/35 text-[10px] mt-10'>All Rights Reserved @2024 RAJESH ANDE</p>
    </div>
  );
};
