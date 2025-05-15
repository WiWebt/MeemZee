import {
  ShoppingCartIcon,
  HomeIcon,
  GiftIcon,
  WrenchScrewdriverIcon,
  CursorArrowRaysIcon,
  TagIcon,
} from '@heroicons/react/24/outline';
import AnimatedTitle from '../ui/AnimatedTitle';

const features = [
  {
    name: 'Smart Baby Shopping',
    description: 'Curated selection of baby essentials with detailed comparisons and buying guides.',
    icon: ShoppingCartIcon,
    gradient: 'from-blue-500 to-cyan-500',
    iconBg: 'bg-blue-500/10',
  },
  {
    name: 'Home & Kitchen Hacks',
    description: 'Discover space-saving gadgets and smart tools that transform your living space.',
    icon: HomeIcon,
    gradient: 'from-green-500 to-emerald-500',
    iconBg: 'bg-green-500/10',
  },
  {
    name: 'Exclusive Deals',
    description: 'Track prices and catch the best deals across major shopping platforms.',
    icon: TagIcon,
    gradient: 'from-orange-500 to-red-500',
    iconBg: 'bg-orange-500/10',
  },
  {
    name: 'Free Online Tools',
    description: 'Video downloaders, file converters, and productivity tools - all in one place.',
    icon: WrenchScrewdriverIcon,
    gradient: 'from-purple-500 to-pink-500',
    iconBg: 'bg-purple-500/10',
  },
  {
    name: 'Price Tracking',
    description: 'Get notified when prices drop on your favorite products across multiple stores.',
    icon: CursorArrowRaysIcon,
    gradient: 'from-pink-500 to-rose-500',
    iconBg: 'bg-pink-500/10',
  },
  {
    name: 'Daily Deals',
    description: 'Fresh deals and discounts updated hourly from trusted affiliate partners.',
    icon: GiftIcon,
    gradient: 'from-violet-500 to-purple-500',
    iconBg: 'bg-violet-500/10',
  },
];

// Popular product categories
const categories = [
  { text: "Diapers", type: "baby" },
  { text: "Baby Food", type: "baby" },
  { text: "Kitchen Gadgets", type: "home" },
  { text: "Storage Solutions", type: "home" },
  { text: "Baby Monitors", type: "baby" },
  { text: "Smart Home", type: "home" },
  { text: "Baby Care", type: "baby" },
  { text: "Home Decor", type: "home" },
  { text: "Baby Clothes", type: "baby" },
  { text: "Kitchen Tools", type: "home" },
  { text: "Baby Safety", type: "baby" },
  { text: "Cleaning", type: "home" },
  { text: "Baby Toys", type: "baby" },
  { text: "Organization", type: "home" },
  { text: "Baby Gear", type: "baby" },
];

export default function FeaturesList() {
  // Generate static positions for categories avoiding the center area
  const positionedCategories = categories.map((category, index) => {
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
      ...category,
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
        
        {/* Floating categories */}
        {positionedCategories.map((category) => (
          <div
            key={category.type + category.text}
            className={`absolute select-none pointer-events-none font-semibold text-2xl animate-fade-in ${
              category.isUp ? 'animate-float-up' : 'animate-float-down'
            }`}
            style={{
              left: `${category.left}%`,
              top: `${category.top}%`,
              animationDelay: `${category.delay}s`,
              color: category.type === 'baby' ? 'rgba(147, 197, 253, 0.3)' : 'rgba(167, 243, 208, 0.3)',
              textShadow: '0 0 15px rgba(255, 255, 255, 0.2)',
              fontWeight: 600,
              opacity: 0,
            }}
          >
            {category.text}
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
            <AnimatedTitle text="Everything You Need" />
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            MeemZee brings together smart shopping, home solutions, and useful online tools
            to make your daily life easier and more efficient.
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
