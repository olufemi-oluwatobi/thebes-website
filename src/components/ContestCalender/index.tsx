// Calendar.tsx
import React from "react";
import ContestCalendarItem from "./CalenderItem";
// Dummy contest data
const contests = [
  {
    serialNumber: 1,
    contestName: "Singing Contest",
    date: new Date(2024, 4, 10),
  },
  { serialNumber: 2, contestName: "Dance Off", date: new Date(2024, 5, 12) },
  { serialNumber: 3, contestName: "Art Battle" },
  {
    serialNumber: 4,
    contestName: "Cook-off Challenge",
  },
  {
    serialNumber: 5,
    contestName: "Coding Marathon",
  },
];

const Calendar: React.FC = () => {
  return (
    <div className="space-y-4 flex flex-col justify-center items-center bg-brown my-10 w-full px-[5%] py-[7%] md:py-[5%] ">
      <section className="w-full  md:pb-20  text-black   flex flex-col md:flex-row items-center justify-between">
        <div className="   ">
          <div className=" font-sans text-md md:text-xl text-primary font-semibold text-left ">
            2024 PILOT SEASON SCHEDULE
          </div>
          <div className=" mt-2 w-full md:w-4/6 text-white font-bold text-4xl  md:text-7xl   font-serif text-left  ">
            Get recognised from anywhere around the world
          </div>
        </div>
        <div className=" self-end flex align-baseline mt-8 md:mt-0  w-full  md:w-3/5">
          <div className=" text-gray-200 text-md md:text-xl  text-left w-full md:w-[80%] leading-loose ">
            At Thebes, our contest season is a year-long odyssey of art. It
            kicks off with Stage Zero—open entry for all. Every stage of each
            contest brings a new theme: painting, music, dance, digital arts,
            each culminating in global votes to select winners who advance. The
            pace quickens with quarterly semifinals and regional finals,
            building to the grand finale where regional victors clash for glory.
          </div>
        </div>
      </section>
      <div className="w-full">
        {contests.map((contest) => (
          <ContestCalendarItem
            key={contest.serialNumber}
            serialNumber={contest.serialNumber}
            contestName={contest.contestName}
            date={contest.date}
          />
        ))}
      </div>
      <button className="flex font-xl w-fit justify-center items-center bg-transparent text-white font-semibold py-4 px-12 border-2 border-white rounded-full">
        More to be added
      </button>
    </div>
  );
};

export default Calendar;
