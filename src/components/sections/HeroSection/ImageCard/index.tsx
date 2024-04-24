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
      className={`relative overflow-hidden   bg-slate-400 rounded-xl flex justify-center items-center`}
    >
      <Image
        width={width}
        height={height}
        layout="responsive"
        src={image}
        alt={`Image of ${image}`}
      />
    </div>
  );
};

export default Card;
