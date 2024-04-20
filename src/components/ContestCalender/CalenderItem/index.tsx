"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import {
  format,
  isWithinInterval,
  addDays,
  formatDistanceToNowStrict,
} from "date-fns";
import Countdown from "./Countdown";
import styles from "./ContestCalenderItem.module.css";

interface ContestCalendarItemProps {
  serialNumber: number;
  contestName: string;
  date?: Date; // expecting a Date object for simplicity
}

const ContestCalendarItem: React.FC<ContestCalendarItemProps> = ({
  serialNumber,
  contestName,
  date,
}) => {
  const dateSection = useMemo(() => {
    if (!date) return "Coming Soon";
    const now = new Date();

    const isWithin30Days = isWithinInterval(date, {
      start: now,
      end: addDays(now, 30),
    });

    const formattedDate = isWithin30Days
      ? formatDistanceToNowStrict(date)
      : format(date, "MMMM dd, yyyy");

    return isWithin30Days ? <Countdown targetDate={date} /> : formattedDate;
  }, [date]);

  return (
    <div
      className={`text-white border-b my-10 border-gray-200 p-4 py-8 flex justify-between items-center ${styles.contestItem}`}
    >
      <div className="flex items-center pb-10 ">
        <div className="text-gray-200 font-bold text-2xl">
          {String(serialNumber).padStart(2, "0")}
        </div>
        <div className={` mx-20`}>
          <Image
            width={240}
            height={160}
            layout="intrinsic"
            alt="Contest image"
            src="https://thebesuserupload.s3.us-east-2.amazonaws.com/site_assets/Art+form.png"
            // Apply the styles for the image
          />
        </div>
        <div className="text-white text-7xl font-bold">{contestName}</div>
      </div>
      <div className="font-sans text-2xl uppercase text-gray-200 font-semibold text-left">
        {dateSection}
      </div>
    </div>
  );
};

export default ContestCalendarItem;
