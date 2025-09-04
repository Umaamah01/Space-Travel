import React, { useState } from "react";

const technologies = [
  {
    name: "Launch Vehicle",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    image: "/launch-vehicle.jpg",
    imageMobile: "/launch-vehicle-landscape.jpg",
  },
  {
    name: "Spaceport",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",
    image: "/spaceport.jpg",
    imageMobile: "/spaceport-landscape.jpg",
  },
  {
    name: "Space Capsule",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. it includes a space gym, cinema, and plenty of other activities to keep you entertained,",
    image: "/space-capsule.jpg",
    imageMobile: "/space-capsule-landscape.jpg",
  },
];

const Technology: React.FC = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section
      className="flex flex-col items-center min-h-screen px-6 md:px-16 text-white bg-cover bg-center pt-32 md:pt-40"
      style={{ backgroundImage: "url('/technology-bg.jpg')" }}
    >
      {/* Title */}
      <h2 className="flex flex-col md:flex-row md:items-center gap-4 tracking-[4px] text-gray-400 mb-12 text-xl md:text-2xl w-full md:w-auto md:self-start font-barlowCondensed">
        <span className="font-bold text-white/40">03</span>
        <span className="uppercase">Space Launch 101</span>
      </h2>

      {/* Wrapper: Info + Image */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl gap-16">
        {/* Left: Tabs + Text */}
        <div className="flex-1 flex flex-col md:flex-row md:items-center gap-8 max-w-xl">
          {/* Tabs */}
          <div className="flex md:flex-col justify-center md:justify-start space-x-4 md:space-x-0 md:space-y-4">
            {technologies.map((_, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center font-barlowCondensed font-bold text-lg border transition ${
                  selected === i
                    ? "bg-white text-black"
                    : "border-gray-400 text-white hover:bg-white/20"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          {/* Text Info */}
          <div className="text-center md:text-left space-y-6">
            <p className="uppercase text-gray-400 text-sm md:text-base font-barlowCondensed">
              The terminology...
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bellefair">
              {technologies[selected].name}
            </h1>
            <p className="max-w-md text-gray-300 leading-relaxed mx-auto md:mx-0 font-barlow text-lg md:text-xl">
              {technologies[selected].description}
            </p>
          </div>
        </div>

        {/* Right: Images */}
        <div className="flex-1 flex justify-center">
          {/* Desktop */}
          <img
            src={technologies[selected].image}
            alt={technologies[selected].name}
            className="hidden md:block w-[400px] lg:w-[500px] object-contain"
          />

          {/* Mobile */}
          <img
            src={technologies[selected].imageMobile}
            alt={technologies[selected].name}
            className="block md:hidden w-full max-w-xs object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Technology;
