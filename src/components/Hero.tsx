import React from "react";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
      className="flex flex-col md:flex-row items-center md:justify-between min-h-screen px-8 md:px-16 bg-cover bg-center text-white pt-16 md:pt-28"
      style={{ backgroundImage: "url('/bg-home.jpg')" }}
    >
      {/* Text */}
      <div className="max-w-xl text-center md:text-left space-y-4 md:space-y-6">
        <p className="tracking-[4px] text-gray-400 uppercase font-barlowCondensed">
          So, you want to travel to
        </p>
        <h1 className="text-[6rem] md:text-[9rem] font-bellefair leading-none">
          Space
        </h1>
        <p className="text-gray-400 leading-relaxed text-lg md:text-xl max-w-md mx-auto md:mx-0 font-barlow">
          Let’s face it: if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      {/* Explore Button */}
      <div className="flex items-center justify-center mt-8 md:mt-0">
        <button
          onClick={() => navigate("/destination")}
          className="relative w-48 h-48 rounded-full bg-white text-black text-2xl font-barlowCondensed font-semibold flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_40px_10px_rgba(255,255,255,0.4)]"
        >
          EXPLORE
        </button>
      </div>
    </section>
  );
};

export default Hero;
