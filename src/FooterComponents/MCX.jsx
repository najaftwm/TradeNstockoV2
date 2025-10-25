export default function MCX() {
  return (
    <div className="min-h-screen bg-[#f2f3f5]">
      {/* Heading Section */}
      <div className="w-full">
        <h6 className="text-7xl md:text-8xl font-black h-100 py-26 px-8 text-white bg-zinc-900 tracking-tight uppercase">
          MCX Trading Guidelines
        </h6>
      </div>

      {/* Content Section */}
      <div className="w-full text-black px-8 py-12 space-y-6 text-lg leading-relaxed">
        {/* Introduction */}
        {/* <p className="font-bold text-xl">
          At TradeNStocko, these MCX Trading Guidelines govern your Multi Commodity Exchange trading activities. Please read and understand these guidelines before engaging in any MCX trading activities.
        </p> */}

        {/* Trading Guidelines */}
        <div>
          <ul className="list-disc pl-6 space-y-2">
            <li className="font-bold text-lg">Intraday trading time: 09:06 AM to 11:20 PM.</li>
            <li className="font-bold text-lg">Profitable positions in futures can be closed after 2 minutes.</li>
            <li className="font-bold text-lg">Loss positions can be exited after 1 second.</li>
            <li className="font-bold text-lg">Market orders will execute: Sell at Bid, Buy at Ask, not LTP.</li>
            <li className="font-bold text-lg">Pending orders will be auto-cancelled after market close.</li>
            <li className="font-bold text-lg">Only one of Target or Stop Loss can be placed per trade.</li>
            <li className="font-bold text-lg">Operator-based calls and line trades will be discarded.</li>
            <li className="font-bold text-lg">If a trade hits an 85% loss, it will be auto squared-off.</li>
            <li className="font-bold text-lg">For bullions & metals, exit positions 5 days before expiry (or 7 days if a weekend is involved).</li>
            <li className="font-bold text-lg">Always monitor expiry dates. If missed, the system will automatically exit your position.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

