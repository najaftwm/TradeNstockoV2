export default function TradingGuidelines() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Gradient Banner Heading */}
      <div className="w-full bg-gradient-to-r from-[#1E4A44] to-[#2a6b63] py-26 px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Trading & Funding Guidelines</h1>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="max-w-6xl mx-auto p-8 mt-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          
          {/* NSE Trading Rules */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">NSE Trading Rules</h2>
            <ul className="space-y-3">
              <li className="text-gray-800 text-lg font-medium">• Scalping is strictly prohibited.</li>
              <li className="text-gray-800 text-lg font-medium">• Profitable trades in stock futures may be exited only after 2 minutes.</li>
              <li className="text-gray-800 text-lg font-medium">• Loss trades can be exited after 1 second.</li>
              <li className="text-gray-800 text-lg font-medium">• Trading hours: 09:16 AM to 03:20 PM.</li>
              <li className="text-gray-800 text-lg font-medium">• Market Orders: Sell at Bid Price, Buy at Ask Price—not LTP.</li>
              <li className="text-gray-800 text-lg font-medium">• Only one of either a Target or Stop Loss can be placed per trade.</li>
              <li className="text-gray-800 text-lg font-medium">• Operator-based calls and line trades will be deleted.</li>
              <li className="text-gray-800 text-lg font-medium">• Positions not shifted to the new expiry will be auto-exited at Bid/Ask during expiry.</li>
              <li className="text-gray-800 text-lg font-medium">• BTST/STBT is not allowed. (e.g., buying at 3:20 PM and selling the next day is not permitted.)</li>
              <li className="text-gray-800 text-lg font-medium">• Trades reaching a 90% capital loss will be automatically squared-off.</li>
              <li className="text-gray-800 text-lg font-medium">• Frequent profit booking within 2–3 minutes is seen as scalping and is prohibited.</li>
            </ul>
          </div>

          {/* Options Trading Guidelines */}
          <div id="options-trading">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Options Trading Guidelines</h2>
            <ul className="space-y-3">
              <li className="text-gray-800 text-lg font-medium">• Scalping in options trading is not allowed.</li>
              <li className="text-gray-800 text-lg font-medium">• Profitable trades (CE/PE) can be exited only after 5 minutes.</li>
              <li className="text-gray-800 text-lg font-medium">• Loss trades can be exited after 1 second.</li>
              <li className="text-gray-800 text-lg font-medium">• Trades will be auto squared-off if losses reach 85% of the capital.</li>
              <li className="text-gray-800 text-lg font-medium">• Operator-based calls and line trades are invalid and will be removed.</li>
              <li className="text-gray-800 text-lg font-medium">• Option selling is reserved for loyal traders active for over 1 week.</li>
            </ul>
          </div>

          {/* MCX Trading Guidelines */}
          <div id="mcx-trading">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">MCX Trading Guidelines</h2>
            <ul className="space-y-3">
              <li className="text-gray-800 text-lg font-medium">• Intraday trading time: 09:06 AM to 11:20 PM.</li>
              <li className="text-gray-800 text-lg font-medium">• Profitable positions in futures can be closed after 2 minutes.</li>
              <li className="text-gray-800 text-lg font-medium">• Loss positions can be exited after 1 second.</li>
              <li className="text-gray-800 text-lg font-medium">• Market orders will execute: Sell at Bid, Buy at Ask, not LTP.</li>
              <li className="text-gray-800 text-lg font-medium">• Pending orders will be auto-cancelled after market close.</li>
              <li className="text-gray-800 text-lg font-medium">• Only one of Target or Stop Loss can be placed per trade.</li>
              <li className="text-gray-800 text-lg font-medium">• Operator-based calls and line trades will be discarded.</li>
              <li className="text-gray-800 text-lg font-medium">• If a trade hits an 85% loss, it will be auto squared-off.</li>
              <li className="text-gray-800 text-lg font-medium">• For bullions & metals, exit positions 5 days before expiry (or 7 days if a weekend is involved).</li>
              <li className="text-gray-800 text-lg font-medium">• Always monitor expiry dates. If missed, the system will automatically exit your position.</li>
            </ul>
          </div>

          {/* Fund Adding Guidelines */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Fund Adding Guidelines</h2>
            <ul className="space-y-3">
              <li className="text-gray-800 text-lg font-medium">• Minimum fund addition: ₹1,000 or more.</li>
              <li className="text-gray-800 text-lg font-medium">• Trial transfers such as ₹1, ₹5, or ₹100 are not accepted.</li>
              <li className="text-gray-800 text-lg font-medium">• Pay-in approval may take 3–4 minutes or more depending on the working days.</li>
              <li className="text-gray-800 text-lg font-medium">• Always verify the current pay-in details before initiating any transfer.</li>
              <li className="text-gray-800 text-lg font-medium">• Bank/UPI details may change without prior notice—check each time before depositing.</li>
              <li className="text-gray-800 text-lg font-medium">• Mistakes during fund transfers (incorrect UPI/Bank entry) are solely the trader's responsibility.</li>
            </ul>
          </div>

          {/* Withdrawal / Payout Guidelines */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Withdrawal / Payout Guidelines</h2>
            <ul className="space-y-3">
              <li className="text-gray-800 text-lg font-medium">• Minimum withdrawal amount: ₹1,000.</li>
              <li className="text-gray-800 text-lg font-medium">• Withdrawal bank account must be in the name of the trading account holder.</li>
              <li className="text-gray-800 text-lg font-medium">• Requests using bank accounts of family or others will be rejected.</li>
              <li className="text-gray-800 text-lg font-medium">• For example, if the trading account is in the name of Pankaj Chawala, the payout will only be made to Pankaj Chawala's bank account.</li>
              <li className="text-gray-800 text-lg font-medium">• Payout processing time: 30 minutes to 4 hours.</li>
              <li className="text-gray-800 text-lg font-medium">• Withdrawal timings: 9:00 AM – 6:00 PM. Requests after 6:00 PM will be processed on the next working day.</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
