import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import assets from "../assets/assets";

const steps = [
  {
    id: 1,
    title: "Download the App",
    desc: "Go to the Play Store or App Store and download the Royalty App on your device.",
    img: assets.A1,
  },
  {
    id: 2,
    title: "Create Your Account",
    desc: "Open the app and sign up using your mobile number and email address.",
    img: assets.A2,
  },
  {
    id: 3,
    title: "Start Trading",
    desc: "Login to your dashboard and explore the market insights tailored for you.",
    img: assets.A3,
  },
  {
    id: 4,
    title: "Start Trading",
    desc: "Login to your dashboard and explore the market insights tailored for you.",
    img: assets.A4,
  },
];

const InstallSteps = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 150, easing: "ease-in-out", once: true });

    const progressLine = document.getElementById("progress-line");
    const sections = steps.map((_, i) => document.getElementById(`step-${i + 1}`));
    const totalSteps = steps.length;

    const updateProgress = () => {
      let currentActiveIndex = -1;

      sections.forEach((sec, index) => {
        if (!sec) return;
        const rect = sec.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight * 0.7 && rect.bottom > 0) {
          currentActiveIndex = index;
        }
      });

      const fillPercent = ((currentActiveIndex + 1) / totalSteps) * 100;
      if (progressLine) progressLine.style.height = `${fillPercent}%`;

      sections.forEach((sec, i) => {
        const circle = sec?.querySelector(".circle");
        if (i <= currentActiveIndex) {
          circle?.classList.add("bg-blue-500", "border-blue-400");
          circle?.classList.remove("border-gray-500", "bg-[#022B3A]");
        } else {
          circle?.classList.remove("bg-blue-500", "border-blue-400");
          circle?.classList.add("border-gray-500", "bg-[#022B3A]");
        }
      });
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <section className="bg-[#022B3A] py-20 px-6 md:px-16 text-white">
      <h2 className="text-4xl font-bold text-center mb-16">How to Install the App</h2>

      <div className="relative flex flex-col items-start max-w-4xl mx-auto">
        <div className="absolute left-[22px] top-0 w-[4px] h-full bg-gray-700/40 rounded-full overflow-hidden">
          <div
            id="progress-line"
            className="absolute top-0 left-0 w-full h-0 bg-gradient-to-b from-blue-500 to-purple-500 transition-all duration-700 ease-in-out rounded-full"
          ></div>
        </div>

        {steps.map((step, index) => (
          <div
            key={step.id}
            id={`step-${index + 1}`}
            className="relative mb-28 flex items-start gap-8"
          >
            <div className="relative flex flex-col items-center flex-shrink-0">
              {index > 0 && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-14 bg-gray-700/40 -translate-y-full"></div>
              )}

              <div className="circle z-10 w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-500 bg-[#022B3A] text-white font-bold text-lg transition-all duration-300">
                {step.id.toString().padStart(2, "0")}
              </div>

              {index < steps.length - 1 && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-14 bg-gray-700/40 translate-y-full"></div>
              )}
            </div>

            <div
              className="bg-white/5 rounded-xl border border-gray-700/40 p-6 md:p-8 w-full md:w-4/5 hover:bg-white/10 transition-all duration-300"
              data-aos="fade-right"
              data-aos-delay={index * 150}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{step.desc}</p>

              <img
                src={step.img}
                alt={`Step ${step.id}`}
                className="rounded-xl shadow-md mt-2 w-3/4"
                data-aos="zoom-in"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstallSteps;