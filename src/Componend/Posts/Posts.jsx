import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loveCount, setLoveCount] = useState(0);
  const [islove, setIslove] = useState(false);

  const loveButtonHandel = () => {
    if (!islove) {
      setLoveCount(loveCount + 1);
      setIslove(true);
    } else {
      setLoveCount(loveCount - 1);
      setIslove(false);
    }
  };

  useEffect(() => {
    fetch("https://follow-server-dd657x478-chamokbarmon.vercel.app/mediaShow")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setPosts(data);
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
      })
      .catch((e) => e.message);
  }, []);

  return (
    <div
      style={{
        padding: "10px",
        backgroundImage:
          "URL(https://i.ibb.co/ZSH6FWz/layered-waves-haikei-6.png)",
      }}
    >
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-16  p-10">
        <div className=" max-w-lg mx-auto my-4 p-4 bg-slate-800 text-white shadow-md rounded-lg">
          <div className="flex items-center mb-4">
            <img
              src="https://i.ibb.co/R7Pk2gP/4086679.png"
              alt="User Profile Picture"
              className="w-10 h-10 rounded-full mr-2"
            />
            <div>
              <p className="font-semibold">Chamok Barmon</p>
              <p className="text-white text-sm ">2 hours ago</p>
            </div>
          </div>

          <p className="text-white ">Technology is the application of knowledge for achieving practical goals in a reproducible way. The word technology can also mean the products resulting from such efforts, including both tangible tools such as utensils or machines, and intangible ones such as software.</p>

          <img
            src='https://i.ibb.co/YRJzpfV/New-Technology-Inventions-AI.jpg'
            alt="Post Image"
            className="my-4 w-96 rounded-lg h-72"
          />

          <div className="flex justify-between border text-white border-gray-300 pt-2">
            <div className="flex">
              <button className="flex items-center text-white hover:text-blue-700 mr-2">
                <div className="flex">
                  <button onClick={loveButtonHandel}>
                    <img
                      className="h-10 w-10 rounded"
                      color="islove?red:black"
                      src="https://i.ibb.co/T2VVmRx/touch.png"
                      alt=""
                    />
                  </button>
                  <p>
                    {loveCount} {loveCount === 1 ? "Love" : "love"}
                  </p>
                </div>
              </button>
              <button className="flex items-center text-white hover:text-gray-700 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 15l7-7 7 7"
                  ></path>
                </svg>
                Comment
              </button>
              <button className="flex items-center text-white hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
                Share
              </button>
            </div>
            <div>
              <button className="flex items-center text-gray-500 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className=" max-w-lg mx-auto my-4 p-4 bg-slate-800 text-white shadow-md rounded-lg">
          <div className="flex items-center mb-4">
            <img
              src="https://i.ibb.co/R7Pk2gP/4086679.png"
              alt="User Profile Picture"
              className="w-10 h-10 rounded-full mr-2"
            />
            <div>
              <p className="font-semibold">Chamok Barmon</p>
              <p className="text-white text-sm ">2 hours ago</p>
            </div>
          </div>

          <p className="text-white ">Artificial intelligence, the Internet of Things, augmented and virtual reality, blockchain, 5G networks, quantum computing, biotechnology, robots, the cloud, and cybersecurity are just some of the most significant technological world in the next years</p>

          <img
            src='https://i.ibb.co/vctzvc2/techandsuccess.jpg'
            alt="Post Image"
            className="my-4 w-96  rounded-lg h-72"
          />

          <div className="flex justify-between border text-white border-gray-300 pt-2">
            <div className="flex">
              <button className="flex items-center text-white hover:text-blue-700 mr-2">
                <div className="flex">
                  <button onClick={loveButtonHandel}>
                    <img
                      className="h-10 w-10 rounded"
                      color="islove?red:black"
                      src="https://i.ibb.co/T2VVmRx/touch.png"
                      alt=""
                    />
                  </button>
                  <p>
                    {loveCount} {loveCount === 1 ? "Love" : "love"}
                  </p>
                </div>
              </button>
              <button className="flex items-center text-white hover:text-gray-700 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 15l7-7 7 7"
                  ></path>
                </svg>
                Comment
              </button>
              <button className="flex items-center text-white hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
                Share
              </button>
            </div>
            <div>
              <button className="flex items-center text-gray-500 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className=" max-w-lg mx-auto my-4 p-4 bg-slate-800 text-white shadow-md rounded-lg">
          <div className="flex items-center mb-4">
            <img
              src="https://i.ibb.co/R7Pk2gP/4086679.png"
              alt="User Profile Picture"
              className="w-10 h-10 rounded-full mr-2"
            />
            <div>
              <p className="font-semibold">Chamok Barmon</p>
              <p className="text-white text-sm ">2 hours ago</p>
            </div>
          </div>

          <p className="text-white ">Computing is any goal-oriented activity requiring, benefiting from, or creating computing machinery. It includes the study and experimentation of algorithmic processes, and development of both hardware and software. Computing has scientific, engineering,</p>

          <img
            src='https://i.ibb.co/TP0Q7Kf/i-Stock-1171902434.jpg'
            alt="Post Image"
            className="my-4 w-96 rounded-lg h-72"
          />

          <div className="flex justify-between border text-white border-gray-300 pt-2">
            <div className="flex">
              <button className="flex items-center text-white hover:text-blue-700 mr-2">
                <div className="flex">
                  <button onClick={loveButtonHandel}>
                    <img
                      className="h-10 w-10 rounded"
                      color="islove?red:black"
                      src="https://i.ibb.co/T2VVmRx/touch.png"
                      alt=""
                    />
                  </button>
                  <p>
                    {loveCount} {loveCount === 1 ? "Love" : "love"}
                  </p>
                </div>
              </button>
              <button className="flex items-center text-white hover:text-gray-700 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 15l7-7 7 7"
                  ></path>
                </svg>
                Comment
              </button>
              <button className="flex items-center text-white hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
                Share
              </button>
            </div>
            <div>
              <button className="flex items-center text-gray-500 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-primary flex m-auto ">
        <Link to="/media">All post Details </Link>
      </button>
    </div>
  );
};

export default Posts;
