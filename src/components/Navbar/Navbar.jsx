import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, loggedOut } = useContext(AuthContext);
  const handleLogOut = () => {
    loggedOut()
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: "Thank You!",
          text: "Logout Successful",
          icon: "success",
        });
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const navLinks = (
    <>
      <div className=" md:flex justify-center items-center gap-2 ">
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-red-600 text-xl font-sans font-medium hover:underline"
                : " text-xl"
            }
            to={"/"}
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-red-600 text-xl  font-sans font-medium hover:underline"
                : "text-xl"
            }
            to={"/rooms"}
          >
            Rooms
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-red-600 text-xl font-sans font-medium hover:underline"
                : "text-xl"
            }
            to={"/myBookings"}
          >
            My Booking
          </NavLink>
        </div>
        <div>
          {!user?.email && (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-red-600 font-sans font-medium text-xl hover:underline"
                  : "text-xl"
              }
              to={"/login"}
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
  return (
    <div className="flex justify-between items-center py-4 shadow-2xl">
      <div className="hidden md:block ">
        <Link className="  ">
          <img
            className="bg-white w-5 mask mask-square md:w-20 md:rounded-circle"
            src="https://i.ibb.co/kJR9tXp/logo.png"
            alt=""
          />
        </Link>
      </div>
      <div className="hidden md:block">{navLinks}</div>
      <div className=" md:hidden">
        <div className="dropdown dropdown-right py-6">
          <label tabIndex={0} className="btn m-1">
            <label className="btn btn-circle swap swap-rotate">
              {/* this hidden checkbox controls the state */}

              {/* hamburger icon */}
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>
            </label>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32"
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div>
        {" "}
        <div className=" ">
          {user && (
            <>
              <div className=" flex justify-center items-center">
                <img
                  className="  h-14 rounded-full mb-1"
                  src={user?.photoURL}
                  alt=""
                />
              </div>

              {/* <h1 className="">{user?.displayName}</h1> */}
            </>
          )}

          <div>
            {user && (
              <button
                onClick={handleLogOut}
                className="font-medium  btn btn-warning"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
