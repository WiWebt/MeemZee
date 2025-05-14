'use client';

import { motion } from "framer-motion";
import { FiTarget, FiCompass, FiHeart, FiUsers, FiGlobe, FiShield, FiTrendingUp, FiAward, FiCommand, 
         FiCrosshair, FiLock, FiMessageSquare, FiZap, FiStar, FiFlag, FiCpu } from "react-icons/fi";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    }
  },
};

export default function About() {
  const coreValues = [
    {
      title: "Loyalty Above All",
      description: "We stand united, fiercely loyal to each other and our mission. Every member looks out for one another.",
      gradient: "from-violet-500 to-fuchsia-500",
      icon: FiShield,
      color: "text-violet-600"
    },
    {
      title: "Territory & Growth",
      description: "We don't wait for opportunities; we create them. Our growth strategy is aggressive and determined.",
      gradient: "from-fuchsia-500 to-pink-500",
      icon: FiTrendingUp,
      color: "text-fuchsia-600"
    },
    {
      title: "Respect & Honor",
      description: "We build our reputation through action, consistently delivering on our promises and honoring our word.",
      gradient: "from-pink-500 to-rose-500",
      icon: FiAward,
      color: "text-pink-600"
    },
    {
      title: "Street Smart Leadership",
      description: "Practicality over theory. We take a no-nonsense approach to leadership, choosing solutions that work.",
      gradient: "from-rose-500 to-orange-500",
      icon: FiCommand,
      color: "text-rose-600"
    },
    {
      title: "No Roles, Only Goals",
      description: "Flexibility and adaptability define us. What matters is meeting our objectives and responding quickly.",
      gradient: "from-orange-500 to-amber-500",
      icon: FiCrosshair,
      color: "text-orange-600"
    },
    {
      title: "Snitches Get Stitches",
      description: "Protecting MeemZee's interests is everyone's responsibility. We uphold and safeguard our culture.",
      gradient: "from-amber-500 to-yellow-500",
      icon: FiLock,
      color: "text-amber-600"
    },
    {
      title: "Handle Your Business",
      description: "We address issues quickly, directly, and internally. Problems don't linger in MeemZee.",
      gradient: "from-yellow-500 to-lime-500",
      icon: FiMessageSquare,
      color: "text-yellow-600"
    },
    {
      title: "Always Down To Slide",
      description: "Reliability is non-negotiable. We show up when it matters and are ready for any challenge.",
      gradient: "from-lime-500 to-green-500",
      icon: FiZap,
      color: "text-lime-600"
    },
    {
      title: "We All Jump In",
      description: "Positions are earned through results, not talk. Actions carry more weight than promises.",
      gradient: "from-green-500 to-emerald-500",
      icon: FiStar,
      color: "text-green-600"
    },
    {
      title: "Stay Strapped",
      description: "Preparation is key. We stay vigilant, keep our skills sharp, and ensure we're never caught off guard.",
      gradient: "from-emerald-500 to-teal-500",
      icon: FiFlag,
      color: "text-emerald-600"
    },
    {
      title: "Run These Streets",
      description: "We dominate our market through relentless innovation and bold execution.",
      gradient: "from-teal-500 to-cyan-500",
      icon: FiCpu,
      color: "text-teal-600"
    },
    {
      title: "Real Recognize Real",
      description: "Authenticity is core to our culture. We value genuine, straightforward leadership.",
      gradient: "from-cyan-500 to-sky-500",
      icon: FiHeart,
      color: "text-cyan-600"
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-white via-blue-50/10 to-white">
      {/* Background Pattern with subtle gradient overlay */}
      <div className="absolute inset-0 bg-pattern-light opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/80" />
      
      <div className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-base font-semibold leading-loose text-blue-600 py-1">
              Our Mission
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-2 text-5xl font-bold leading-[1.2] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900 sm:text-6xl py-2">
              Revolutionizing Language Learning
            </motion.p>
            <motion.p variants={fadeInUp} className="mt-6 text-lg leading-8 text-gray-600">
              MeemZee is a revolutionary typing tutor and language learning platform that combines 
              engaging gamified experiences with cutting-edge AI-driven personalization.
            </motion.p>
          </motion.div>

          {/* Vision Section */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
            className="mx-auto mt-20 max-w-7xl"
          >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <motion.div 
                variants={scaleIn}
                className="enhanced-card relative overflow-hidden rounded-2xl p-8"
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-32 w-32 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-10 group-hover:scale-150 transition-transform duration-500" />
                <FiTarget className="h-8 w-8 text-violet-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
                <p className="mt-4 text-gray-600">
                  We aim to teach typing skills alongside language proficiency, offering learners an 
                  immersive, practical, and enjoyable way to master new languages.
                </p>
              </motion.div>
              
              <motion.div 
                variants={scaleIn}
                className="enhanced-card relative overflow-hidden rounded-2xl p-8"
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-32 w-32 rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 opacity-10 group-hover:scale-150 transition-transform duration-500" />
                <FiCompass className="h-8 w-8 text-fuchsia-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">Our Approach</h3>
                <p className="mt-4 text-gray-600">
                  Through gamification and AI-driven personalization, we create an engaging learning 
                  environment that keeps users motivated and ensures consistent progress.
                </p>
              </motion.div>
              
              <motion.div 
                variants={scaleIn}
                className="enhanced-card relative overflow-hidden rounded-2xl p-8"
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-32 w-32 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 opacity-10 group-hover:scale-150 transition-transform duration-500" />
                <FiHeart className="h-8 w-8 text-pink-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">Our Values</h3>
                <p className="mt-4 text-gray-600">
                  We believe in loyalty, growth, respect, and practical leadership. Our team operates 
                  with a no-nonsense approach, focusing on results.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Core Values Section */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-16 sm:mt-24 md:mt-32"
          >
            <motion.div variants={fadeInUp} className="mx-auto max-w-2xl text-center">
              <h2 className="text-base font-semibold leading-loose text-blue-600 py-1">Our Core Values</h2>
              <p className="mt-2 text-4xl font-bold leading-[1.2] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900 sm:text-5xl py-2 drop-shadow-sm">
                The MeemZee Code
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our values define who we are and how we operate. They&apos;re not just words on a wall—they&apos;re
                the principles that guide every decision and action we take.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerChildren}
              className="mx-auto mt-16 max-w-7xl"
            >
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    className="enhanced-card group relative overflow-hidden rounded-2xl p-8"
                  >
                    <div className={`absolute top-0 right-0 -mt-4 -mr-4 h-32 w-32 rounded-full bg-gradient-to-r ${value.gradient} opacity-10 group-hover:scale-150 transition-transform duration-500`} />
                    <div className="relative flex flex-col h-full">
                      <value.icon className={`h-8 w-8 ${value.color} mb-4`} />
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 flex-grow">{value.description}</p>
                      <div className={`h-1 w-16 mt-4 rounded-full bg-gradient-to-r ${value.gradient} opacity-20 group-hover:w-full transition-all duration-500`} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Community & Culture Section */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-16 sm:mt-24 md:mt-32"
          >
            <motion.div variants={fadeInUp} className="mx-auto max-w-2xl text-center">
              <h2 className="text-base font-semibold leading-loose text-blue-600 py-1">Community & Culture</h2>
              <p className="mt-2 text-4xl font-bold leading-[1.2] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900 sm:text-5xl py-2">
                Join Our Global Community
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                At MeemZee, we&apos;re more than just a platform—we&apos;re a vibrant community of language
                enthusiasts, learners, and professionals united by our passion.
              </p>
            </motion.div>

            <motion.div variants={staggerChildren} className="mx-auto mt-16 max-w-5xl">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <motion.div 
                  variants={scaleIn}
                  className="enhanced-card relative overflow-hidden rounded-2xl p-8"
                >
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 h-32 w-32 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 opacity-10 group-hover:scale-150 transition-transform duration-500" />
                  <FiUsers className="h-8 w-8 text-rose-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900">Engaging Learning Environment</h3>
                  <p className="mt-4 text-gray-600">
                    Our community thrives on daily challenges, competitive leaderboards, and shared
                    achievements. We celebrate diversity and create an inclusive space where every
                    member can grow and succeed.
                  </p>
                </motion.div>

                <motion.div 
                  variants={scaleIn}
                  className="enhanced-card relative overflow-hidden rounded-2xl p-8"
                >
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 h-32 w-32 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 opacity-10 group-hover:scale-150 transition-transform duration-500" />
                  <FiGlobe className="h-8 w-8 text-orange-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900">Cultural Exchange</h3>
                  <p className="mt-4 text-gray-600">
                    Through our platform, members connect with learners worldwide, share experiences,
                    and participate in language-specific challenges that foster cultural understanding
                    and appreciation.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
