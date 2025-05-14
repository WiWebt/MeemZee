import React from "react";

interface ComparisonFeature {
  category: string;
  items: {
    name: string;
    free: string;
    premium: string;
  }[];
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ComparisonTable({
  features,
}: {
  features: ComparisonFeature[];
}) {
  return (
    <div className="mx-auto mt-24 max-w-7xl px-6">
      <div className="text-center mb-16">
        <h2 className="text-base font-semibold leading-7 text-blue-600">
          Detailed Comparison
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
          Choose the Perfect Plan for You
        </p>
      </div>

      <div className="relative">
        {/* Background decoration */}
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-200" />
        </div>

        <div className="relative">
          <div className="mx-auto max-w-5xl rounded-2xl bg-white shadow-xl ring-1 ring-gray-200 overflow-hidden">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="hidden md:table-cell py-5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-8 bg-white"
                  >
                    Features
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-5 text-center text-sm font-semibold text-gray-700 w-1/2 md:w-auto bg-gray-100 border-l border-gray-200"
                  >
                    Free
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-5 text-center text-sm font-semibold text-blue-600 w-1/2 md:w-auto bg-blue-50 border-l border-gray-200"
                  >
                    Premium
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((section) => (
                  <React.Fragment key={section.category}>
                    <tr className="bg-white">
                      <th
                        colSpan={3}
                        scope="colgroup"
                        className="py-3 pl-6 pr-3 text-left text-sm font-semibold text-blue-600 sm:pl-8"
                      >
                        {section.category}
                      </th>
                    </tr>
                    {section.items.map((feature, featureIdx) => (
                      <tr
                        key={feature.name}
                        className={featureIdx % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                      >
                        <td className="hidden md:table-cell py-4 pl-6 pr-3 text-sm text-gray-600 sm:pl-8">
                          {feature.name}
                        </td>
                        <td className={classNames(
                          "px-3 py-4 text-sm text-center w-1/2 md:w-auto border-l border-gray-200",
                          featureIdx % 2 === 0 ? "bg-gray-100" : "bg-gray-100/70",
                          "text-gray-700"
                        )}>
                          {feature.free}
                        </td>
                        <td className={classNames(
                          "px-3 py-4 text-sm text-center w-1/2 md:w-auto border-l border-gray-200",
                          featureIdx % 2 === 0 ? "bg-blue-50" : "bg-blue-50/50",
                          "text-blue-900 font-medium"
                        )}>
                          {feature.premium}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
