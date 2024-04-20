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
    <div className="space-y-4 pb-32  flex flex-col justify-center items-center bg-brown my-10 w-full px-[7%] ">
      <section className="w-full  py-20 text-black   flex items-center justify-between">
        <div className="   ">
          <div className=" font-sans text-xl text-primary font-semibold text-left ">
            PILOT CALENDER
          </div>
          <div className=" mt-12 w-4/6 text-white font-bold  text-8xl   font-serif text-left  ">
            Get recognised from anywhere around the world
          </div>
        </div>
        <div className=" self-end flex align-baseline   w-2/5">
          <div className=" text-gray-200  font-medium text-2xl text-left w-[80%] leading-12 ">
            Thebes also known as “The Social Contest Network” is a platform that
            organizes contests across all works of art. Thebes also has an app
            where users can watch these contests, vote, and eject and determine
            the winner of each contest.
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