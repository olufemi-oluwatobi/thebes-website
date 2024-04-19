import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

interface CardProps {
  image: string;
}

const Card: React.FC<CardProps> = ({ image }) => {
  if (!image) {
    console.error("Image source is undefined.");
    return null; // Or render some fallback UI
  }

  return (
    <motion.div
      className="relative overflow-hidden h-[200px] min-w-[200px] bg-slate-400 rounded-xl flex justify-center items-center"
      key={image}
    >
      <Image src={image} alt={`Image of ${image}`} layout="fill" />
    </motion.div>
  );
};

export default Card;
