import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Multilingual Support',
    MeemZee: 'Native support for 50+ languages and scripts',
    others: 'Limited language support, mainly English',
  },
  {
    name: 'AI-Powered Learning',
    MeemZee: 'Personalized feedback and adaptive lessons',
    others: 'Static, one-size-fits-all approach',
  },
  {
    name: 'Real-time Analysis',
    MeemZee: 'Instant feedback on accuracy and technique',
    others: 'Basic speed and accuracy metrics',
  },
  {
    name: 'Progress Tracking',
    MeemZee: 'Detailed analytics per language and script',
    others: 'General typing statistics only',
  },
  {
    name: 'Learning Resources',
    MeemZee: 'Interactive lessons and cultural context',
    others: 'Standard typing exercises',
  },
  {
    name: 'Community Features',
    MeemZee: 'Global rankings and multiplayer challenges',
    others: 'Limited or no community features',
  },
];

export default function Comparison() {
  return (
    <div className="relative py-24 sm:py-32 bg-gradient-to-br from-white via-blue-50/80 to-blue-100/50">
      {/* Optimized Background */}
      <div 
        className="absolute inset-0 -z-10 overflow-hidden"
        style={{ willChange: 'transform' }}
      >
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white/60 shadow-lg ring-1 ring-blue-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" 
          style={{ 
            transform: 'translate3d(0,0,0)',
            backfaceVisibility: 'hidden'
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            Why Choose MeemZee?
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            The Smart Choice for Language Typing
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See how MeemZee revolutionizes the way you learn to type in multiple languages
          </p>
        </div>

        <div className="mt-16 flow-root">
          <div 
            className="mx-auto max-w-4xl rounded-2xl bg-white/90 ring-1 ring-gray-900/5 shadow-lg overflow-hidden lg:mx-0 lg:flex lg:max-w-none"
            style={{ 
              transform: 'translate3d(0,0,0)',
              backfaceVisibility: 'hidden'
            }}
          >
            <table className="min-w-full divide-y divide-gray-900/10">
              <thead>
                <tr>
                  <th scope="col" className="hidden md:table-cell py-8 pl-8 pr-3 text-left text-sm font-semibold text-gray-900">
                    Feature
                  </th>
                  <th scope="col" className="px-3 py-8 text-left text-sm font-semibold text-gray-900">
                    <div className="flex items-center gap-x-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 shadow-lg">
                        <CheckIcon className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-base">MeemZee</span>
                    </div>
                  </th>
                  <th scope="col" className="px-3 py-8 text-left text-sm font-semibold text-gray-900">
                    <div className="flex items-center gap-x-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 shadow-sm">
                        <XMarkIcon className="h-6 w-6 text-gray-400" />
                      </div>
                      <span className="text-base">Other Platforms</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-900/10">
                {features.map((feature) => (
                  <tr key={feature.name} className="md:hover:bg-blue-50/30 bg-gray-50/50 md:bg-transparent">
                    <td className="hidden md:table-cell whitespace-normal py-6 pl-8 pr-3 text-sm font-medium text-gray-900">
                      {feature.name}
                    </td>
                    <td className="whitespace-normal px-3 py-6 text-sm text-gray-600">
                      <div className="flex items-center gap-x-3">
                        <div className="hidden md:flex h-6 w-6 flex-none items-center justify-center rounded-full bg-blue-100">
                          <CheckIcon className="h-4 w-4 text-blue-600" aria-hidden="true" />
                        </div>
                        <span>{feature.MeemZee}</span>
                      </div>
                    </td>
                    <td className="whitespace-normal px-3 py-6 text-sm text-gray-600">
                      <div className="flex items-center gap-x-3">
                        <div className="hidden md:flex h-6 w-6 flex-none items-center justify-center rounded-full bg-gray-100">
                          <XMarkIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
                        </div>
                        <span>{feature.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
