"use client";
import React, { useState, useEffect } from "react";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";

interface CountdownProps {
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const daysLeft = differenceInDays(targetDate, now);
    const hoursLeft = differenceInHours(targetDate, now) % 24;
    const minutesLeft = differenceInMinutes(targetDate, now) % 60;
    const secondsLeft = differenceInSeconds(targetDate, now) % 60;

    return { daysLeft, hoursLeft, minutesLeft, secondsLeft };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex items-center justify-center space-x-3  text-gray-200 p-2 rounded">
      <div className="text-center">
        <p className="text-3xl font-bold">
          {String(timeLeft.daysLeft).padStart(2, "0")}
        </p>
        <p className="text-xs">DAYS</p>
      </div>
      <p className=" mx-8 font-bold ">:</p>
      <div className="text-center">
        <p className="text-3xl font-bold">
          {String(timeLeft.hoursLeft).padStart(2, "0")}
        </p>
        <p className="text-xs">HRS</p>
      </div>
      <p className=" mx-8 font-bold ">:</p>
      <div className="text-center">
        <p className="text-3xl font-bold">
          {String(timeLeft.minutesLeft).padStart(2, "0")}
        </p>
        <p className="text-xs">MINS</p>
      </div>
      <p className=" mx-8 font-bold ">:</p>
      <div className="text-center">
        <p className="text-3xl font-bold">
          {String(timeLeft.secondsLeft).padStart(2, "0")}
        </p>
        <p className="text-xs">SECS</p>
      </div>
    </div>
  );
};

export default Countdown;
