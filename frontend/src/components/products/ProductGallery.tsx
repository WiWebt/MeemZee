'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  images: string[];  // Changed from single image to array of images
  category: string;
  retailers: {
    name: string;
    price: number;
    link: string;
  }[];
}

interface ProductGalleryProps {
  products: Product[];
}

export default function ProductGallery({ products }: ProductGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['all', ...new Set(products.map(product => product.category))];
  
  const filteredProducts = products
    .filter(product => selectedCategory === 'all' || product.category === selectedCategory)
    .filter(product => 
      searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const getBestPrice = (retailers: Product['retailers']) => {
    return Math.min(...retailers.map(r => r.price));
  };
  
  const getBestPriceRetailer = (retailers: Product['retailers']) => {
    const bestPrice = getBestPrice(retailers);
    return retailers.find(r => r.price === bestPrice)?.name;
  };

  return (
    <div>
      {/* Search Input */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 
            text-gray-800 placeholder-gray-500
            bg-white shadow-sm
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            focus:shadow-lg
            hover:shadow-md hover:border-gray-400"
        />
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
          >
            {/* Product Image Carousel */}
            <div className="relative h-64 bg-gray-50 group-hover:bg-gray-100 transition-colors">
              <div className="flex overflow-x-auto snap-x snap-mandatory">
                {product.images.map((image, index) => (
                  <div key={index} className="relative w-full h-64 flex-shrink-0 snap-center">
                    <Image
                      src={image}
                      alt={`${product.name} - Image ${index + 1}`}
                      fill
                      className="object-cover transition-opacity duration-300"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"
                    aria-label={`View image ${index + 1}`}
                    onClick={() => {
                      const container = document.querySelector('.snap-x');
                      container?.scrollTo({
                        left: index * container.clientWidth,
                        behavior: 'smooth'
                      });
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="p-6">
              <div className="text-xs font-medium text-blue-600 tracking-wider uppercase mb-2">
                {product.category}
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-4 group-hover:text-blue-600 transition-colors">
                {product.name}
              </h3>

              {/* Price Comparison */}
              <div className="space-y-2.5">
                {product.retailers.map((retailer) => (
                  <a
                    key={retailer.name}
                    href={retailer.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex text-gray-600 items-center justify-between px-4 py-2.5 rounded-lg transition-all
                      ${retailer.price === getBestPrice(product.retailers)
                        ? 'bg-green-50 text-green-700 hover:bg-green-100'
                        : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                  >
                    <span className="text-sm font-medium capitalize tracking-wide">{retailer.name}</span>
                    <span className={`text-sm ${retailer.price === getBestPrice(product.retailers) ? 'font-semibold' : 'text-gray-600'}`}>
                      ₹{retailer.price.toLocaleString()}
                    </span>
                  </a>
                ))}
              </div>

              {/* Best Price Badge */}
              <div className="mt-4 text-xs text-gray-400 text-center tracking-wide">
                Best price available on {getBestPriceRetailer(product.retailers)?.toUpperCase()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
