const AboutSection = () => {
  return (
    <section className="w-full p-[5%] text-black flex-col md:flex-row   flex items-center justify-between">
      <div className="   ">
        <div className=" font-sans text-xl text-purple font-semibold text-left ">
          ABOUT THEBES
        </div>
        <div className=" mt-12 w-4/6 font-bold  text-6xl   font-serif text-left  ">
          Express Your Creativity & Win Big
        </div>
      </div>
      <div className=" self-end flex align-baseline  w-full  md:w-2/5">
        <div className=" text-[#939197]  font-medium text-2xl text-left w-full mt-8 md:mt-0   md:w-[80%] leading-12 ">
          Thebes also known as “The Social Contest Network” is a platform that
          organizes contests across all works of art. Thebes also has an app
          where users can watch these contests, vote, and eject and determine
          the winner of each contest.
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
