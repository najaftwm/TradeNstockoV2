import { MessageCircle } from "lucide-react";

export default function FloatingWhatsAppButton() {
  // Replace with your actual WhatsApp number (country code + number, no + or spaces)
  const whatsappNumber = ""; // Example: 919876543210 for India
  const whatsappMessage = "Hi, I want to know more about TNS Trading App";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="group relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transform transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing ring animation */}
        <span className="absolute inset-0 rounded-full border-2 border-green-500 animate-ping opacity-75"></span>
        
        {/* Icon */}
        <MessageCircle className="w-7 h-7 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
        
        {/* Tooltip */}
        <span className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 shadow-lg">
          Chat with us on WhatsApp
        </span>
      </button>
    </div>
  );
}