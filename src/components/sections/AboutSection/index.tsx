const AboutSection = () => {
  return (
    <section className="w-full p-[5%] text-black flex-col md:flex-row   flex items-center justify-between">
      <div className="   ">
        <div className=" font-sans text-md md:text-xl mt-8 text-purple font-semibold text-left ">
          ABOUT THEBES
        </div>
        <div className=" mt-2 w-full md:w-4/6 font-bold text-4xl xl:text-5xl  2xl:text-6xl   font-serif text-left  ">
          Express Your Creativity & Win Big
        </div>
      </div>
      <div className=" self-end flex align-baseline  w-full  md:w-2/5">
        <div className=" text-gray-200 text-md 2xl:text-xl mt-5 lg:mt-0 text-left w-full 2xl:w-[80%] leading-12 ">
          Thebes serves as a mobile arena where creativity and competition
          converge. We cater to artists and enthusiasts across a wide range of
          disciplines—from painting and music to digital arts and
          beyond—providing a platform where talent is recognized and rewarded.
          Our mission is to connect diverse cultures through the universal
          language of contest, offering both traditional art forms and engaging
          social games. Through our app, participants can compete, audiences can
          experience the spectacle, and together, determine the victors of each
          contest.
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
