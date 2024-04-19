"use client";

import React from "react";
import ImageCard from "@/components/sections/HeroSection/ImageCard";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import useMeasure from "react-use-measure";
import ArrowUpRight from "@/icons/arrow-up-right";
import styles from "./index.module.css";
import Image from "next/image";

const HeroSection = () => {
  const images = [
    {
      url: "https://thebesuserupload.s3.us-east-2.amazonaws.com/site_assets/Recangle+(1).png",
      alt: "Person crafting pottery",
    },
    {
      url: "https://thebesuserupload.s3.us-east-2.amazonaws.com/site_assets/Star+2.png",
      alt: "Musician playing keyboard",
    },
    {
      url: "https://thebesuserupload.s3.us-east-2.amazonaws.com/site_assets/Recangle+(2).png",
      alt: "Person filming with phone on tripod",
    },
    {
      url: "https://thebesuserupload.s3.us-east-2.amazonaws.com/site_assets/Recangle+(3).png",
      alt: "Person wearing a colorful outfit with neon lights",
    },
    {
      url: "https://thebesuserupload.s3.us-east-2.amazonaws.com/site_assets/Ellipse+2.png",
      alt: "Person holding a camera",
    },
    {
      url: "https://thebesuserupload.s3.us-east-2.amazonaws.com/site_assets/Star+1+(1).png",
      alt: "Person holding a camera",
    },
  ];

  const duration = 25; // Use a single duration for the animation
  const xTranslation = useMotionValue(0);
  let [ref, { width }] = useMeasure();

  useEffect(() => {
    const finalPosition = -width / 2 - 8;
    const controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: duration,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls?.stop;
  }, [xTranslation, duration, width]);

  return (
    <div className="w-full bg-brown text-white mx-auto px-4 sm:px-6 lg:px-8">
      <header className="flex justify-between items-center py-6">
        <h1 className="text-4xl font-extrabold">Thebes.</h1>
        <button className="flex font-xl justify-center items-center bg-transparent text-white font-semibold py-4 px-12 border-2 border-white rounded-full">
          Join Waitlist
          <ArrowUpRight strokeWidth={2.5} className="w-5 h-5 font-bold ml-2" />
        </button>
      </header>
      <main className="flex flex-col text-center items-center justify-center mt-10 mb-20">
        <h4>
          <span className="text-white font-bold text-xl mb-4 capitalize font-sans">
            WELCOME TO THEBES
          </span>
        </h4>
        <h2 className="text-8xl w-2/5 font-extrabold mb-6 font-serif leading-tight">
          The Social Contest Network
        </h2>
        <button className="flex font-semibold font-xl justify-center items-center mt-4 bg-primary text-brown py-4 px-12 border-2 rounded-full">
          <span className="font-2xl">Download App</span>
          <ArrowUpRight strokeWidth={2.5} className="w-5 h-5 font-bold ml-2" />
        </button>
        <motion.div
          className="absolute left-0 flex gap-4"
          style={{ x: xTranslation }}
          ref={ref}
        >
          {[...images, ...images].map((item, idx) => (
            <ImageCard image={item.url} key={idx} />
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default HeroSection;
