// components/FAQSection.tsx
import React from "react";
import AccordionItem from "@/components/ui/Accordion";

const faqData = [
  {
    title: "When will my order arrive?",
    content:
      "Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation.",
  },
  {
    title: "When will my order arrive?",
    content:
      "Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation.",
  },
  {
    title: "When will my order arrive?",
    content:
      "Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation.",
  },
  {
    title: "When will my order arrive?",
    content:
      "Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation.",
  },
  // ... add other FAQ items here
];

const FAQSection: React.FC = () => {
  return (
    <main className="bg-white flex flex-col items-center py-10 pb-20  px-5">
      <div className=" font-sans text-xl mb-3 text-purple font-semibold text-left ">
        FAQ
      </div>
      <div className=" md:mb-20  font-bold text-4xl text-left md:text-center w-2/3 md:w-1/3   md:text-6xl   font-serif ">
        {"We\u0027ve Got Answers To Your Questions"}
      </div>
      <div className="flex w-full justify-center items-start my-2">
        <div className="w-full sm:w-10/12 md:w-1/2 my-1">
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
