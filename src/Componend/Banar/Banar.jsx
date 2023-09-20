import React from "react";
import "./Banar.css";

const Banar = () => {
  return (
    <div
      className="height "
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        padding: "10px",
        backgroundImage: "url(https://i.ibb.co/GHzDsdn/wave-10.png)",
      }}
    >
      <div className="hero-content mt-14 text-center text-neutral-content">
        <div className="w-1/2">
          <h1 className="mb-5 text-4xl font-bold italic text-slate-200">
            Follow Media
          </h1>
          <p className="mb-5 w-full font-bold italic text-white">
            Follow media refers to a set of online platforms and websites
            designed to facilitate communication, interaction, These platforms
            enable users to create personal profiles, connect with others, and
            share various forms of digital content, including text, images,
            videos, and links.
          </p>
          <button className="btn btn-primary">Start Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banar;
