import React from "react";
import hero from "../../assets/images/hero.webp";
import { BiSearch } from "react-icons/bi";

const Hero = () => {
  return (
    <div className="hero py-10">
      <div className="flex pl-10 justify-between items-center gap-4">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold bangla">
            গ্রোসারি পৌঁছে দিচ্ছি আপনার দোরগোড়ায়
          </h1>
          <form action="" className="mt-6 bg-white flex justify-between items-center pr-4 rounded">
            <input
              type="text"
              className="w-full border-0 outline-none px-4 py-3 bg-transparent bangla text-xl"
              placeholder="পণ্য খুজুন (যেমনঃ দুধ, ডিম, আলু)"
            />
            <button type="submit" className="btn">
              <BiSearch className="text-2xl" />
            </button>
          </form>
        </div>
        <div className="w-1/2">
          <img src={hero} className="hero-img block ml-auto" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
