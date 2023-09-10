import React from "react";
import animation from "../../../public/notti.json";
import Lottie from "lottie-react";
const AboutUs = () => {
  return (
    <div className="container flex ">
      <div className="ml-16">
        <Lottie className="" animationData={animation} />
      </div>
      <div className="mx-auto mt-32">
        <h1 className="text-4xl ml-2 mb-5">About us</h1>
        <div className="w-96">
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              Company Name ------
            </div>
            <div className="collapse-content italic">
              <p>Follow Media</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Who We Are ---------
            </div>
            <div className="collapse-content italic">
              <p>
                At Fellow Media, we are a describe your entity type, e.g.,
                company, nonprofit organization, creative studio, individual
                entrepreneur dedicated to briefly explain the primary mission or
                purpose of your entity, e.g., creating innovative solutions,
                promoting sustainability, inspiring creativity.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Our mission ----------
            </div>
            <div className="collapse-content italic">
              <p>
                Community:Our future plan We prioritize the well-being of our
                users and the communities they create on our platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
