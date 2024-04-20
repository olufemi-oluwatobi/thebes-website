"use client";

import React from "react";
import { useEffect, useState } from "react";
import ArrowUpRight from "@/icons/arrow-up-right";
import ScheduleItem from "./ScheduleItem";
import VideoCard from "./VideoCard";

const contests = [
  {
    contestName: "Microphone Studio Challenge",
    date: "May 2020",
    iconSrc:
      "https://thebesuserupload.s3.us-east-2.amazonaws.com/site_assets/%F0%9F%91%9C+Handbag.svg",
  },
  {
    contestName: "Performing Arts Showdown",
    date: "May 2020",
    iconSrc:
      "https://thebesuserupload.s3.us-east-2.amazonaws.com/site_assets/%F0%9F%8E%AD+Performing+arts.svg",
  },
  {
    contestName: "Designer Handbag Runway",
    date: "May 2020",
    iconSrc:
      "https://thebesuserupload.s3.us-east-2.amazonaws.com/site_assets/%F0%9F%91%9C+Handbag.svg",
  },
  {
    contestName: "Dance Off Extravaganza",
    date: "May 2020",
    iconSrc:
      "https://thebesuserupload.s3.us-east-2.amazonaws.com/site_assets/%F0%9F%92%83+Woman+dancing.svg",
  },
];

const HowItWorksSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contests.length);
    }, 2000); // change index every 2 seconds

    return () => clearInterval(intervalId); // clear interval on unmount
  }, []);

  return (
    <section className="bg-white flex flex-col items-center mt-10 py-10 px-5">
      <div className=" font-sans text-xl mb-3 text-primary font-semibold text-left ">
        HOW IT WORKS
      </div>
      <div className=" mb-20  font-bold  text-6xl   font-serif ">
        Your Ticket To Get Started
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between">
        <div className="flex-1">
          <div className="bg-primary px-8 py-20 rounded-3xl">
            {contests.map((contest, index) => (
              <ScheduleItem
                className="mb-5"
                date={contest.date}
                placeholderMode={currentIndex !== index}
                key={contest.contestName}
                contestName={contest.contestName}
                iconSrc={contest.iconSrc}
              />
            ))}
            <h3 className="font-serif text-5xl mt-20 text-left font-bold w-3/4  mb-4">
              Schedule-Based Contests
            </h3>
            <p className="font-sans mt-4 text-[#5a585e] text-xl">
              Discover and participate in a year-long calendar of themed
              contests across various art forms.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 ml-10 mt-10 md:mt-0 ">
          <div className="mb-6 max-w-[400px] rounded-4xl">
            <div className="bg-gray-100 p-8 px-8 pb-16  max-w-[400px]  rounded-3xl">
              <h3 className="font-serif font-bold text-4xl mb-4">
                Fair & Inclusive Algorithms
              </h3>
              <p className="font-sans text-sm">
                Every submission is showcased to all users, ensuring equal
                opportunity and recognition for all artists.
              </p>
            </div>
          </div>
          <div className="bg-brown h-full max-h-[500px] max-w-[400px] p-8 px-8 pb-16  rounded-3xl">
            <div className=" h-36 ">
              <VideoCard src="https://thebesuserupload.s3.us-east-2.amazonaws.com/site_assets/6875748-hd_1080_2048_25fps.gif" />
            </div>
            <h3 className="font-serif mt-10 font-bold text-white text-4xl mb-4">
              Video-Focused Platform
            </h3>
            <p className="font-sans text-white text-sm">
              Showcase your talent through video submissions and engage with a
              community of creators and voters.
            </p>
          </div>
        </div>
      </div>

      <div className=" mt-32 flex justify-center">
        <button className="flex font-xl justify-center items-center bg-transparent text-black font-semibold py-4 px-12 border-2 border-black rounded-full">
          Join Waitlist
          <ArrowUpRight strokeWidth={2.5} className="w-5 h-5 font-bold ml-2" />
        </button>
      </div>
    </section>
  );
};

export default HowItWorksSection;
