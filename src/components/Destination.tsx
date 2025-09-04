import React, { useState } from "react";

const destinations = [
  {
    name: "Moon",
    image: "/moon.png", 
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    image: "/mars.png",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to climb Olympus Mons, the tallest planetary mountain in our solar system. it's two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    image: "/europa.png",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    image: "/titan.png",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home, (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];

const Destination: React.FC = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section
      className="flex flex-col items-center min-h-screen px-6 md:px-16 text-white bg-cover bg-center pt-32 md:pt-40"
      style={{ backgroundImage: "url('/destination-bg.jpg')" }} // put bg in /public
    >
      <h2 className="uppercase tracking-[3px] text-gray-400 mb-12 text-lg md:self-start">
        <span className="mr-2 font-bold text-white/40">01</span> Pick your
        destination
      </h2>

      
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-16">
        
        <div className="flex-1 flex justify-center">
          <img
            src={destinations[selected].image}
            alt={destinations[selected].name}
            className="w-64 md:w-[350px] lg:w-[450px] object-contain"
          />
        </div>

        
        <div className="flex-1 text-center md:text-left space-y-8 max-w-xl">
          
          <div className="flex space-x-6 justify-center md:justify-start uppercase tracking-widest">
            {destinations.map((planet, i) => (
              <button
                key={planet.name}
                onClick={() => setSelected(i)}
                className={`pb-2 border-b-2 ${
                  selected === i ? "border-white" : "border-transparent"
                } hover:border-gray-500`}
              >
                {planet.name}
              </button>
            ))}
          </div>

          
          <h1 className="text-5xl md:text-6xl font-serif">
            {destinations[selected].name}
          </h1>
          <p className="max-w-md text-gray-300 leading-relaxed mx-auto md:mx-0">
            {destinations[selected].description}
          </p>

          
          <div className="flex flex-col md:flex-row md:space-x-16 space-y-6 md:space-y-0 text-center md:text-left pt-6 border-t border-gray-700">
            <div>
              <p className="text-gray-400 text-sm uppercase">Avg. Distance</p>
              <p className="text-xl normal-case">
                {destinations[selected].distance}
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-sm uppercase">
                Est. Travel Time
              </p>
              <p className="text-xl normal-case">
                {destinations[selected].travel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
