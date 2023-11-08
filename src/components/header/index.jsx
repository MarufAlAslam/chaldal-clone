import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import logo from "../../assets/images/logo.webp";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header py-2 bg-[#FDD670]">
      <div className="container">
        <div className="nav-menu flex justify-between items-center">
          <div className="flex justify-between items-center gap-4">
            <button className="btn text-4xl">
              <BiMenuAltLeft />
            </button>
            <Link to="/">
              <img src={logo} alt="logo" className="logo" />
            </Link>
          </div>
          <div className="flex justify-end items-center gap-4">
            <div className="location bg-transparent flex justify-center items-center">
              <FaMapMarkerAlt className="text-2xl text-[#FF6F71]" />
              <select
                name=""
                className="border-0 bg-transparent outline-none bangla p-4 pl-2 text-xl font-bold text-[#FF6F71]"
                id=""
              >
                <option value="মহাখালী, ঢাকা">মহাখালী, ঢাকা</option>
              </select>
            </div>
            <div className="language cursor-pointer bg-white flex items-center gap-3 p-2 rounded">
              <div className="option">
                <input defaultChecked type="radio" name="language" id="en" />
                <label className="font-bold cursor-pointer" htmlFor="en">
                  EN
                </label>
              </div>
              <div className="option">
                <input type="radio" name="language" id="bn" />
                <label className="font-bold cursor-pointer" htmlFor="bn">
                  বাং
                </label>
              </div>
            </div>

            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
