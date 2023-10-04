import React, { useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useContext } from "react";
import { Auth } from "../../Contexts/AuthContext";
const Login = () => {
  //    State create ..............
  const { signInUser } = useContext(Auth);
  const [error, setError] = useState("");
  const [isdisabled, setDisabled] = useState(true);
  const navigate = useNavigate();

  //    State create End ..............

  // Handel button submit Function End............................
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const password = form.password.value;
    const email = form.email?.value;
    const button = form.button.value;
    console.log(email, password);
    if (!/(?=.{8,})/.test(password)) {
      setError("Your password is Invalid");
      return;
    }
    if (!/(?=.*[a-zA-Z])/.test(password)) {
      setError("your password is Invalid");
    }
    setError("");
    signInUser(email, password)
      .then((result) => {
        const users = result.users;
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Sign Up is Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setError("");
        navigate("/");
        console.log(users);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // Handel submit Function End............................

  return (
    <div className="h-[800px] w-96 justify-center  items-center mx-auto mt-32">
      <div>
        <h2 className="text-center text-4xl">Login</h2>
        <form
          onSubmit={handelSubmit}
          className="border mx-auto p-10 mt-7 c text-white  rounded-xl "
        >
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold text-white ">Email</span>
            </label>
            <input
              name="email"
              typeof="email"
              placeholder="Enter Your Email"
              className="input input-bordered w-full max-w-xs text-black"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold text-white">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="New Password"
              className="input input-bordered w-full max-w-xs text-black"
            />
          </div>
          <p className="text-red-600 text-center">{error}</p>
          <div className="flex mt-5">
            <input onClick={() => setDisabled(!isdisabled)} type="checkbox" />
            <span className="text-1xl ml-2 text-white ">
              Accept term & Condition
            </span>
          </div>
          <input
            name="button"
            disabled={isdisabled}
            className="btn btn-primary w-80  mt-10 text-white "
            type="submit"
          />
        </form>

        <p className="text-priamry font-bold">
          Create a new Account {""}
          <Link to="/signup" className="text-secondary">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
