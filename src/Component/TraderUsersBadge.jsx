import React, { useEffect, useState } from 'react';

const TraderUsersBadge = () => {
  const [count, setCount] = useState(1);
  const target = 75;
  const duration = 2000;
  const userImages = [
    'https://randomuser.me/api/portraits/men/32.jpg',
    'https://randomuser.me/api/portraits/women/44.jpg',
    'https://randomuser.me/api/portraits/men/65.jpg',
    'https://randomuser.me/api/portraits/men/20.jpg',
  ];

  useEffect(() => {
    let start = 1;
    const end = target;
    const incrementTimer = Math.floor(duration / (end - start));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTimer);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="inline-flex items-center bg-gray-100 px-6 py-3 rounded-full shadow-md w-auto cursor-default select-none">
      {/* Avatar Images */}
      <div className="flex -space-x-3">
        {userImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`user-${index}`}
            className="w-10 h-10 rounded-full border-2 border-white object-cover"
          />
        ))}
      </div>

      {/* Counter + Text */}
      <div className="ml-4">
        <div className="text-3xl font-bold text-gray-800 leading-none">{count}k+</div>
        <div className="text-sm text-gray-500">Trader Users</div>
      </div>
    </div>
  );
};

export default TraderUsersBadge;