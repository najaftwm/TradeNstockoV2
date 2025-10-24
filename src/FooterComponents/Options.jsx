export default function Options() {
  return (
    <div className="min-h-screen bg-[#f2f3f5]">
      {/* Heading Section */}
      <div className="w-full">
        <h6 className="text-7xl md:text-8xl font-black h-100 py-26 px-8 text-white bg-zinc-900 tracking-tight uppercase">
          Options Trading Guidelines
        </h6>
      </div>

      {/* Content Section */}
      <div className="w-full text-black px-8 py-12 space-y-6 text-lg leading-relaxed">
        {/* Introduction */}
        <p className="font-bold text-xl">
          At TradeNStocko, these Options Trading Guidelines govern your options trading activities. Please read and understand these guidelines before engaging in any options trading activities.
        </p>

        {/* Trading Guidelines */}
        <div>
          <ul className="list-disc pl-6 space-y-2">
            <li className="font-bold text-lg">Scalping in options trading is not allowed.</li>
            <li className="font-bold text-lg">Profitable trades (CE/PE) can be exited only after 5 minutes.</li>
            <li className="font-bold text-lg">Loss trades can be exited after 1 second.</li>
            <li className="font-bold text-lg">Trades will be auto squared-off if losses reach 85% of the capital.</li>
            <li className="font-bold text-lg">Operator-based calls and line trades are invalid and will be removed.</li>
            <li className="font-bold text-lg">Option selling is reserved for loyal traders active for over 1 week.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
