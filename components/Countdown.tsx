"use client";

import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string; // Format: "Mar 07, 2026 15:00:00"
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const countDownDate = new Date(targetDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        setIsExpired(true);
        return;
      }

      // Time calculations
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    // Update immediately
    updateCountdown();

    // Update every second
    const interval = setInterval(updateCountdown, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [targetDate]);

  if (isExpired) {
    return (
      <div className="flex justify-center items-center">
        <h2 className="text-2xl font-bold text-gray-800">We are live!</h2>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center font-sans">
      <div className="countdown-container flex gap-4 text-center">
        {/* Days */}
        <div className="time-box bg-gray-100 p-4 rounded-lg min-w-17.5 shadow-md lg:p-4 lg:rounded-lg lg:shadow-md md:p-4 md:rounded-lg md:shadow-md sm:p-0 sm:rounded-none sm:shadow-sm sm:min-w-0">
          <span className="number block text-4xl font-bold text-gray-800 lg:text-4xl md:text-3xl sm:text-xl">
            {timeLeft.days}
          </span>
          <span className="label text-xs uppercase text-gray-600 tracking-wider mt-1 block lg:text-xs md:text-xs sm:text-[8px]">
            Days
          </span>
        </div>

        {/* Hours */}
        <div className="time-box bg-gray-100 p-4 rounded-lg min-w-17.5 shadow-md lg:p-4 lg:rounded-lg lg:shadow-md md:p-4 md:rounded-lg md:shadow-md sm:p-0 sm:rounded-none sm:shadow-sm sm:min-w-0">
          <span className="number block text-4xl font-bold text-gray-800 lg:text-4xl md:text-3xl sm:text-xl">
            {timeLeft.hours}
          </span>
          <span className="label text-xs uppercase text-gray-600 tracking-wider mt-1 block lg:text-xs md:text-xs sm:text-[8px]">
            Hours
          </span>
        </div>

        {/* Minutes */}
        <div className="time-box bg-gray-100 p-4 rounded-lg min-w-17.5 shadow-md lg:p-4 lg:rounded-lg lg:shadow-md md:p-4 md:rounded-lg md:shadow-md sm:p-0 sm:rounded-none sm:shadow-sm sm:min-w-0">
          <span className="number block text-4xl font-bold text-gray-800 lg:text-4xl md:text-3xl sm:text-xl">
            {timeLeft.minutes}
          </span>
          <span className="label text-xs uppercase text-gray-600 tracking-wider mt-1 block lg:text-xs md:text-xs sm:text-[8px]">
            Mins
          </span>
        </div>

        {/* Seconds - Hidden on mobile */}
        <div className="time-box bg-gray-100 p-4 rounded-lg min-w-17.5 shadow-md lg:p-4 lg:rounded-lg lg:shadow-md md:p-4 md:rounded-lg md:shadow-md sm:show">
          <span className="number block text-4xl font-bold text-gray-800 lg:text-4xl md:text-3xl">
            {timeLeft.seconds}
          </span>
          <span className="label text-xs uppercase text-gray-600 tracking-wider mt-1 block lg:text-xs md:text-xs">
            Secs
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
