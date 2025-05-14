'use client';

import { motion } from "framer-motion";
import dynamic from 'next/dynamic';

const ProductGallery = dynamic(() => import('@/components/products/ProductGallery'), {
  ssr: true,
  loading: () => (
    <div className="animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-gray-200 rounded-xl h-96"></div>
        ))}
      </div>
    </div>
  ),
});

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

const homeProducts = [
  {
    id: 1,
    name: "Smart Air Fryer 4.5L",
    image: "/images/products/home/airfryer.jpg",
    category: "Kitchen Appliances",
    prices: {
      amazon: 5999,
      flipkart: 5499,
      meesho: 4999
    },
    links: {
      amazon: "https://amazon.in/smart-airfryer",
      flipkart: "https://flipkart.com/smart-airfryer",
      meesho: "https://meesho.com/smart-airfryer"
    }
  },
  {
    id: 2,
    name: "Non-Stick Cookware Set (5 Pieces)",
    image: "/images/products/home/cookware.jpg",
    category: "Cookware",
    prices: {
      amazon: 2499,
      flipkart: 2299,
      meesho: 1999
    },
    links: {
      amazon: "https://amazon.in/cookware-set",
      flipkart: "https://flipkart.com/cookware-set",
      meesho: "https://meesho.com/cookware-set"
    }
  },
  {
    id: 3,
    name: "Robot Vacuum Cleaner",
    image: "/images/products/home/vacuum.jpg",
    category: "Home Appliances",
    prices: {
      amazon: 15999,
      flipkart: 14999,
      meesho: 13999
    },
    links: {
      amazon: "https://amazon.in/robot-vacuum",
      flipkart: "https://flipkart.com/robot-vacuum",
      meesho: "https://meesho.com/robot-vacuum"
    }
  },
  {
    id: 4,
    name: "Storage Container Set (8 Pieces)",
    image: "/images/products/home/storage.jpg",
    category: "Storage & Organization",
    prices: {
      amazon: 899,
      flipkart: 799,
      meesho: 699
    },
    links: {
      amazon: "https://amazon.in/storage-containers",
      flipkart: "https://flipkart.com/storage-containers",
      meesho: "https://meesho.com/storage-containers"
    }
  },
  // Add more products...
];

export default function HomeAndKitchenPage() {
  return (
    <div className="relative bg-gradient-to-b from-gray-50 via-white to-white">
      <div className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:75px_75px] [mask-image:radial-gradient(white,transparent_85%)] -z-10" />
        
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerChildren}
              className="mx-auto max-w-2xl text-center"
            >
              <motion.h2 
                variants={fadeInUp} 
                className="text-base font-semibold leading-loose text-indigo-600 py-1"
              >
                Home & Living
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="mt-2 text-4xl font-bold leading-[1.2] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-indigo-800 to-indigo-900 sm:text-5xl py-2"
              >
                Home & Kitchen
              </motion.p>
              <motion.p 
                variants={fadeInUp}
                className="mt-6 text-lg leading-8 text-gray-600"
              >
                Compare prices across major retailers and find the best deals for your home
              </motion.p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerChildren}
              className="mx-auto mt-16 max-w-7xl"
            >
              <ProductGallery products={homeProducts} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
