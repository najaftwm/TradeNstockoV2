import assets from "../assets/assets";
import { Users, CheckCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex items-start justify-center min-h-screen bg-[#EDE8D0] overflow-hidden pt-32 lg:pt-40"
    >
      {/* Background Logo with Blur */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain blur-lg opacity-40"
        style={{
          backgroundImage: `url(${assets.logo})`,
          backgroundPosition: "center 40%",
        }}
      ></div>

      {/* Content */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between w-full max-w-[1450px] px-4 z-10 gap-10">

        {/* Left Side - Text */}
        <div className="flex-1 text-left space-y-5 lg:space-y-8">
          {/* Badge + Sub-badge */}
          <div className="space-y-1">
            <h4 className="text-yellow-600 font-bold text-2xl uppercase tracking-wider">
              BEST TRADING APP
            </h4>
            <p className="text-gray-800 text-lg font-semibold">NSE | MCX | OPT</p>
          </div>

          {/* Main Heading */}
          <div className="space-y-1">
            <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Enjoy Maximum Profits with
            </h1>
            <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-600 leading-tight">
              Lowest BROKERAGE
            </h2>
          </div>

          {/* Subheading */}
          <p className="text-yellow-700 font-bold text-xl">
            Get Free Account for TNS Trading App!
          </p>

          {/* Description */}
          <p className="text-gray-700 text-lg leading-relaxed max-w-lg">
            <span className="font-bold text-black">
              TNS - Your All-in-One Trading App
            </span>
            <br />
            Your trading journey deserves the right partner. Unlock your potential
            with the TNS Trading app, equipped with professional tools and
            lightning-fast speed for seamless online trading.
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-6">
            {/* Registered Users */}
            <div className="flex items-center space-x-2">
              <span className="bg-[#1E4A44] text-white rounded-full p-2">
                <Users size={20} />
              </span>
              <div>
                <h3 className="text-2xl font-bold text-[#1E4A44]">500K</h3>
                <p className="text-sm text-gray-600">Registered Users</p>
              </div>
            </div>

            {/* Customer Satisfaction */}
            <div className="flex items-center space-x-2">
              <span className="bg-[#1E4A44] text-white rounded-full p-2">
                <CheckCircle size={20} />
              </span>
              <div>
                <h3 className="text-2xl font-bold text-[#1E4A44]">99%</h3>
                <p className="text-sm text-gray-600">Customer Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Start Now Button under stats */}
          <a
            href="#"
            className="group relative overflow-hidden bg-white text-black px-6 py-3 rounded-lg font-semibold inline-block mt-6"
          >
            {/* Background fill on hover */}
            <span className="absolute bottom-0 left-0 w-full h-full bg-[#D67F3C] text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></span>

            {/* Text */}
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Start Now <span className="ml-2 ">→</span>
            </span>
          </a>
        </div>

        {/* Right Side - Girl Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src={assets.girl}
            alt="Girl Illustration"
            className="w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
