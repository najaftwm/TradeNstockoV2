import React, { useState } from "react";
import { Play, MonitorSmartphone } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingAppLinks() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const links = [
    {
      name: "Android App",
      icon: <Play size={32} />, // bigger icon
      color: "#FFD700", // yellow on hover
      href: "/app-tradenstocko.apk", // ✅ replace with actual app link
    },
    {
      name: "Desktop Web",
      icon: <MonitorSmartphone size={32} />,
      color: "#FFD700",
      href: "https://www.tradenstocko.com/", // ✅ replace with actual web link
    },
  ];

  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      className="fixed top-1/2 right-0 -translate-y-1/2 flex flex-col items-end gap-3 z-50"
    >
      {links.map((link, index) => {
        const isHovered = hoveredIndex === index;

        return (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`flex items-center rounded-l-2xl overflow-hidden transition-all duration-500 ease-in-out shadow-lg
              ${isHovered ? "w-52" : "w-16"} 
              ${!isHovered && "justify-end"}`}
            style={{
              backgroundColor: isHovered ? link.color : "#0B6177", // teal like your image
              color: "#fff",
            }}
          >
            {/* Text (visible on hover) */}
            <span
              className={`ml-4 text-base font-bold whitespace-nowrap transition-all duration-500 ease-in-out ${
                isHovered ? "opacity-100 w-auto" : "opacity-0 w-0"
              }`}
            >
              {link.name}
            </span>

            {/* Icon — always visible */}
            <div className="flex items-center justify-center w-16 h-16 shrink-0">
              {link.icon}
            </div>
          </a>
        );
      })}
    </motion.div>
  );
}
