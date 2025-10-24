export default function NSE() {
  return (
    <div className="min-h-screen bg-[#f2f3f5]">
      {/* Heading Section */}
      <div className="w-full">
        <h6 className="text-7xl md:text-8xl font-black h-100 py-26 px-8 text-white bg-zinc-900 tracking-tight uppercase">
          NSE Trading Rules
        </h6>
      </div>

      {/* Content Section */}
      <div className="w-full text-black px-8 py-12 space-y-6 text-lg leading-relaxed">
        {/* Introduction */}
        <p className="font-bold text-xl">
          At TradeNStocko, these NSE Trading Rules govern your trading activities on the National Stock Exchange. Please read and understand these rules before engaging in any trading activities.
        </p>

        {/* Trading Rules */}
        <div>
          <ul className="list-disc pl-6 space-y-2">
            <li className="font-bold text-lg">Scalping is strictly prohibited.</li>
            <li className="font-bold text-lg">Profitable trades in stock futures may be exited only after 2 minutes.</li>
            <li className="font-bold text-lg">Loss trades can be exited after 1 second.</li>
            <li className="font-bold text-lg">Trading hours: 09:16 AM to 03:20 PM.</li>
            <li className="font-bold text-lg">Market Orders: Sell at Bid Price, Buy at Ask Price—not LTP.</li>
            <li className="font-bold text-lg">Only one of either a Target or Stop Loss can be placed per trade.</li>
            <li className="font-bold text-lg">Operator-based calls and line trades will be deleted.</li>
            <li className="font-bold text-lg">Positions not shifted to the new expiry will be auto-exited at Bid/Ask during expiry.</li>
            <li className="font-bold text-lg">BTST/STBT is not allowed. (e.g., buying at 3:20 PM and selling the next day is not permitted.)</li>
            <li className="font-bold text-lg">Trades reaching a 90% capital loss will be automatically squared-off.</li>
            <li className="font-bold text-lg">Frequent profit booking within 2–3 minutes is seen as scalping and is prohibited.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
