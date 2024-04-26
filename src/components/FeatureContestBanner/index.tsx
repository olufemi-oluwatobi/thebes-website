// FeatureContestBanner.tsx
import Image from "next/legacy/image";
import Countdown from "../ContestCalender/CalenderItem/Countdown";
import StarButtonIcon from "@/icons/star_button_icon";

const FeatureContestBanner = () => {
  return (
    <div className="relative bg-black bg-opacity-0 rounded-3xl shadow-xl w-[1500px] h-[600px] md:h-[70%] overflow-hidden text-white">
      <Image
        src="https://thebesuserupload.s3.us-east-2.amazonaws.com/site_assets/feature_contest.png"
        alt="Streetwear Fashion Design Contest"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="rounded-3xl shadow-xl"
      />

      {/* Overlay with gradient that fades from left (black) to right (transparent) */}
      <div className="absolute inset-0  bg-gradient-to-b md:bg-gradient-to-r from-black via-black/100 md:via-black/60 to-transparent rounded-3xl">
        <div className="flex flex-col justify-center items-start py-8 p-4 md:p-8 h-full">
          <div className="bg-primary flex items-center text-brown font-bold font-sans text-sm uppercase px-6 py-4 rounded-full mb-4 max-w-max">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mr-3"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
            Stage Zero
          </div>
          <div className="w-full flex justify-between ">
            <div className=" ">
              <h1 className=" text-3xl md:text-[4rem] font-serif leading-tight font-bold mb-3 w-full md:w-[70%]">
                Streetwear Fashion Design Contest
              </h1>
              <p className="font-bold font-sans text-gray-200 mb-8 mt-2 w-full md:w-[40%]">
                Join our community of creators. Download Thebes now and shine on
                the
                {"world's"} most inclusive Social Contest Network!
              </p>
            </div>
            <div className="hidden md:flex ">
              <StarButtonIcon arrowIconFill="#fff" fill="#FC702F" />
            </div>
          </div>

          <div className="flex items-center text-3xl font-bold">
            <div className="pr-6">
              <Countdown targetDate={new Date()} />
            </div>
          </div>
          <div className="flex w-full md:hidden mt-10 justify-end items-end ">
            <StarButtonIcon size="100" arrowIconFill="#fff" fill="#FC702F" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureContestBanner;
