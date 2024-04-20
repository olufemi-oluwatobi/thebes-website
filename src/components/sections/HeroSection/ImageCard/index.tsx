import React from "react";
import Image from "next/legacy/image";

interface CardProps {
  image: string;
}

const Card: React.FC<CardProps> = ({ image }) => {
  if (!image) {
    console.error("Image source is undefined.");
    return null;
  }

  return (
    <div className="relative overflow-hidden h-[350px] min-w-[400px] bg-slate-400 rounded-xl flex justify-center items-center">
      <Image src={image} alt={`Image of ${image}`} layout="fill" />
    </div>
  );
};

export default Card;
