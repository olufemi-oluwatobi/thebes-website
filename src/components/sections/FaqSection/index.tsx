// components/FAQSection.tsx
import React from "react";
import AccordionItem from "@/components/ui/Accordion";

const faqData = [
  {
    title: "What types of contests can I participate in on Thebes?",
    content:
      "At Thebes, we offer a wide array of contests across various art forms including visual arts, music, dance, and digital multimedia. Whether you excel in painting, singing, choreography, or digital creation, Thebes has a stage for you. Our contests range from regional to global competitions, with formats like head-to-head battles, themed challenges, and multi-stage events.",
  },
  {
    title: "How do the contests work",
    content:
      "Each contest on Thebes is structured into multiple stages, starting with Stage Zero, which serves as a preliminary round. During this stage, creators submit their entries within a specified period. Once submissions close, the voting phase begins, allowing the audience to vote for their favorites. After the voting period ends, the top-ranked creators advance to the next stage, bringing them one step closer to winning the contest. Each subsequent stage follows a similar format, culminating in a final showdown where the ultimate winners are decided.",
  },
  {
    title: " How are winners determined in Thebes contests?",
    content:
      "Winners in Thebes contests are determined by audience votes. This ensures that all participants are judged fairly on the merit of their work rather than popularity. Each contest may involve multiple rounds, allowing the community to vote and decide who advances to the next stage, culminating in a grand finale.",
  },
  {
    title: "Can anyone join Thebes, and how do I sign up?",
    content:
      "Yes, Thebes is open to artists and creative minds from all domains. To join, simply visit our website, click on the sign-up button, and follow the instructions to register. Whether you're a creator looking to compete or an enthusiast eager to vote and support, there’s a place for you in our community.",
  },
  {
    title: "How does Thebes support creators financially?",
    content:
      "Creators on Thebes benefit from ad revenue sharing, contest prizes, and viewer donations, providing multiple sources of income from their activities on the platform. ",
  },
  // ... add other FAQ items here
];

const FAQSection: React.FC = () => {
  return (
    <main className="bg-white flex flex-col items-center px-[5%] py-[5%] ">
      <div className=" font-sans text-xl mb-3 text-purple font-semibold text-left ">
        FAQ
      </div>
      <div className=" md:mb-20  font-bold text-4xl text-center w-full xl:w-2/3 2xl:w-1/3   md:text-6xl   font-serif ">
        {"We\u0027ve Got Answers To Your Questions"}
      </div>
      <div className="flex w-full justify-center items-start my-2">
        <div className="w-full sm:w-10/12 md:w-3/4 my-1">
          <ul className="flex  w-full flex-col">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                title={faq.title}
                content={faq.content}
              />
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default FAQSection;
