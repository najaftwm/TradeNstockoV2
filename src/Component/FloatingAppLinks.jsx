import React, { useState } from "react";
import { Play, MonitorSmartphone } from "lucide-react";

export default function FloatingAppLinks() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const links = [
    {
      name: "Android",
      icon: <Play size={20} />,
      color: "#D67F3C", // orange
      href: "#",
    },
    {
      name: "Desktop",
      icon: <MonitorSmartphone size={20} />,
      color: "#D67F3C", // teal
      href: "#",
    },
  ];

  return (
    <div className="fixed top-1/2 right-0 -translate-y-1/2 flex flex-col items-end gap-3 z-50">
      {links.map((link, index) => {
        const isHovered = hoveredIndex === index;

        return (
          <a
            key={index}
            href={link.href}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`flex items-center rounded-l-lg overflow-hidden transition-all duration-500 ease-in-out
              ${isHovered ? "w-40" : "w-12"} 
              ${!isHovered && "justify-end"}`}
            style={{
              backgroundColor: isHovered ? link.color : "#1E4A44",
              color: "#fff",
            }}
          >
            {/* Text — only visible when hovered */}
            <span
              className={`ml-4 text-sm font-semibold whitespace-nowrap transition-all duration-500 ease-in-out ${
                isHovered ? "opacity-100 w-auto" : "opacity-0 w-0"
              }`}
            >
              {link.name}
            </span>

            {/* Icon — always visible on right */}
            <div className="flex items-center justify-center w-12 h-12 shrink-0">
              {link.icon}
            </div>
          </a>
        );
      })}
    </div>
  );
}