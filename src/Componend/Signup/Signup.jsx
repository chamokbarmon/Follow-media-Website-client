import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from "../Hook/Firebase.config";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = getAuth(app);

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
  console.log(name, email, password);
  const handelButtonClick = (e) => {
    e.preventDefault();

    if ((name, email, password)) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          UserName()
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

  const UserName=()=>{
    updateProfile(auth.currentUser, {
        displayName: name
      }).then(() => {
        
      }).catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage);
      });
  }

  return (
    <div className=" h-[800px] w-96 justify-center items-center mx-auto mt-32 ">
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
              type={email}
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
          <input
            onClick={handelButtonClick}
            className="btn btn-primary w-80  mt-10"
            type="submit"
          />
        </form>
        <p className="text-priamry font-bold">
          Already have a Account Cars Market{" "}
          <Link to="/login" className="text-secondary">
            login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Signup;
