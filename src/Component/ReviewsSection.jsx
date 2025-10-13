import React, { useRef, useEffect } from "react";
import assets from "../assets/assets";

const ReviewsSection = () => {
  const reviews = [
    {
      quote: "We saw a 200% increase in Sales Qualified Leads.",
      author: "Anurag",
      image: assets.F1,
    },
    {
      quote:
        "This is the first marketing agency I've worked with where I see results.",
      author: "Danish",
      image: assets.F2,
    },
    {
      quote: "Amazing service and great results!",
      author: "Sakshi Bhise",
      image: assets.F3,
    },
    {
      quote: "Highly recommend this agency for lead generation.",
      author: "Riya Dubey",
      image: assets.F4,
    },
    {
      quote: "Transformed our marketing strategy effectively.",
      author: "Rajan",
      image: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
  ];

  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const velocity = useRef(0);
  const lastX = useRef(0);
  const momentumID = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.style.scrollBehavior = "auto";
    container.style.touchAction = "pan-y";

    const onPointerDown = (e) => {
      isDragging.current = true;
      startX.current = e.clientX;
      scrollLeft.current = container.scrollLeft;
      lastX.current = e.clientX;
      velocity.current = 0;
      if (momentumID.current) cancelAnimationFrame(momentumID.current);
      container.classList.add("grabbing");
    };

    const onPointerMove = (e) => {
      if (!isDragging.current) return;
      const x = e.clientX;
      const dx = x - lastX.current;
      lastX.current = x;
      velocity.current = dx;
      const walk = x - startX.current;
      container.scrollLeft = scrollLeft.current - walk;
    };

    const onPointerUp = () => {
      isDragging.current = false;
      container.classList.remove("grabbing");

      const deceleration = 0.95;
      const animate = () => {
        if (Math.abs(velocity.current) > 0.5) {
          container.scrollLeft -= velocity.current;
          velocity.current *= deceleration;
          momentumID.current = requestAnimationFrame(animate);
        } else {
          cancelAnimationFrame(momentumID.current);
        }
      };
      momentumID.current = requestAnimationFrame(animate);
    };

    container.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      container.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, []);

  return (
    <div className="reviews-section bg-gray-100 py-5 px-4 md:py-20">
      {/* Heading */}
      <div className="text-center mb-10 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800">
          What Our Clients Say
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-500 mt-3">
          Real feedback from real users.
        </p>
      </div>

      {/* Scrollable container */}
      <div
        ref={containerRef}
        className="reviews-container flex gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-10 overflow-x-auto select-none cursor-grab active:cursor-grabbing"
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            className="review-card min-w-[280px] sm:min-w-[400px] md:min-w-[600px] h-[250px] sm:h-[300px] md:h-[360px] bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg flex flex-col justify-between hover:shadow-xl transition-all duration-300"
          >
            <p className="text-base sm:text-xl md:text-2xl text-gray-800 font-semibold mb-6 sm:mb-8 leading-relaxed">
              “{review.quote}”
            </p>
            <div className="flex items-center gap-4 sm:gap-5">
              <img
                src={review.image}
                alt={review.author}
                className="rounded-full w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-cover border-4 border-gray-100"
              />
              <div>
                <p className="font-bold text-lg sm:text-xl text-gray-900">
                  {review.author}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .reviews-container::-webkit-scrollbar { display: none; }
        .reviews-container { -ms-overflow-style: none; scrollbar-width: none; scroll-behavior: smooth; }
        .reviews-container.grabbing { cursor: grabbing !important; }
      `}</style>
    </div>
  );
};

export default ReviewsSection;