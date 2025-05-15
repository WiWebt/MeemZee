'use client';

import { motion } from "framer-motion";
import Link from 'next/link';
import {
  FiDownload,
  FiImage,
  FiVideo,
  FiFile,
  FiRefreshCw,
  FiZap
} from 'react-icons/fi';

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

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const utilities = [
  {
    name: 'Instagram Reel Downloader',
    description: 'Download Instagram reels and save them to your device in high quality.',
    icon: FiVideo,
    gradient: 'from-pink-500 to-rose-500',
    color: 'text-pink-600',
    href: '/utility-tools/insta-reel',
  },
  {
    name: 'Instagram Story Downloader',
    description: 'Save Instagram stories directly to your device.',
    icon: FiDownload,
    gradient: 'from-purple-500 to-indigo-500',
    color: 'text-purple-600',
    href: '/utility-tools/insta-story',
  },
  {
    name: 'Instagram Photo Downloader',
    description: 'Download Instagram photos and images in original quality.',
    icon: FiImage,
    gradient: 'from-blue-500 to-cyan-500',
    color: 'text-blue-600',
    href: '/utility-tools/insta-photo',
  },
  {
    name: 'YouTube Video Downloader',
    description: 'Download YouTube videos in various formats and qualities.',
    icon: FiVideo,
    gradient: 'from-red-500 to-orange-500',
    color: 'text-red-600',
    href: '/utility-tools/youtube',
  },
  {
    name: 'PDF Merger',
    description: 'Combine multiple PDF files into a single document.',
    icon: FiFile,
    gradient: 'from-green-500 to-emerald-500',
    color: 'text-green-600',
    href: '/utility-tools/pdf-merger',
  },
  {
    name: 'JPG to PNG Converter',
    description: 'Convert JPG images to PNG format while maintaining quality.',
    icon: FiRefreshCw,
    gradient: 'from-yellow-500 to-amber-500',
    color: 'text-yellow-600',
    href: '/utility-tools/jpg-to-png',
  },
  {
    name: 'Image Background Remover',
    description: 'Remove backgrounds from images automatically using AI.',
    icon: FiZap,
    gradient: 'from-violet-500 to-purple-500',
    color: 'text-violet-600',
    href: '/utility-tools/remove-bg',
  },
];

export default function UtilityGrid() {
  return (
    <motion.div
      variants={staggerChildren}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {utilities.map((utility) => (
        <motion.div
          key={utility.name}
          variants={scaleIn}
          className="enhanced-card group relative overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg"
          >
          <Link href={utility.href} className="block p-8">
            <div className={`absolute top-0 right-0 -mt-4 -mr-4 h-32 w-32 rounded-full bg-gradient-to-r ${utility.gradient} opacity-10 group-hover:scale-150 transition-transform duration-500`} />
            <div className="relative flex flex-col h-full">
              <utility.icon className={`h-8 w-8 ${utility.color} mb-4`} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {utility.name}
              </h3>
              <p className="text-gray-600 flex-grow">{utility.description}</p>
              <div className={`h-1 w-16 mt-4 rounded-full bg-gradient-to-r ${utility.gradient} opacity-20 group-hover:w-full transition-all duration-500`} />
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
