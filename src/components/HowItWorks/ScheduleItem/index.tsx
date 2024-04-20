import Image from "next/image";
import React, { HTMLAttributes } from "react";
import style from "./ScheduleItem.module.css";

interface ScheduleItemProps extends HTMLAttributes<HTMLDivElement> {
  placeholderMode: boolean;
  contestName?: string;
  date?: string;
  iconSrc?: string;
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({
  placeholderMode,
  contestName,
  date,
  iconSrc,
  className,
}) => {
  // Additional classes for animation
  const boxBgColorClass = placeholderMode ? "bg-[#ece4ff]" : "bg-white";
  const dateWidthClass = placeholderMode ? "w-24" : "w-32"; // Adjust width as necessary

  return (
    <div
      className={`${className} w-full rounded-2xl ${boxBgColorClass} px-4 py-2 flex justify-between items-center transition-all duration-300 ease-in-out`}
    >
      <div className="flex items-center">
        <div className=" p-2 border-2 border-gray-100 rounded-full    relative">
          <Image
            src={iconSrc || "/placeholder-icon.png"}
            alt="Icon"
            width={28}
            height={28}
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div className="ml-4">
          {placeholderMode ? (
            <div className="flex">
              <div className="w-32 h-4 bg-[#F1F1F1] rounded-md animate-pulse" />
              <div className="w-12 h-4 ml-2 bg-[#F1F1F1] rounded-md animate-pulse" />
            </div>
          ) : (
            <span className="text-md font-bold font-serif ">{contestName}</span>
          )}
        </div>
      </div>
      <div
        className={`flex items-center ${dateWidthClass}  h-8 bg-[#F1F1F1] rounded-full justify-center animate-width-change transition-all duration-300 ease-linear`}
      >
        {placeholderMode ? (
          <div className="w-full h-full  rounded-full animate-pulse" />
        ) : (
          <div className="flex justify-center">
            <Image
              src={
                "https://thebesuserupload.s3.us-east-2.amazonaws.com/site_assets/clock+1.svg"
              }
              alt="Icon"
              width={14}
              height={14}
              objectFit="cover"
              className="rounded-full"
            />

            <span className="text-sm ml-2 uppercase text-[#939197] ">
              {date}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScheduleItem;

// You need to add the following custom CSS to your global.css to handle the width animation
// .animate-width-change will handle the transition of width for the date box
