import React, { useState } from "react";
import Swal from "sweetalert2";



const ServicesCard = () => {
  const [text, setText] = useState("");
  const [files, setFiles] = useState("");
  const imgHostkey = import.meta.env.VITE_REACT_APP_IMGBB_KEY;

  // Handel Submit img and text
  const handelSubmit =  (e) => {
    e.preventDefault();
    const fromData = new FormData();
    fromData.append("image", files);
    console.log("I am image key ", imgHostkey)
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgHostkey}`;
    fetch(url, {
      method: "POST",
      body: fromData,
    })
      .then((res) => res.json())
      .then((result) => {
        const saveData = {
          image: result.data.display_url,
          name: text,
          date: new Date(),
          like: 0,
          
        };
        fetch(`https://follow-server-dd657x478-chamokbarmon.vercel.app/media`,{
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveData),
        })
          .then((res) => res.json())
          .then((r) => {
            console.log(r);
            if (r.success) {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your post is created successfully',
                showConfirmButton: false,
                timer: 1500
              })
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!your post not created',
                footer: '<a href="">Why do I have this issue?</a>'
              })

            }
          });
      })
      .catch((error) => {
         toast.error(error.message)
      });
    setText("")
    
  };
  // Handel Submit img and text end

  return (
    <div>
      <h1 className="text-center text-3xl font-bold mb-10 italic">
        .....Write a Create Post.....
      </h1>
      <div
        className="card h-96"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "600px",
          backgroundSize: "cover",
          padding: "10px",
          backgroundImage:
            "url(https://i.ibb.co/gz4mYLF/pngtree-modern-double-color-futuristic-neon-background-image-351866.jpg)",
        }}
      >
        {/* from Area  */}
        <form
          onSubmit={handelSubmit}
          className="card-body w-full top-0  ml-80  align-middle"
        >
          <div class="max-w-xl w-full opacity-95 mt-28 bg-white rounded-lg shadow-md p-4">
            <div class="flex items-center">
              <img
                src="https://i.ibb.co/vBZ9sZy/kisspng-computer-icons-user-profile-portable-network-graph-circle-svg-png-icon-free-download-5-4714.jpg"
                alt="Profile Picture"
                class="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <h2 class="text-lg font-semibold">John Doe</h2>
                <p class="text-gray-600">Just now</p>
              </div>
            </div>
            <div class="mt-4">
              <p class="text-gray-800 font-bold">What's on your mind?</p>
              <textarea
                onChange={(e) => setText(e.target.value)}
                name="name"
                value={text}
                class="w-full h-20 p-2 border border-black font-bold  rounded-md mt-2 focus:ring focus:ring-blue-500"
                placeholder="Write something..."
              ></textarea>
            </div>
            <div class="mt-4 flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <label for="fileInput" class="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M15 8v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8H3a1 1 0 0 1 0-2h2V3a1 1 0 0 1 2 0h6a1 1 0 0 1 2 2v3h2a1 1 0 0 1 0 2h-2zm-5-5a3 3 0 0 0-3 3v4a1 1 0 0 1-1 1H4a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3h-2a1 1 0 0 1-1-1V6a3 3 0 0 0-3-3z" />
                  </svg>
                </label>
                <input
                  onChange={(e) => setFiles(e.target.files[0])}
                  name="image"
                  id="fileInput"
                  type="file"
                  placeholder="Add Photo"
                />
              </div>
              <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServicesCard;
