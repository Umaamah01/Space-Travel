import React, { useState } from "react";

const crewMembers = [
  {
    role: "Commander",
    name: "Douglas Hurley",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: "/douglas-hurley.png",
  },
  {
    role: "Mission Specialist",
    name: "Mark Shuttleworth",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: "/mark-shuttleworth.png",
  },
  {
    role: "Pilot",
    name: "Victor Glover",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    image: "/victor-glover.png",
  },
  {
    role: "Flight Engineer",
    name: "Anousheh Ansari",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-founded woman to fly to the ISS, and the first Iranian in space.",
    image: "/anousheh-ansari.png",
  },
];

const Crew: React.FC = () => {
  const [index, setIndex] = useState(0);
  const crew = crewMembers[index];

  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen px-6 md:px-16 bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/crew-bg.jpg')" }}
    >
      <p className="uppercase tracking-[3px] text-gray-400 mb-10 text-lg md:self-start font-barlowCondensed">
        <span className="mr-2 font-bold text-white/40">02</span> Meet your crew
      </p>

      
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-12">
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left space-y-6 max-w-xl">
          <h3 className="text-xl text-gray-400 font-barlowCondensed">{crew.role}</h3>
          <h2 className="text-5xl md:text-6xl font-bellefair">{crew.name}</h2>
          <p className="text-gray-300 leading-relaxed font-barlow">{crew.bio}</p>

          
          <div className="flex space-x-3 justify-center md:justify-start mt-6">
            {crewMembers.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-4 h-4 rounded-full transition-all ${
                  index === i ? "bg-white scale-110" : "bg-gray-500"
                }`}
              ></button>
            ))}
          </div>
        </div>

        
        <div className="flex-1 flex justify-center">
          <img
            src={crew.image}
            alt={crew.name}
            className="w-72 md:w-[400px] lg:w-[500px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Crew;
