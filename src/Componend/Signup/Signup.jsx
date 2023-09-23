// Import setup  Start.................
import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import app from "../Hook/Firebase.config";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// Import setup end..................

const Signup = () => {


  // State setup..............
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isdisabled, setDisabled] = useState(true);
  const auth = getAuth(app);

  // State setup End..............


  // Handel name email password setup function.................
  const handelName = (e) => {
    setName(e.target.value);
  };
  const handelEmail = (e) => {
    setEmail(e.target.value);
  };
  const handelPassword = (e) => {
    if (!/(?=.{8,})/.test(e.target.value)) {
      setError("Your password is Invalid");
      return;
    }
    if (!/(?=.*[a-zA-Z])/.test(e.target.value)) {
      setError("your password is Invalid");
    }
    setPassword(e.target.value);
    setError("");
  };

  // Handel name email password setup function  End .............


  // Handel button submit Function..................
  const handelButtonClick = (e) => {
    e.preventDefault();

    if ((name, email, password)) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        
          const user = userCredential.user;
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your Sign Up is Successfully',
            showConfirmButton: false,
            timer: 1500
          })
          setError("");
          console.log(user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage);
        });
    } else {
      setError("please fil out the input");
      return;
    }
  };
  // Handel button submit Function End............................

  return (

    // From design name password email and checkbox .........................

    <div className="h-[800px] w-96 justify-center items-center mx-auto mt-32">
      <div>
        <h2 className="text-center text-4xl">SignUp</h2>
        <form className="border mx-auto p-10 mt-7  ">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Name </span>
            </label>
            <input
              onBlur={handelName}
              name="name"
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              onBlur={handelEmail}
              name="email"
              typeof="email"
              placeholder="Enter Your Email"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              onBlur={handelPassword}
              name="password"
              type="password"
              placeholder="New Password"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <p className="text-red-600 text-center">{error}</p>
          <div className="flex mt-5">
            <input onClick={() => setDisabled(!isdisabled)} type="checkbox" />
            <span className="text-1xl ml-2">Accept term & Condition</span>
          </div>
          <input
            disabled={isdisabled}
            onClick={handelButtonClick}
            className="btn btn-primary w-80  mt-10"
            type="submit"
          />
        </form>
        <button
          // onClick={() => googleHandel()}
          className="btn btn-primary mt-5 flex m-auto"
        >
          Google
        </button>
        <p className="text-priamry font-bold">
          Already have a Account Cars Market{""}
          <Link to="/login" className="text-secondary">
            login
          </Link>
        </p>
      </div>
    </div>

    // From design name password email and checkbox end .........................
  );
};

export default Signup;
