import { CheckIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React, { useState } from "react";
import SignupDialog from "../global/SignupDialog";

export interface PricingTier {
  id: string;
  name: string;
  href: string;
  price: { monthly: string };
  description: string;
  features: string[];
  featured: boolean;
  comingSoon: boolean;
  futurePrice: string;
  featureDetails: { [key: string]: string | undefined };
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function PricingCard({ tier }: { tier: PricingTier }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div
      className={classNames(
        tier.featured
          ? "relative bg-gradient-to-b from-blue-100 to-blue-50 before:absolute before:inset-0 before:bg-blue-100/20 before:blur-2xl before:-z-10 group"
          : "bg-white/90",
        "rounded-3xl p-2 transition-all duration-300 hover:transform hover:-translate-y-2"
      )}
    >
      <div
        className={classNames(
          tier.featured
            ? "bg-white ring-2 ring-blue-400 group-hover:ring-blue-500 group-hover:shadow-xl group-hover:shadow-blue-200/40 transition-all duration-300"
            : "bg-white ring-1 ring-gray-200 hover:shadow-lg hover:ring-gray-300 transition-all duration-300",
          "rounded-2xl p-8 h-full backdrop-blur-xl relative"
        )}
      >
        {tier.featured && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg whitespace-nowrap group-hover:shadow-xl group-hover:bg-blue-600 transition-all duration-300">
            Recommended
          </div>
        )}
        <div className="flex items-center justify-between gap-x-4">
          <h3
            id={tier.id}
            className={classNames(
              tier.featured ? "text-blue-600" : "text-gray-900",
              "text-lg font-semibold leading-8"
            )}
          >
            {tier.name}
          </h3>
        </div>
        <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
        <div className="mt-6 flex flex-col gap-y-2">
          {tier.comingSoon ? (
            <>
              <span className="text-4xl font-bold tracking-tight text-gray-900">
                {tier.price.monthly}
              </span>
              <span className="text-sm text-gray-600">
                (Will be {tier.futurePrice})
              </span>
            </>
          ) : (
            <span className="text-4xl font-bold tracking-tight text-gray-900">
              {tier.price.monthly}
            </span>
          )}
        </div>
        {tier.comingSoon ? (
          <button
            onClick={() => setIsDialogOpen(true)}
            className={classNames(
              tier.featured
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25 hover:bg-blue-600 hover:shadow-blue-500/35"
                : "bg-gray-100 text-gray-900 hover:bg-gray-200 ring-1 ring-gray-200",
              "mt-6 block w-full rounded-xl px-3 py-2.5 text-center text-sm font-semibold leading-6 transition-all duration-200"
            )}
          >
            Join Waitlist
          </button>
        ) : (
          <Link
            href={tier.href}
            aria-describedby={tier.id}
            className={classNames(
              tier.featured
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25 hover:bg-blue-600 hover:shadow-blue-500/35"
                : "bg-gray-100 text-gray-900 hover:bg-gray-200 ring-1 ring-gray-200",
              "mt-6 block rounded-xl px-3 py-2.5 text-center text-sm font-semibold leading-6 transition-all duration-200"
            )}
          >
            Get Started
          </Link>
        )}
        <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
          {tier.features.map((feature) => (
            <li key={feature} className="flex gap-x-3 items-center">
              <div>
                <CheckIcon
                  className={classNames(
                    tier.featured ? "text-blue-500" : "text-gray-600",
                    "h-4 w-4"
                  )}
                  aria-hidden="true"
                />
              </div>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <SignupDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </div>
  );
}
