import React from "react";

const Posts = () => {
  return (
    <div class="max-w-lg mx-auto my-4 p-4 bg-white shadow-md rounded-lg">
      <div class="flex items-center mb-4">
        <img
          src="profile-picture.jpg"
          alt="User Profile Picture"
          class="w-10 h-10 rounded-full mr-2"
        />
        <div>
          <p class="font-semibold">John Doe</p>
          <p class="text-gray-600 text-sm">2 hours ago</p>
        </div>
      </div>

      <p class="text-gray-800">
        This is an example Facebook post using Tailwind CSS. #SocialMedia #UI
        #WebDesign
      </p>

      <img
        src="post-image.jpg"
        alt="Post Image"
        class="my-4 w-full rounded-lg"
      />

      <div class="flex justify-between border-t border-gray-300 pt-2">
        <div class="flex">
          <button class="flex items-center text-blue-500 hover:text-blue-700 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            Like
          </button>
          <button class="flex items-center text-gray-500 hover:text-gray-700 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
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
          <button class="flex items-center text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
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
          <button class="flex items-center text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
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
  );
};

export default Posts;
