import React from "react";
import './Banar.css'

const Banar = () => {
  return (
    <div
      className="hero height  relative inset-0 bg-black  opacity-100 element {
        position: absolute;
        clip: rect(0px, 100px, 100px, 0px);
      }"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/2740956/pexels-photo-2740956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          
        }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="w-1/2">
          <h1 className="mb-5 text-4xl font-bold italic text-red-400">Follow Media</h1>
          <p className="mb-5 w-full font-bold ">
            Follow  media refers to a set of online platforms and websites
            designed to facilitate communication, interaction, These
            platforms enable users to create personal profiles, connect with
            others, and share various forms of digital content, including text,
            images, videos, and links.
          </p>
          <button className="btn btn-primary">Get starting</button>
        </div>
      </div>
    </div>
  );
};

export default Banar;
