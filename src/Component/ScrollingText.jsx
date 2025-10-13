import React from "react";

export default function ScrollingText() {
  return (
    <section className="relative flex items-center justify-center h-[180px] bg-[#EDE8D0] -mt-6 overflow-hidden">
      {/* Divider line above section */}
      <div className="absolute top-10 left-0 w-full h-[2px] bg-black/20"></div>

      <div className="scrolling-wrapper whitespace-nowrap">
        {/* First scroll content */}
        <div className="scrolling-content text-[60px] md:text-[70px] font-extrabold">
          <span> Trade Smart • </span>
          <span> Lowest Brokerage • </span>
          <span> Fast Withdrawals • </span>
          <span> 24/7 Support • </span>
        </div>

        {/* Duplicate for seamless scroll */}
        <div className="scrolling-content text-[60px] md:text-[70px] font-extrabold">
          <span> Trade Smart • </span>
          <span> Lowest Brokerage • </span>
          <span> Fast Withdrawals • </span>
          <span> 24/7 Support • </span>
        </div>
      </div>
    </section>
  );
}
