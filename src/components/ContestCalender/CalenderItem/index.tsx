"use client";
import React, { useMemo } from "react";
import Image from "next/legacy/image";
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
      className={`text-white border-b my-10 border-gray-200 md:px-4 py-8 flex flex-col md:flex-row justify-between items-center ${styles.contestItem}`}
    >
      <div className="flex flex-col w-full md:w-auto md:flex-row items-start md:items-center md:pb-10 ">
        <div className="flex  items-center text-gray-200 font-bold text-2xl">
          {String(serialNumber).padStart(2, "0")}
          <span className=" md:hidden font-serif ml-2 text-white text-2xl md:text-7xl font-bold  ">
            {contestName}
          </span>
        </div>
        <div className={` w-full md:w-[250px] md:mx-20 mt-4 md:mt-0 `}>
          <Image
            layout="responsive"
            width={240}
            height={160}
            className="w-full"
            alt="Contest image"
            src="https://thebesuserupload.s3.us-east-2.amazonaws.com/site_assets/Art+form.png"
            // Apply the styles for the image
          />
        </div>
        <div className="text-white font-serif hidden md:flex text-2xl mt-2 md:mt-0 lg:text-5xl 2xl:text-7xl  font-bold">
          {contestName}
        </div>
      </div>
      <div className="font-sans text-2xl mt-6 md:mt-0  w-full md:w-auto uppercase text-gray-200 font-semibold ">
        {dateSection}
      </div>
    </div>
  );
};

export default ContestCalendarItem;
