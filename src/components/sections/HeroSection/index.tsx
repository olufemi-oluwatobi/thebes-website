"use client";

import React from "react";
import { useRef } from "react";
import Image from "next/image";
import LogoIcon from "@/icons/logo";
import ImageCard from "@/components/sections/HeroSection/ImageCard";
import { useEffect } from "react";
import ArrowUpRight from "@/icons/arrow-up-right";

type ExtendedHTMLDivElement = HTMLDivElement & {
  position?: number;
};

const HeroSection = () => {
  const images = [
    {
      url: "https://thebesuserupload.s3.us-east-2.amazonaws.com/site_assets/Recangle+(1).png",
      alt: "Person crafting pottery",
      width: 380,
      height: 336,
    },
    {
      url: "https://thebesuserupload.s3.us-east-2.amazonaws.com/site_assets/Star+2.png",
      alt: "Musician playing keyboard",
      width: 328,
      height: 328,
    },
    {
      url: "https://thebesuserupload.s3.us-east-2.amazonaws.com/site_assets/Recangle+(2).png",
      alt: "Person filming with phone on tripod",
      width: 400,
      height: 326,
    },
    {
      url: "https://thebesuserupload.s3.us-east-2.amazonaws.com/site_assets/Recangle+(3).png",
      alt: "Person wearing a colorful outfit with neon lights",
      width: 400,
      height: 336,
    },
    {
      url: "https://thebesuserupload.s3.us-east-2.amazonaws.com/site_assets/Ellipse+2.png",
      alt: "Person holding a camera",
      width: 336,
      height: 336,
    },
    {
      url: "https://thebesuserupload.s3.us-east-2.amazonaws.com/site_assets/Star+1+(1).png",
      alt: "Person holding a camera",
      width: 328,
      height: 328,
    },
  ];

  const scrollRef = useRef<ExtendedHTMLDivElement>(null);

  const animate = () => {
    if (scrollRef.current) {
      const element = scrollRef.current as ExtendedHTMLDivElement;
      if (typeof element.position === "number") {
        // Ensure position is initialized
        element.style.transform = `translateX(${element.position}px)`;
        element.position -= 2; // Adjust this value to control the speed

        if (Math.abs(element.position) >= element.scrollWidth / 2) {
          element.position = 0;
        }

        requestAnimationFrame(animate);
      }
    }
  };

  useEffect(() => {
    const element = scrollRef.current;
    if (element) {
      element.position = 0; // Initialize position
      animate();
    }

    return () => {
      if (element) {
        element.position = undefined; // Cleanup position to avoid memory leaks
      }
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      const element = scrollRef.current;
      element.position = 0; // Initial position
      animate();
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.position = undefined; // Cleanup position
      }
    };
  }, []);

  return (
    <div className="w-full overflow-x-hidden bg-brown text-white mx-auto ">
      <header className="flex my-8 px-[5%] md:px-[2.5%] justify-between items-center ">
        <div className="">
          <LogoIcon />
        </div>
        <button className="hidden md:flex font-xl font-sans justify-center items-center bg-transparent text-white font-semibold py-2 md:py-4 px-4 md:px-12 border-2 border-white rounded-full">
          Join Waitlist
          <ArrowUpRight strokeWidth={2.5} className="w-5 h-5 font-bold ml-2" />
        </button>
      </header>
      <main className="flex flex-col text-center items-center justify-center mt-10 ">
        <h4>
          <span className="text-white mt-4 md:mt-0 font-bold text-md  md:text-xl capitalize font-sans">
            WELCOME TO THEBES
          </span>
        </h4>
        <h2 className=" text-white text-3xl md:text-4xl xl:text-6xl 2xl:text-8xl mt-4  md:w-3/5 xl:w-1/2 font-extrabold font-serif leading-tight">
          The Contest Network
        </h2>
        <span className=" text-gray-200 text-md xl:text-lg mt-4 mb-8 w-[90%]  md:w-2/4 font-sans">
          Got talent? Take it to Thebes and shine globally. Dive into
          video-based contests spanning singing, dancing, fashion, acting,
          storytelling, animation, and beyond. Win votes, hearts and prizes.
        </span>
        <button className="flex  font-semibold font-xl justify-center items-center mt-4 bg-primary text-brown py-4 px-12  rounded-full">
          <span className="font-3 xl font-sans">Join Waiting List</span>
          <ArrowUpRight strokeWidth={2.5} className="w-5 h-5 font-bold ml-2" />
        </button>

        {/* <div>
          <div
            className=" overflow-hidden mt-32 md:mt-32 left-0 flex gap-12"
            ref={scrollRef}
          >
            {images.concat(images).map((item, idx) => (
              <ImageCard
                width={item.width}
                height={item.height}
                image={item.url}
                key={idx}
              />
            ))}
          </div>
        </div> */}
      </main>
      <div className="w-full mt-12 md:mt-24 ">
        <Image
          height={699}
          width={2550}
          objectFit={"contain"}
          alt="alt image"
          src="https://thebesuserupload.s3.us-east-2.amazonaws.com/site_assets/main+banner/main_banner_2+(1)+(1).png"
        />
      </div>
    </div>
  );
};

export default HeroSection;
