import React from "react";

const SocialService = () => {
  return (
    <div
      className="container-full p-10"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      }}
    >
      <div className="text-center text-4xl  underline">Services</div>

      <div className="w-full flex justify-center gap-10">
        <div>
          <img
            className="w-[400px] h-[400px] rounded-full  border-cyan-600 border-8"
            src="https://images.pexels.com/photos/783243/pexels-photo-783243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div className="w-1/2 mt-28 ">
          <h3 className="text-3xl ">Creators</h3>
          <hr class="border-t-2 border-black w-full my-4" />
          <p className=" font-bold text-justify ">
            Creators are individuals or entities who produce and share content,
            often in various forms of media, such as text, images, videos,
            music, or other creative works. These individuals or groups are
            often associated with platforms like social media, video-sharing
            sites, blogs, and other online outlets. Here's a description of
            creators and their role in the modern digital.
          </p>
          <button className="btn btn-primary mt-5">Create-Now</button>
        </div>
      </div>

      <div className="w-full flex justify-center items-center gap-10">
        <div className="w-1/2 mt-28 ">
          <h3 className="text-3xl ">Business</h3>
          <hr class="border-t-2 border-black w-96 my-4" />
          <p className="font-bold text-justify ">
            Business is a broad term that encompasses various activities related
            to the production, distribution, and exchange of goods and services
            for profit. It involves the creation and management of economic
            enterprises that aim to meet the needs and desires of consumers
            while generating revenue for their owners or stakeholders. Here are
            some key aspects and concepts related to business
          </p>
          <button className="btn btn-primary mt-5">Business Start</button>
        </div>

        <div>
          <div>
            <img
              className="w-[400px] h-[400px] rounded-full border-cyan-600 border-8"
              src="https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1://images.pexels.com/photos/783243/pexels-photo-783243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
        </div>
      </div>
    </div>

    //
  );
};

export default SocialService;
