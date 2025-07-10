import { useState, useEffect } from 'react';

const DealOfTheDay = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 1,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Start countdown from 1 hour when component mounts
    const totalSeconds = 60 * 60; // 1 hour in seconds
    let secondsLeft = totalSeconds;

    const timer = setInterval(() => {
      secondsLeft -= 1;
      
      if (secondsLeft <= 0) {
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        const hours = Math.floor(secondsLeft / 3600);
        const minutes = Math.floor((secondsLeft % 3600) / 60);
        const seconds = secondsLeft % 60;
        
        setTimeLeft({ hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    return time.toString().padStart(2, '0');
  };

  return (
    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg p-8 mb-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Deal of the Day</h2>
        <p className="text-xl mb-4">Fresh Organic Vegetables - 20% Off!</p>
        <div className="flex justify-center items-center space-x-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold">{formatTime(timeLeft.hours)}</div>
            <div className="text-sm">Hours</div>
          </div>
          <div className="text-2xl">:</div>
          <div className="text-center">
            <div className="text-2xl font-bold">{formatTime(timeLeft.minutes)}</div>
            <div className="text-sm">Minutes</div>
          </div>
          <div className="text-2xl">:</div>
          <div className="text-center">
            <div className="text-2xl font-bold">{formatTime(timeLeft.seconds)}</div>
            <div className="text-sm">Seconds</div>
          </div>
        </div>
        <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default DealOfTheDay;
