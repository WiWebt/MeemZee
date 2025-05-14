'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  prices: {
    amazon: number;
    flipkart: number;
    meesho: number;
  };
  links: {
    amazon: string;
    flipkart: string;
    meesho: string;
  };
}

interface ProductGalleryProps {
  products: Product[];
}

export default function ProductGallery({ products }: ProductGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...new Set(products.map(product => product.category))];
  
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const getBestPrice = (prices: Product['prices']) => {
    return Math.min(...Object.values(prices));
  };

  const getBestPriceRetailer = (prices: Product['prices']) => {
    const bestPrice = getBestPrice(prices);
    return Object.entries(prices).find(([, price]) => price === bestPrice)?.[0];
  };

  return (
    <div>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-100"
          >
            {/* Product Image */}
            <div className="relative h-48 bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="p-4">
              <div className="text-xs text-blue-600 font-medium mb-1">
                {product.category}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {product.name}
              </h3>

              {/* Price Comparison */}
              <div className="space-y-2">
                {Object.entries(product.prices).map(([retailer, price]) => (
                  <a
                    key={retailer}
                    href={product.links[retailer as keyof typeof product.links]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-2 rounded-lg transition-colors
                      ${price === getBestPrice(product.prices)
                        ? 'bg-green-50 text-green-700'
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                      }`}
                  >
                    <span className="font-medium capitalize">{retailer}</span>
                    <span className={price === getBestPrice(product.prices) ? 'font-semibold' : ''}>
                      ₹{price.toLocaleString()}
                    </span>
                  </a>
                ))}
              </div>

              {/* Best Price Badge */}
              <div className="mt-3 text-xs text-gray-500 text-center">
                Best price on {getBestPriceRetailer(product.prices)?.toUpperCase()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
