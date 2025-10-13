import { 
  DollarSign, 
  Rocket, 
  UserCheck, 
  Headphones, 
  TrendingUp, 
  Lock, 
  Shield 
} from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    { title: "Lowest Brokerage", description: "We are providing lowest brokerage in the industry", icon: DollarSign },
    { title: "Instant Withdrawal", description: "You will get the instant withdrawal", icon: Rocket },
    { title: "Easily Manageable Account", description: "We provide a hassle-free trading app which is easy to use", icon: UserCheck },
    { title: "24x7 Call Support", description: "We are available 24x7 for support during trading or any transaction", icon: Headphones },
    { title: "Tax Free Trading", description: "Your trades are tax free with us and no ICTI charges apply", icon: TrendingUp },
    { title: "Bank-Grade Data Security", description: "We protect your data like a vault. Your personal and financial info stays private-always.", icon: Lock },
    { title: "100% Trust & Transparency", description: "Trade with confidence knowing your wallet and data are fully secure.", icon: Shield },
  ];

  return (
    <section className="bg-[#EDE8D0] text-black py-20">
      <div className="container mx-auto px-6">

        {/* Decorative Top Line */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-yellow-600 to-transparent"></div>
          <div className="h-1 w-2 bg-yellow-600 mx-2 rounded-full"></div>
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-yellow-600 to-transparent"></div>
        </div>

        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-extrabold">Why Choose TNS Trading App?</h2>
        </div>

        {/* Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gray-700 text-lg leading-relaxed">
            Empowering all traders, TNS Trading App offers a comprehensive platform with professional tools, real-time data, and powerful analytics, all in a user-friendly interface.
          </p>
        </div>

        {/* Features Grid */}
        <div id="features" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}          // fade + move down when leaving viewport
              viewport={{ once: false, amount: 0.2 }} // triggers every time user scrolls
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-white border border-gray-300 rounded-xl p-6 shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Circle Icon */}
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-4 border-yellow-600"></div>
                  <feature.icon className="w-8 h-8 text-yellow-600 relative z-10" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-black">{feature.title}</h3>

                {/* Description */}
                <p className="text-gray-700 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Bottom Line */}
        <div className="flex items-center justify-center mt-16">
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-yellow-600 to-transparent"></div>
          <div className="h-1 w-2 bg-yellow-600 mx-2 rounded-full"></div>
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-yellow-600 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
