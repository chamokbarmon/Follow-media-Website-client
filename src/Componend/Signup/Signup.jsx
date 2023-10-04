// Import setup  Start.................
import React, { useContext,  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./SignUp.css";
import { Auth } from "../../Contexts/AuthContext";

// Import setup end..................

const Signup = () => {
  // State setup..............
  const [error, setError] = useState("");
  const [isdisabled, setDisabled] = useState(true);

  const { createUser } = useContext(Auth);
  const navigate = useNavigate();

  

  // Handel submit Function..................
  const handelsubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const password = form.password.value;
    const email = form.email?.value;
    const button = form.button.value;
    console.log(name, email, password, button);
    if (!/(?=.{8,})/.test(password)) {
      setError("Your password is Invalid");
      return;
    }
    if (!/(?=.*[a-zA-Z])/.test(password)) {
      setError("your password is Invalid");
    }
    setError("");
    createUser(email,password)
    .then(result =>{
        const users =result.users 
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
    .catch(error=>{
       console.log(error.message);
    }) 

  }
    

  return (
    // From design name password email and checkbox .........................

    <div className="h-[800px] w-96 justify-center items-center mx-auto mt-32">
      <div>
        <h2 className="text-center text-4xl">SignUp</h2>
        <form
          onSubmit={handelsubmit}
          className="border mx-auto p-10 mt-7  c rounded-xl "
        >
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold text-white">Name </span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold text-white">Email</span>
            </label>
            <input
              name="email"
              placeholder="Enter Your Email"
              className="input input-bordered w-full max-w-xs"
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
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <p className="text-red-600 text-center">{error}</p>
          <div className="flex mt-5">
            <input onClick={() => setDisabled(!isdisabled)} type="checkbox" />
            <span className="text-1xl ml-2 text-white">
              Accept term & Condition
            </span>
          </div>
          <input
            disabled={isdisabled}
            name="button"
            className="btn bg-zinc-100 w-80  mt-10"
            type="submit"
          />
          <button
            // onClick={() => googleHandel()}
            className="btn btn-primary  w-80 mt-10 flex m-auto"
          >
            Google
          </button>
        </form>

        <p className="text-priamry font-bold">
          Already have a Account {""}
          <Link to="/login" className="text-secondary">
            login
          </Link>
        </p>
      </div>
    </div>

    // From design name password email and checkbox end.........................
  );
};

export default Signup;
