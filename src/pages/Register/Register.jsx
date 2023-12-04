import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { HiMiniEye, HiEyeSlash } from "react-icons/hi2";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile, getAuth } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
// import { getAuth } from "firebase/auth";

const Register = () => {
  const auth = getAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  // authInfo
  const { createUser } = useContext(AuthContext);
  // console.log(authInfo);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      setError("Password must be 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Password must be contain capital letters");
      return;
    } else if (!/[@$!%*#?&]/.test(password)) {
      setError("Password must be contain one special character");
      return;
    }

    // const newUser = {
    //   name,
    //   photo,
    //   email,
    //   password,
    // };
    // console.log(newUser);
    // create user with email pass
    createUser(email, password)
      .then((result) => {
        Swal.fire({
          title: "Welcome",
          text: "Registration Successful",
          icon: "success",
        });
        // console.log(result.user);
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });
        // setUser({ ...user, photoURL: photo, displayName: name });
        setError("");
        form.reset();
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        // setError(error.message);
      });
  };
  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <Navbar></Navbar>
      <div className=" min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div>
            <h1 className="text-center text-2xl">
              For Exploring our Amazing Features! Please <br />
              <span className="text-2xl font-medium"> Register Now</span>
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <span
                  onClick={() => setShowPass(!showPass)}
                  className="absolute  right-[50px]  bottom-[194px] text-2xl"
                >
                  {showPass ? (
                    <HiMiniEye></HiMiniEye>
                  ) : (
                    <HiEyeSlash></HiEyeSlash>
                  )}
                </span>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className=" mx-auto mb-5">
                {error && (
                  <h2 className=" text-sm h-1  w-64  font-medium text-red-600 ">
                    {error}
                  </h2>
                )}
              </div>
              <div className="form-control mt-4">
                <button
                  className="bg-gradient-to-r from-blue-600 to-red-500 hover:from-pink-500 hover:to-yellow-500 py-2
             font-medium
                  px-2 rounded-xl text-white"
                >
                  Register
                </button>
              </div>
            </form>
            <div className="px-4 py-3 text-center">
              {/* Already have an account? please */}
              {/* <Link
                className="ml-2 font-semibold hover:text-red-600 underline"
                to={"/login"}
              >
                Login
              </Link> */}
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
