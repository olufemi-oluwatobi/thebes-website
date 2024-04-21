"use client";
import React, { useState, useRef } from "react";

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="bg-white w-full my-2 shadow-lg">
      <h2
        onClick={toggleAccordion}
        className={`flex ${
          isOpen && " border-l-4 border-purple"
        } justify-between items-center font-semibold p-6 cursor-pointer`}
      >
        <span className=" font-bold text-xl font-sans ">{title}</span>
        <svg
          className={`fill-current text-purple h-6 w-6 transform transition-transform duration-500 ${
            isOpen ? "rotate-180" : ""
          }`}
          stroke="#836CBB"
          strokeWidth={2}
          viewBox="0 0 20 20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </h2>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0",
        }}
        className="border-l-4 border-purple w-full overflow-hidden transition-max-height duration-500"
      >
        <p className="px-6 pb-6 text-gray-900">{content}</p>
      </div>
    </li>
  );
};

export default AccordionItem;
