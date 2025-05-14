import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import AnimatedTitle from '../ui/AnimatedTitle';

const steps = [
  {
    name: 'Choose Your Language',
    description:
      'Select from over 50 languages and start with a placement test to determine your current typing speed and accuracy.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Practice with AI',
    description:
      'Learn through interactive lessons, guided by our AI tutor that adapts to your learning pace and style.',
    icon: LockClosedIcon,
  },
  {
    name: 'Track Progress',
    description:
      'Monitor your improvement with detailed analytics, earning achievements and climbing the global leaderboards.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Get Certified',
    description:
      'Take certification exams to validate your typing proficiency and showcase your skills to employers.',
    icon: ArrowPathIcon,
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">
            Getting Started
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <AnimatedTitle text="How MeemZee Works" />
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Follow these simple steps to start your journey towards mastering typing in any language.
            Our platform makes it easy to learn at your own pace.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
            {steps.map((step, index) => (
              <div
                key={step.name}
                className="relative pl-16"
              >
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600">
                  <span className="text-xl font-semibold text-white">{index + 1}</span>
                </div>
                <div className="text-base leading-7">
                  <h3 className="font-semibold text-gray-900">{step.name}</h3>
                  <p className="mt-2 text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Timeline visual */}
        <div className="mt-16 hidden lg:block">
          <div className="relative">
            {/* Gradient line */}
            <div className="absolute left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full" />
            
            {/* Animated dots */}
            <div className="absolute left-0 w-full">
              <div className="absolute w-3 h-3 bg-white rounded-full animate-ping" style={{ left: '20%', top: '-4px' }} />
              <div className="absolute w-3 h-3 bg-white rounded-full animate-ping" style={{ left: '50%', top: '-4px', animationDelay: '0.5s' }} />
              <div className="absolute w-3 h-3 bg-white rounded-full animate-ping" style={{ left: '80%', top: '-4px', animationDelay: '1s' }} />
            </div>

            {/* Step numbers */}
            <div className="relative flex justify-between">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold shadow-lg transform hover:scale-110 transition-transform duration-200">
                    {index + 1}
                  </div>
                  <div className="mt-2 text-sm font-medium text-gray-600 opacity-75">
                    {step.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
