import { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt="logo"
        onClick={() => {
          navigate("/");
          scrollTo(0, 0);
        }}
      />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">Home</li>
          <hr className="border-none outline-none h-0.5 bg-app-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">Doctors</li>
          <hr className="border-none outline-none h-0.5 bg-app-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">About</li>
          <hr className="border-none outline-none h-0.5 bg-app-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">Contact</li>
          <hr className="border-none outline-none h-0.5 bg-app-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      {/* MOBILE NAV */}
      <div
        className={`md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all duration-300 ${
          showMenu ? "fixed w-full" : "h-0 w-0"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-6">
          <img src={assets.logo} alt="" className="w-36" />
          <img
            src={assets.cross_icon}
            alt=""
            onClick={() => setShowMenu(false)}
            className="w-6 cursor-pointer"
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <NavLink onClick={() => setShowMenu(false)} to="/">
            <li className="py-1">Home</li>
            <hr className="border-none outline-none h-0.5 bg-app-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/doctors">
            <li className="py-1">Doctors</li>
            <hr className="border-none outline-none h-0.5 bg-app-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/about">
            <li className="py-1">About</li>
            <hr className="border-none outline-none h-0.5 bg-app-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/contact">
            <li className="py-1">Contact</li>
            <hr className="border-none outline-none h-0.5 bg-app-primary w-3/5 m-auto hidden" />
          </NavLink>
        </ul>
      </div>
      {/* PROFILE */}
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              src={assets.profile_pic}
              alt="profile"
              className="w-8 h-8 rounded-full cursor-pointer"
            />
            <img
              src={assets.dropdown_icon}
              alt="dropdown"
              className="w-2.5 h-2.5 cursor-pointer"
              onClick={() => setShowProfile((prev) => !prev)}
            />
            <div
              className={`absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 ${
                showProfile ? "block" : "hidden"
              } group-hover:block`}
            >
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => {
                    setShowProfile(false);
                    navigate("/my-profile");
                  }}
                  className="hover:text-black"
                >
                  My Profile
                </p>
                <p
                  onClick={() => {
                    setShowProfile(false);
                    navigate("/my-appointments");
                  }}
                  className="hover:text-black"
                >
                  My Appointments
                </p>
                <p onClick={() => setToken(false)} className="hover:text-black">
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => {
              setShowProfile(false);
              navigate("/login");
            }}
            className="bg-app-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create account
          </button>
        )}
      </div>
      <img
        src={assets.menu_icon}
        alt=""
        className="w-6 md:hidden"
        onClick={() => setShowMenu(true)}
      />
    </div>
  );
};

export default NavBar;
