import React from "react";
import Image from "next/legacy/image";
import styles from "./VideoCard.module.css";
import type { FC } from "react";

interface VideoCardProps {
  src: string; // The source URL for the image
}

const VideoCard: FC<VideoCardProps> = ({ src }) => {
  return (
    <div className="relative w-full h-full">
      <div className="relative w-full h-full border-2 border-white rounded-2xl overflow-hidden">
        <Image
          src={src}
          alt="Video Thumbnail"
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-300 ease-in-out"
        />
      </div>
      <div
        className={`${styles.recIndicator} bg-brown px-10 border-2 border-white `}
      >
        <div className={styles.recDot} />
        REC
      </div>
    </div>
  );
};

export default VideoCard;
