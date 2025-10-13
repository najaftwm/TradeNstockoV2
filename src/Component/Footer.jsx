import { Instagram, Linkedin } from 'lucide-react'; // Add other icons as needed (e.g., Twitter, Facebook)
import assets from '../assets/assets';

export default function Footer() {
  return (
    <div className=" bg-gray-100 font-poppins py-5 px-4 md:px-8">
      <footer
        className="max-w-7xl mx-auto text-gray-300 rounded-2xl border border-[#1f1f1f] shadow-[0_8px_25px_rgba(0,0,0,0.6)] p-12 md:p-16"
        style={{
          backgroundImage: `url(${assets.logo})`,
          backgroundSize: '50%', // Reduced logo size
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Overlay for Blur Effect and Readability */}
        <div
          className="absolute inset-0"
          style={{
            backdropFilter: 'blur(10px)', // Keep blur effect
            backgroundColor: 'rgba(17, 17, 17, 0.85)', // Semi-transparent black overlay
            zIndex: 1,
          }}
        ></div>

        {/* Content Wrapper */}
        <div className="relative z-10">
          {/* Logo at the top */}
          <div className="mb-6 pl-60">
            <img
              src={assets.logo}
              alt="TNS Trading Logo"
              className="h-20 w-auto opacity-90"
            />
          </div>

          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 md:ml-10">
            {/* About Section */}
            <div className="md:col-span-2 space-y-4 text-[15px] leading-relaxed text-gray-300 font-normal tracking-wide md:pr-8">
              <p>
                Step into the world of trading with <span className="text-white font-medium">TNS</span>, an advanced platform
                designed to equip you with everything you need to make informed trading decisions.
                Whether you're an experienced trader or a beginner, our intuitive interface, real-time
                data, and advanced tools give you the edge in fast-moving markets.
              </p>
              <p>
                Easily track stocks, analyze trends, and execute trades — anytime, anywhere. With
                powerful charting, customizable alerts, and secure transactions, TNS helps you manage
                your portfolio with precision and confidence.
              </p>
            </div>

            {/* Services */}
            <div className="pl-5 md:ml-20">
              <h3 className="text-white font-semibold mb-4 text-[16px] tracking-wide">
                Services
              </h3>
              <ul className="space-y-2 text-[14px] text-gray-400 font-medium">
                <li className="hover:text-white transition">NSE Trading</li>
                <li className="hover:text-white transition">MCX Trading</li>
                <li className="hover:text-white transition">Options Trading</li>
                <li className="hover:text-white transition">Zero Brokerage</li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="md:-ml-2">
              <h3 className="text-white font-semibold mb-4 text-[16px] tracking-wide">
                Quick Links
              </h3>
              <ul className="space-y-2 text-[14px] text-gray-400 font-medium">
                <li className="hover:text-white transition">About</li>
                <li className="hover:text-white transition">Careers</li>
                <li className="hover:text-white transition">Contact</li>
              </ul>
            </div>
          </div>

          {/* Divider and Bottom Section */}
          <div className="border-t border-[#1f1f1f] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs font-light gap-4">
            {/* Left Side - Copyright */}
            <p className="text-gray-500 font-light text-center md:text-left">
              © 2025 <span className="text-white font-medium">TNS Trading</span>. All rights reserved.
            </p>

            {/* Middle - Links */}
            <div className="flex gap-5">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms & Conditions
              </a>
            </div>

            {/* Right Side - Socials */}
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 rounded-md bg-[#1a1a1a] hover:bg-[#222] transition-colors"
              >
                <Instagram 
                  className="text-gray-400 hover:text-white transition" 
                  size={20} // Adjust size as needed (default is 24)
                />
              </a>
              <a
                href="#"
                className="p-2 rounded-md bg-[#1a1a1a] hover:bg-[#222] transition-colors"
              >
                <Linkedin 
                  className="text-gray-400 hover:text-white transition" 
                  size={20} // Adjust size as needed
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}