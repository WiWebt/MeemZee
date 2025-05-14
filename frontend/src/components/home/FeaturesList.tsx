import {
  TrophyIcon,
  AcademicCapIcon,
  UserGroupIcon,
  BeakerIcon,
  ChatBubbleLeftRightIcon,
  AdjustmentsHorizontalIcon,
} from '@heroicons/react/24/outline';
import AnimatedTitle from '../ui/AnimatedTitle';

const features = [
  {
    name: 'Gamified Learning',
    description: 'Earn XP, compete on leaderboards, and unlock achievements while mastering new languages.',
    icon: TrophyIcon,
    gradient: 'from-blue-500 to-cyan-500',
    iconBg: 'bg-blue-500/10',
  },
  {
    name: 'Certification Program',
    description: 'Validate your typing and language proficiency with our certification program.',
    icon: AcademicCapIcon,
    gradient: 'from-purple-500 to-pink-500',
    iconBg: 'bg-purple-500/10',
  },
  {
    name: 'Teacher Classrooms',
    description: 'Create virtual classrooms, assign tasks, and track student progress with detailed analytics.',
    icon: UserGroupIcon,
    gradient: 'from-green-500 to-emerald-500',
    iconBg: 'bg-green-500/10',
  },
  {
    name: 'AI-Powered Practice',
    description: 'Practice with our AI tutor and virtual pen pals for personalized learning experiences.',
    icon: BeakerIcon,
    gradient: 'from-orange-500 to-red-500',
    iconBg: 'bg-orange-500/10',
  },
  {
    name: 'Social Learning',
    description: 'Connect with friends, join challenges, and practice with language partners worldwide.',
    icon: ChatBubbleLeftRightIcon,
    gradient: 'from-pink-500 to-rose-500',
    iconBg: 'bg-pink-500/10',
  },
  {
    name: 'Flexible Learning Paths',
    description: 'Choose your learning path with specialized branches for dialects and cultural context.',
    icon: AdjustmentsHorizontalIcon,
    gradient: 'from-violet-500 to-purple-500',
    iconBg: 'bg-violet-500/10',
  },
];

// Hello in different languages
const greetings = [
  { text: "Hello", lang: "English" },
  { text: "नमस्ते", lang: "Hindi" },
  { text: "你好", lang: "Chinese" },
  { text: "こんにちは", lang: "Japanese" },
  { text: "안녕하세요", lang: "Korean" },
  { text: "Hola", lang: "Spanish" },
  { text: "Bonjour", lang: "French" },
  { text: "Ciao", lang: "Italian" },
  { text: "Olá", lang: "Portuguese" },
  { text: "Hallo", lang: "German" },
  { text: "Привет", lang: "Russian" },
  { text: "مرحبا", lang: "Arabic" },
  { text: "שָׁלוֹם", lang: "Hebrew" },
  { text: "Xin chào", lang: "Vietnamese" },
  { text: "สวัสดี", lang: "Thai" },
];

export default function FeaturesList() {
  // Generate static positions for greetings avoiding the center area
  const positionedGreetings = greetings.map((greeting, index) => {
    // Determine if the greeting should be in left, right, top, or bottom area
    const position = index % 4; // 0: left, 1: right, 2: top, 3: bottom
    const zoneIndex = Math.floor(index / 4); // Index within each zone
    
    let left, top;
    
    switch (position) {
      case 0: // Left side
        left = 5; // Fixed 5% from left
        top = 15 + (zoneIndex * 30); // Evenly spaced vertically
        break;
      case 1: // Right side
        left = 85; // Fixed 85% from left
        top = 15 + (zoneIndex * 30); // Evenly spaced vertically
        break;
      case 2: // Top
        left = 20 + (zoneIndex * 30); // Evenly spaced horizontally
        top = 5; // Fixed 5% from top
        break;
      case 3: // Bottom
        left = 20 + (zoneIndex * 30); // Evenly spaced horizontally
        top = 95; // Fixed 95% from top (moved lower)
        break;
      default:
        left = 0;
        top = 0;
    }

    return {
      ...greeting,
      left,
      top,
      delay: position * 0.5 + zoneIndex * 0.3, // Systematic delay based on position
      isUp: position % 2 === 0, // Alternate up/down animation
      color: `rgba(255, 255, 255, ${0.2 + (position % 2) * 0.15})`, // Alternate opacity
    };
  });

  return (
    <div className="relative py-24 sm:py-32 overflow-hidden">
      {/* Animated background with greetings - only visible on md and up */}
      <div className="absolute inset-0 -z-10 overflow-visible hidden md:block">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        
        {/* Floating greetings */}
        {positionedGreetings.map((greeting) => (
          <div
            key={greeting.lang}
            className={`absolute select-none pointer-events-none font-semibold text-3xl animate-fade-in ${
              greeting.isUp ? 'animate-float-up' : 'animate-float-down'
            }`}
            style={{
              left: `${greeting.left}%`,
              top: `${greeting.top}%`,
              animationDelay: `${greeting.delay}s`,
              color: greeting.color,
              textShadow: '0 0 15px rgba(255, 255, 255, 0.3)',
              fontWeight: 600,
              opacity: 0,
            }}
          >
            {greeting.text}
          </div>
        ))}
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-gray-900/50" />
      </div>

      {/* Mobile background - simpler gradient */}
      <div className="absolute inset-0 -z-10 block md:hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <AnimatedTitle text="Unlock Global Connection" />
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            MeemZee provides all the tools and features you need to become proficient in typing
            across multiple languages, with a focus on practical skills and cultural understanding.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mt-24 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative overflow-hidden rounded-3xl p-8 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gray-800/50 backdrop-blur-sm border border-gray-700"
            >
              {/* Gradient background that appears on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${feature.gradient}`} />
              
              <div className="relative">
                {/* Icon with flip animation */}
                <div className={`relative flex h-16 w-16 items-center justify-center rounded-2xl ${feature.iconBg} mb-8 group-hover:scale-110 transition-all duration-300 perspective-1000`}>
                  {/* Front side */}
                  <feature.icon 
                    className={`h-8 w-8 bg-gradient-to-br ${feature.gradient} [mask-type:luminance] mask-gradient absolute backface-hidden group-hover:[transform:rotateY(-180deg)] group-hover:transition-transform group-hover:duration-700`} 
                    aria-hidden="true" 
                  />
                  {/* Back side (flipped) */}
                  <feature.icon 
                    className={`h-8 w-8 bg-gradient-to-br ${feature.gradient} [mask-type:luminance] mask-gradient absolute backface-hidden [transform:rotateY(180deg)] group-hover:[transform:rotateY(0deg)] group-hover:transition-transform group-hover:duration-700`} 
                    aria-hidden="true" 
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold leading-7 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {feature.name}
                </h3>
                <p className="mt-4 text-base leading-7 text-gray-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
