export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen bg-[url('heroBG.jpg')] bg-cover bg-center bg-no-repeat"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl font-bold mb-4">Welcome to TNS Trading</h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Trade smarter, faster, and with zero brokerage.
        </p>
        <a
          href="#register"
          className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors duration-300"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
