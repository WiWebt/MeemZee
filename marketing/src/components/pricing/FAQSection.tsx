import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="group">
      <div className={classNames(
        "bg-white rounded-xl shadow-sm ring-1 ring-gray-200 transition-all duration-200",
        isOpen ? "shadow-md" : "hover:shadow-md"
      )}>
        <button
          className="flex w-full items-center justify-between p-6 text-left"
          onClick={onToggle}
        >
          <span className="text-base font-semibold leading-7 text-gray-900">
            {faq.question}
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
          <p className="px-6 pb-6 text-base leading-7 text-gray-600">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection({ faqs }: { faqs: FAQ[] }) {
  const [openFAQs, setOpenFAQs] = useState<number[]>([]);

  const toggleFAQ = (faqId: number) => {
    setOpenFAQs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  return (
    <div className="mx-auto mt-24 max-w-7xl px-6">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            Frequently Asked Questions
          </p>
        </div>
        <dl className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openFAQs.includes(faq.id)}
              onToggle={() => toggleFAQ(faq.id)}
            />
          ))}
        </dl>
      </div>
    </div>
  );
}
