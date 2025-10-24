export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#f2f3f5]">
      {/* Heading Section */}
      <div className="w-full">
        <h6 className="text-7xl md:text-8xl font-black h-100 py-26 px-8 text-white bg-zinc-900 tracking-tight uppercase">
          Terms & Conditions
        </h6>
      </div>

      {/* Content Section */}
      <div className="w-full text-black px-8 py-12 space-y-6 text-lg leading-relaxed ">
        {/* Introduction */}
        <p className="font-bold text-xl">
          At TradeNStocko, these Terms & Conditions govern your use of our trading platform and services. By using our platform, you agree to comply with all terms outlined below.
        </p>

        {/* 1. Trading Hours */}
        <div>
          <p className="font-bold text-2xl mb-3">1. Trading Hours</p>
          <ul className="list-disc pl-6 space-y-2">
            <li className="font-bold text-lg">Trading is available on our platform between 09:16 AM and 03:30 PM (IST).</li>
            <li className="font-bold text-lg">Any pending orders will be automatically cancelled after market close.</li>
          </ul>
        </div>

        {/* 2. Order Placement Rules */}
        <div>
          <p className="font-bold text-2xl mb-3">2. Order Placement Rules</p>
          <ul className="list-disc pl-6 space-y-2">
            <li className="font-bold text-lg">Limit orders cannot exceed 4% above the Last Traded Price (LTP).</li>
            <li className="font-bold text-lg">Limit orders must match:</li>
            <ul className="list-disc pl-8 space-y-1 mt-2">
              <li className="font-bold text-lg">Sell Orders → Bid Rate</li>
              <li className="font-bold text-lg">Buy Orders → Ask Rate</li>
            </ul>
            <li className="font-bold text-lg">Line trades and operator-driven calls are prohibited.</li>
            <li className="font-bold text-lg">Securities under ban status cannot be traded; only existing positions may be squared off.</li>
          </ul>
        </div>

        {/* 3. Auto Square-Off */}
        <div>
          <p className="font-bold text-2xl mb-3">3. Auto Square-Off</p>
          <ul className="list-disc pl-6 space-y-2">
            <li className="font-bold text-lg">Open positions will be auto squared-off if losses reach 90% of your available capital.</li>
            <li className="font-bold text-lg">Failure to roll over to the next expiry will result in automatic exit at the current bid/ask rate.</li>
          </ul>
        </div>

        {/* 4. BTST / STBT Restrictions */}
        <div>
          <p className="font-bold text-2xl mb-3">4. BTST / STBT Restrictions</p>
          <ul className="list-disc pl-6 space-y-2">
            <li className="font-bold text-lg">BTST (Buy Today, Sell Tomorrow) and STBT (Sell Today, Buy Tomorrow) are strictly prohibited.</li>
            <li className="font-bold text-lg">This includes trades like buying at 03:15 PM and selling the next morning at 09:30 AM.</li>
          </ul>
        </div>

        {/* 5. Dividend Policy */}
        <div>
          <p className="font-bold text-2xl mb-3">5. Dividend Policy</p>
          <ul className="list-disc pl-6 space-y-2">
            <li className="font-bold text-lg">Positions in scripts declaring dividends will be auto squared-off before the dividend record date.</li>
          </ul>
        </div>

        {/* 6. Option Selling Policy */}
        <div>
          <p className="font-bold text-2xl mb-3">6. Option Selling Policy</p>
          <p className="font-bold text-lg mb-3">To activate Option Selling:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li className="font-bold text-lg">Maintain a minimum daily balance of ₹25,000 before market open.</li>
            <li className="font-bold text-lg">Only approved clients with active futures trading history are eligible.</li>
          </ul>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li className="font-bold text-lg">Profits made without meeting the balance requirement will be void.</li>
            <li className="font-bold text-lg">Losses are valid even if below the balance threshold.</li>
            <li className="font-bold text-lg">Expiry day profits are valid only if futures were traded in the same script.</li>
          </ul>
        </div>

        {/* 7. Platform Usage */}
        <div>
          <p className="font-bold text-2xl mb-3">7. Platform Usage</p>
          <ul className="list-disc pl-6 space-y-2">
            <li className="font-bold text-lg">After minimizing the platform, refresh upon reopening to view updated portfolio details.</li>
          </ul>
        </div>

        {/* 8. NSE Compliance */}
        <div>
          <p className="font-bold text-2xl mb-3">8. NSE Compliance</p>
          <ul className="list-disc pl-6 space-y-2">
            <li className="font-bold text-lg">All trades must follow NSE regulations and guidelines.</li>
            <li className="font-bold text-lg">Non-compliance may lead to trade cancellation or account restrictions.</li>
          </ul>
        </div>

        {/* 9. Additional Rules */}
        <div>
          <p className="font-bold text-2xl mb-3">9. Additional Rules</p>
          <ul className="list-disc pl-6 space-y-2">
            <li className="font-bold text-lg">Profits from fake volume or manipulative trades will be forfeited; losses will be charged to the trader.</li>
            <li className="font-bold text-lg">Orders execute only at exchange bid/ask prices; highs, lows, and LTP will not be used for execution.</li>
            <li className="font-bold text-lg">Multiple accounts from the same IP are prohibited; profits from such accounts will be removed.</li>
            <li className="font-bold text-lg">Stop-loss orders trigger at market price; remaining orders are cancelled after close.</li>
            <li className="font-bold text-lg">Dividend and bonus adjustments follow official exchange circulars.</li>
            <li className="font-bold text-lg">Trades placed at incorrect prices due to technical errors may be removed without notice.</li>
            <li className="font-bold text-lg">Arbitrage between MCX and NSE is not allowed; related profits will be deleted.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
