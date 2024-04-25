import React from "react";
import Image from "next/legacy/image";

interface CardProps {
  image: string;
  width?: number;
  height?: number;
}

const Card: React.FC<CardProps> = ({ image, height, width }) => {
  if (!image) {
    console.error("Image source is undefined.");
    return null;
  }

  return (
    <div
      className={`relative overflow-hidden h-[250px] min-w-[300px] md:h-[350px] md:min-w-[400px] bg-slate-400 rounded-xl flex justify-center items-center`}
    >
      <Image
        width={width}
        height={height}
        src={image}
        alt={`Image of ${image}`}
        layout="fill"
      />
    </div>
  );
};

export default Card;
