'use client';

import { motion } from "framer-motion";
import { FiShoppingBag, FiHome, FiDollarSign, FiTool, FiUsers, FiMail } from "react-icons/fi";

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
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

export default function About() {
  const sections = [
    {
      title: "Baby Products Store",
      description: "Dedicated section for baby-related products, perfect for parents, guardians, and gift shoppers.",
      features: [
        "Product listings with affiliate links",
        "Comparison of baby product categories",
        "SEO-friendly blog posts and buying guides"
      ],
      gradient: "from-pink-500 to-rose-500",
      icon: FiShoppingBag,
      color: "text-pink-600"
    },
    {
      title: "Home & Kitchen Store",
      description: "Curated store for home improvement gadgets, kitchen tools, and decor hacks.",
      features: [
        "Viral product collections",
        "Smart tools and space-saving gadgets",
        "How-to guides and affiliate options"
      ],
      gradient: "from-indigo-500 to-blue-500",
      icon: FiHome,
      color: "text-indigo-600"
    },
    {
      title: "Price Tracking Hub",
      description: "Advanced price tracking and deal aggregation across major e-commerce platforms.",
      features: [
        "Real-time price tracking",
        "Best deals aggregation",
        "Multi-vendor comparison tools"
      ],
      gradient: "from-green-500 to-emerald-500",
      icon: FiDollarSign,
      color: "text-green-600"
    },
    {
      title: "Utility Tools",
      description: "Free-to-use online tools for everyday tasks and file management.",
      features: [
        "Video downloaders for social media",
        "File format converters",
        "Text and QR code utilities"
      ],
      gradient: "from-blue-500 to-cyan-500",
      icon: FiTool,
      color: "text-blue-600"
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
              Simplifying Digital Life
            </motion.p>
            <motion.p variants={fadeInUp} className="mt-6 text-lg leading-8 text-gray-600">
              MeemZee is a multi-functional platform that combines smart shopping, productivity tools, and everyday utilities. We&apos;re here to simplify your digital life with curated baby products, home solutions, and free online tools.
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
            <motion.div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="enhanced-card group relative overflow-hidden rounded-2xl p-8"
                >
                  <div className={`absolute top-0 right-0 -mt-4 -mr-4 h-32 w-32 rounded-full bg-gradient-to-r ${section.gradient} opacity-10 group-hover:scale-150 transition-transform duration-500`} />
                  <div className="relative flex flex-col h-full">
                    <section.icon className={`h-8 w-8 ${section.color} mb-4`} />
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{section.description}</p>
                    <ul className="space-y-2 text-sm text-gray-500">
                      {section.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className={`h-1 w-16 mt-4 rounded-full bg-gradient-to-r ${section.gradient} opacity-20 group-hover:w-full transition-all duration-500`} />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Team & Contact Section */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-24"
            >
              <motion.div variants={fadeInUp} className="mx-auto max-w-2xl text-center">
                <h2 className="text-base font-semibold leading-loose text-blue-600 py-1">Our Team</h2>
                <p className="mt-2 text-3xl font-bold leading-[1.2] tracking-tight text-gray-900">
                  Meet the Founders
                </p>
              </motion.div>

              <motion.div variants={staggerChildren} className="mx-auto mt-16 max-w-5xl">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <motion.div 
                    variants={scaleIn}
                    className="enhanced-card relative overflow-hidden rounded-2xl p-8"
                  >
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 h-32 w-32 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-10 group-hover:scale-150 transition-transform duration-500" />
                    <FiUsers className="h-8 w-8 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900">Parag Patil</h3>
                    <p className="mt-2 text-sm text-blue-600">Co-founder</p>
                  </motion.div>

                  <motion.div 
                    variants={scaleIn}
                    className="enhanced-card relative overflow-hidden rounded-2xl p-8"
                  >
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 h-32 w-32 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 opacity-10 group-hover:scale-150 transition-transform duration-500" />
                    <FiUsers className="h-8 w-8 text-cyan-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900">Nikita Patil</h3>
                    <p className="mt-2 text-sm text-cyan-600">Co-founder</p>
                  </motion.div>
                </div>

                <div className="mt-16 text-center">
                  <motion.div variants={fadeInUp}>
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center justify-center">
                      <FiMail className="h-5 w-5 text-blue-600 mr-2" />
                      Contact Us
                    </h3>
                    <p className="mt-2 text-gray-600">support@meemzee.com</p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
        </motion.div>
      </div>
     </div>
    </div>
  );
}

