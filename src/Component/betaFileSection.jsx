import React from 'react';
import qrCode from '../assets/qr-code.png';

const BetaFileSection = () => {
    return (
        <div className="flex items-end justify-center py-6 px-6 pt-10 bg-gray-100">
            <div className="flex flex-col items-center">
                <a
                    href="/app_beta_version.apk" // your real APK link
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={qrCode}
                        alt="QR Code"
                        className="w-56 h-56 md:w-72 md:h-72 object-contain rounded-lg shadow-lg 
                       hover:scale-105 transition-transform duration-300 border border-gray-300 bg-white"
                    />
                </a>
                <a
                    href="/app_beta_version.apk"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md 
                               hover:bg-blue-800 transition duration-300"
                >
                    Download the app now
                </a>
            </div>
        </div>
    );
};

export default BetaFileSection;

