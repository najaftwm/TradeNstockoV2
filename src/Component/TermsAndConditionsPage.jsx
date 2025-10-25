export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Gradient Banner Heading */}
      <div className="w-full bg-gradient-to-r from-[#1E4A44] to-[#2a6b63] py-26 px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Terms & Conditions</h1>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="max-w-6xl mx-auto p-8 mt-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          
          {/* 1. Trading Hours */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Trading Hours</h2>
            <ul className="space-y-3">
              <li className="text-gray-800 text-lg font-medium">• Trading is available on our platform between 09:16 AM and 03:30 PM (IST).</li>
              <li className="text-gray-800 text-lg font-medium">• Any pending orders will be automatically cancelled after market close.</li>
            </ul>
          </div>

          {/* 2. Order Placement Rules */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Order Placement Rules</h2>
            <ul className="space-y-3">
              <li className="text-gray-800 text-lg font-medium">• Limit orders cannot exceed 4% above the Last Traded Price (LTP).</li>
              <li className="text-gray-800 text-lg font-medium">• Limit orders must match:</li>
              <ul className="ml-6 space-y-2 mt-2">
                <li className="text-gray-800 text-lg font-medium">◦ Sell Orders → Bid Rate</li>
                <li className="text-gray-800 text-lg font-medium">◦ Buy Orders → Ask Rate</li>
              </ul>
              <li className="text-gray-800 text-lg font-medium">• Line trades and operator-driven calls are prohibited.</li>
              <li className="text-gray-800 text-lg font-medium">• Securities under ban status cannot be traded; only existing positions may be squared off.</li>
            </ul>
          </div>

          {/* 3. Auto Square-Off */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Auto Square-Off</h2>
            <ul className="space-y-3">
              <li className="text-gray-800 text-lg font-medium">• Open positions will be auto squared-off if losses reach 90% of your available capital.</li>
              <li className="text-gray-800 text-lg font-medium">• Failure to roll over to the next expiry will result in automatic exit at the current bid/ask rate.</li>
            </ul>
          </div>

          {/* 4. BTST / STBT Restrictions */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">4. BTST / STBT Restrictions</h2>
            <ul className="space-y-3">
              <li className="text-gray-800 text-lg font-medium">• BTST (Buy Today, Sell Tomorrow) and STBT (Sell Today, Buy Tomorrow) are strictly prohibited.</li>
              <li className="text-gray-800 text-lg font-medium">• This includes trades like buying at 03:15 PM and selling the next morning at 09:30 AM.</li>
            </ul>
          </div>

          {/* 5. Dividend Policy */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Dividend Policy</h2>
            <ul className="space-y-3">
              <li className="text-gray-800 text-lg font-medium">• Positions in scripts declaring dividends will be auto squared-off before the dividend record date.</li>
            </ul>
          </div>

          {/* 6. Option Selling Policy */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Option Selling Policy</h2>
            <p className="text-gray-800 text-lg font-medium mb-3">To activate Option Selling:</p>
            <ul className="ml-6 space-y-2 mb-3">
              <li className="text-gray-800 text-lg font-medium">◦ Maintain a minimum daily balance of ₹25,000 before market open.</li>
              <li className="text-gray-800 text-lg font-medium">◦ Only approved clients with active futures trading history are eligible.</li>
            </ul>
            <ul className="space-y-3">
              <li className="text-gray-800 text-lg font-medium">• Profits made without meeting the balance requirement will be void.</li>
              <li className="text-gray-800 text-lg font-medium">• Losses are valid even if below the balance threshold.</li>
              <li className="text-gray-800 text-lg font-medium">• Expiry day profits are valid only if futures were traded in the same script.</li>
            </ul>
          </div>

          {/* 7. Platform Usage */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Platform Usage</h2>
            <ul className="space-y-3">
              <li className="text-gray-800 text-lg font-medium">• After minimizing the platform, refresh upon reopening to view updated portfolio details.</li>
            </ul>
          </div>

          {/* 8. NSE Compliance */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">8. NSE Compliance</h2>
            <ul className="space-y-3">
              <li className="text-gray-800 text-lg font-medium">• All trades must follow NSE regulations and guidelines.</li>
              <li className="text-gray-800 text-lg font-medium">• Non-compliance may lead to trade cancellation or account restrictions.</li>
            </ul>
          </div>

          {/* 9. Additional Rules */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Additional Rules</h2>
            <ul className="space-y-3">
              <li className="text-gray-800 text-lg font-medium">• Profits from fake volume or manipulative trades will be forfeited; losses will be charged to the trader.</li>
              <li className="text-gray-800 text-lg font-medium">• Orders execute only at exchange bid/ask prices; highs, lows, and LTP will not be used for execution.</li>
              <li className="text-gray-800 text-lg font-medium">• Multiple accounts from the same IP are prohibited; profits from such accounts will be removed.</li>
              <li className="text-gray-800 text-lg font-medium">• Stop-loss orders trigger at market price; remaining orders are cancelled after close.</li>
              <li className="text-gray-800 text-lg font-medium">• Dividend and bonus adjustments follow official exchange circulars.</li>
              <li className="text-gray-800 text-lg font-medium">• Trades placed at incorrect prices due to technical errors may be removed without notice.</li>
              <li className="text-gray-800 text-lg font-medium">• Arbitrage between MCX and NSE is not allowed; related profits will be deleted.</li>
            </ul>
          </div>

          {/* 10. Disclaimer */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Disclaimer</h2>
            <ul className="space-y-3">
              <li className="text-gray-800 text-lg font-medium">• TradeNStocko reserves the right to modify these terms at any time. Continued use of our services implies acceptance.</li>
              <li className="text-gray-800 text-lg font-medium">• Trading carries risk. You may lose your invested capital. Trade responsibly.</li>
            </ul>
          </div>

          {/* 11. Support */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">11. Support</h2>
            <ul className="space-y-3">
              <li className="text-gray-800 text-lg font-medium">• Email: support@tns.com</li>
              <li className="text-gray-800 text-lg font-medium">• Phone:</li>
            </ul>
            <p className="text-gray-800 text-lg font-medium mt-3">By using TradeNStocko, you acknowledge that you have read, understood, and accepted these Terms and Conditions.</p>
          </div>

        </div>
      </div>
    </div>
  );
}
