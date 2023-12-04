import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { HiMiniEye, HiEyeSlash } from "react-icons/hi2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

import googleImg from "../../assets/images/g.svg";

const Login = () => {
  const { logIn, googleLogin } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  // console.log(showPass);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;

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

    // login with email pass
    logIn(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Welcome",
          text: "Login Successful",
          icon: "success",
        });
        setError("");
        form.reset();
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const handleGoogle = () => {
    // google login
    googleLogin()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Welcome",
          text: "Login Successful",
          icon: "success",
        });
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div>
      <Helmet>
        <title>login</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="  bg-base-200">
        <div className="hero-content flex-col ">
          <div>
            <h1 className="text-center text-2xl">
              For Exploring our Amazing Features! Please <br />
              <span className="text-2xl font-medium"> Login Now</span>
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
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
                  className="absolute  right-[50px]  bottom-[315px] text-2xl"
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
              <div
                className=" mx-auto mb-5
            "
              >
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
                  Login
                </button>
              </div>
            </form>

            <div className="text-center">
              <h1>
                New to this Site? Please <br />
                <Link className="link link-primary text-lg" to={"/register"}>
                  Register
                </Link>
              </h1>

              <h2>OR</h2>
              <button onClick={handleGoogle} className="btn btn-active mb-5">
                <img className="" src={googleImg} alt="" />
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
