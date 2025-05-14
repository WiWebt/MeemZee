'use client';

import { motion, AnimatePresence } from "framer-motion";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

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

const babyProducts = [
  {
    id: 1,
    name: "Premium Baby Diapers (Pack of 42)",
    image: "/images/products/baby/diapers.jpg",
    category: "Baby Care",
    prices: {
      amazon: 699,
      flipkart: 749,
      meesho: 599
    },
    links: {
      amazon: "https://amazon.in/baby-diapers",
      flipkart: "https://flipkart.com/baby-diapers",
      meesho: "https://meesho.com/baby-diapers"
    }
  },
  {
    id: 2,
    name: "Educational Baby Play Mat",
    image: "/images/products/baby/playmat.jpg",
    category: "Toys & Games",
    prices: {
      amazon: 1499,
      flipkart: 1299,
      meesho: 999
    },
    links: {
      amazon: "https://amazon.in/baby-playmat",
      flipkart: "https://flipkart.com/baby-playmat",
      meesho: "https://meesho.com/baby-playmat"
    }
  },
  {
    id: 3,
    name: "Baby Feeding Bottle Set",
    image: "/images/products/baby/bottles.jpg",
    category: "Feeding",
    prices: {
      amazon: 499,
      flipkart: 449,
      meesho: 399
    },
    links: {
      amazon: "https://amazon.in/baby-bottles",
      flipkart: "https://flipkart.com/baby-bottles",
      meesho: "https://meesho.com/baby-bottles"
    }
  },
  {
    id: 4,
    name: "Soft Cotton Baby Clothes Set",
    image: "/images/products/baby/clothes.jpg",
    category: "Clothing",
    prices: {
      amazon: 899,
      flipkart: 799,
      meesho: 699
    },
    links: {
      amazon: "https://amazon.in/baby-clothes",
      flipkart: "https://flipkart.com/baby-clothes",
      meesho: "https://meesho.com/baby-clothes"
    }
  },
  // Add more products...
];

export default function BabyProductsPage() {
  return (
    <div className="relative bg-gradient-to-b from-gray-50 via-white to-white">
      <div className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:75px_75px] [mask-image:radial-gradient(white,transparent_85%)] -z-10" />
        
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key="header"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={staggerChildren}
                className="mx-auto max-w-2xl text-center"
              >
              <motion.h2 
                variants={fadeInUp} 
                className="text-base font-semibold leading-loose text-pink-600 py-1"
              >
                Baby Care
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="mt-2 text-4xl font-bold leading-[1.2] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-pink-800 to-pink-900 sm:text-5xl py-2"
              >
                Baby Products
              </motion.p>
              <motion.p 
                variants={fadeInUp}
                className="mt-6 text-lg leading-8 text-gray-600"
              >
                Compare prices across major retailers and find the best deals for your little one
              </motion.p>
              </motion.div>
            </AnimatePresence>
            <motion.div
              key="gallery"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={staggerChildren}
              className="mx-auto mt-16 max-w-7xl"
            >
              <Suspense fallback={
                <div className="animate-pulse">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="bg-gray-200 rounded-xl h-96"></div>
                    ))}
                  </div>
                </div>
              }>
                <ProductGallery products={babyProducts} />
              </Suspense>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
