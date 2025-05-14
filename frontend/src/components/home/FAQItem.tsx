import { ChevronDownIcon } from '@heroicons/react/24/outline';
import React, { ReactNode } from 'react';

interface FAQItemProps {
  question: string;
  answer: ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="group">
      <div className={classNames(
        "bg-white rounded-xl shadow-sm ring-1 ring-gray-200 transition-all duration-200",
        isOpen ? "shadow-md" : "hover:shadow-md"
      )}>
        <button
          className="flex w-full items-center justify-between p-6 text-left"
          onClick={onClick}
        >
          <span className="text-base font-semibold leading-7 text-gray-900">
            {question}
          </span>
          <ChevronDownIcon
            className={classNames(
              isOpen ? "rotate-180" : "",
              "h-6 w-6 transform text-blue-600 transition-transform duration-200"
            )}
          />
        </button>
        <div 
          className={classNames(
            "overflow-hidden transition-all duration-200 ease-in-out",
            isOpen ? "max-h-96" : "max-h-0"
          )}
        >
          <p className="px-6 pb-6 text-base leading-7 text-gray-600">{answer}</p>
        </div>
      </div>
    </div>
  );
}
