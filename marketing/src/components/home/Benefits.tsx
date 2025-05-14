import {
  BoltIcon,
  GlobeAltIcon,
  ScaleIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import AnimatedTitle from '../ui/AnimatedTitle';

const benefits = [
  {
    name: 'Accelerated Learning',
    description:
      'Master typing in new languages up to 2x faster with our gamified approach and AI-powered practice sessions.',
    icon: BoltIcon,
    stat: '2x',
    caption: 'Faster Learning',
  },
  {
    name: 'Global Community',
    description:
      'Join our growing community of language enthusiasts and connect with learners worldwide.',
    icon: GlobeAltIcon,
    stat: 'Global',
    caption: 'Community',
  },
  {
    name: 'Professional Growth',
    description:
      'Earn certified typing skills in multiple languages for enhanced career opportunities worldwide.',
    icon: ScaleIcon,
    stat: '100%',
    caption: 'Support',
  },
  {
    name: 'Cultural Exchange',
    description:
      'Practice with native speakers and language partners for authentic cultural learning experiences.',
    icon: UserGroupIcon,
    stat: '24/7',
    caption: 'Available',
  },
];

export default function Benefits() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 py-24 sm:py-32">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="none"
          viewBox="0 0 800 800"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 40V0h40"
                fill="none"
                stroke="currentColor"
                strokeOpacity="0.1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-400 animate-fade-in">
            Why Choose MeemZee
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-600">
            <AnimatedTitle text="Benefits that set us apart" />
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Experience the advantages of learning with MeemZee, where typing practice meets
            language mastery in a supportive, global community.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4 mx-auto">
            {benefits.map((benefit) => (
              <div 
                key={benefit.name} 
                className="group flex flex-col items-center justify-center text-center rounded-xl p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-primary-500/50 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary-500/10 w-full max-w-sm mx-auto"
              >
                <dt className="flex flex-col items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg shadow-primary-500/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-primary-500/30">
                    <benefit.icon className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>
                  <div className="mt-6 space-y-1">
                    <p className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105">
                      {benefit.stat}
                    </p>
                    <p className="text-sm font-medium text-primary-400 tracking-wider uppercase">
                      {benefit.caption}
                    </p>
                  </div>
                  <p className="mt-4 text-lg font-semibold leading-7 text-white">
                    {benefit.name}
                  </p>
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-300 transition-colors duration-300 group-hover:text-gray-200">
                  {benefit.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
