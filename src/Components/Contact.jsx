import React from 'react';


const Contact = () => {
  return (
    <div className="flex flex-col items-center  p-4 sm:p-6 md:p-8">
      <h1 className="text-4xl mt-3 mb-5 text-center bg-gradient-to-r from-blue-800 via-blue-400 to-blue-300 text-transparent bg-clip-text font-extrabold">
        Feel Free To Contact Me
      </h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.6993954743207!2d86.60129877519542!3d26.10872967713563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ee555bff902981%3A0xe1f39a0b3e6ca31c!2sSupaul%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1716971838754!5m2!1sen!2sin"
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <form action='https://formspree.io/f/xjvndnyr' method='POST' className="flex text-black targe='_blank' flex-col w-full max-w-lg mt-8 p-6 bg-white bg-opacity-30 backdrop-blur-md rounded-xl shadow-lg">
        <input
          type="text"
          name="username"
          placeholder="Username"
          autoComplete="off"
          required
          className="p-3 mb-4 border text-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          name="Email"
          placeholder="Email"
          autoComplete="off"
          required
          className="p-3 mb-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea 
          name="message"
          cols={30}
          rows={6}
          autoComplete="off"
          
          required
          placeholder="Message"
          className="p-3 resize-none textarea mb-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
        <input
          type="submit"
          value="Send"
          className="p-3  bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Contact;
