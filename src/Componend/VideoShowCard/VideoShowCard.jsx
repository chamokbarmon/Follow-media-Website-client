import axios from "axios";
import React, { useState } from "react";
import check from '../../../public/img/check.png'
import world from '../../../public/img/world-wide-web.png'
import more from '../../../public/img/more.png';
import mark from '../../../public/img/circle-xmark.png';
import './VideoShow.css'

const VideoShowCard = () => {
  const [data, setData] = useState();
  console.log(data?.data);

  axios
    .get("/public/VideoData/VideoData.json")
    .then((data) => setData(data))
    .catch((error) => console.log(error));

  return (
    <div>
      {data?.data.map((dataflow) => (
        <div className="max-w-xl mx-auto my-4 rounded-lg overflow-hidden shadow-lg bg-slate-300">
         <div className="flex justify-between p-5">
        <div className="flex">
        <div className="avatar online">
            <div className="w-10  rounded-full">
              <img src={dataflow.picture} />
            </div>
          </div>
           <div >
              <div className="flex">
              <h4 className="ml-3 italic font-bold">{dataflow.name}</h4>
              <img className="w-3 h-4 mt-1 ml-1" src={check} alt="" /> <br />
              </div>
           </div>
          <div className="flex  ">
          <p className="ml-2">|| 10 September at 8:15</p>
          <img className="h-4 mt-1 ml-2 " src={world} alt="" />
         
          </div>
        </div>

          <div className="flex">
           <button><img className="w-6 mb-1 me-3" src={more} alt="" /></button>
            <button><img className="w-5 h-7 " src={mark} alt="" /></button>
          </div>
         </div>
          <div className="relative overflow-hidden aspect-ratio-16/9 ">
            <iframe
              className="w-full height"
              height="480"
              src={dataflow.video}
              title="This BMW M4 G82 Pushes the Limits / @TheProVideo"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>

          {/* Card Content */}
          <div className="px-4 py-2 bg-white">
            <h2 className="text-xl font-semibold mb-2">{dataflow.username}</h2>
            <p className="text-gray-600">{dataflow.content}</p>
            <div className="flex justify-between items-center mt-4">
              <div className="flex space-x-4">
                <button className="flex items-center text-gray-600 hover:text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12a8 8 0 11-16 0 8 8 0 0116 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="ml-1">Like</span>
                </button>
                <button className="flex items-center text-gray-600 hover:text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span className="ml-1">Dislike</span>
                </button>
              </div>
              <span className="text-gray-500">2.5K Views</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoShowCard;
