'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  image: string;
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
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                {product.name}
              </h3>

              {/* Price Comparison */}
              <div className="space-y-2">
                {product.retailers.map((retailer) => (
                  <a
                    key={retailer.name}
                    href={retailer.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-2 rounded-lg transition-colors
                      ${retailer.price === getBestPrice(product.retailers)
                        ? 'bg-green-50 text-green-700'
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                      }`}
                  >
                    <span className="font-medium capitalize">{retailer.name}</span>
                    <span className={retailer.price === getBestPrice(product.retailers) ? 'font-semibold' : ''}>
                      ₹{retailer.price.toLocaleString()}
                    </span>
                  </a>
                ))}
              </div>

              {/* Best Price Badge */}
              <div className="mt-3 text-xs text-gray-500 text-center">
                Best price on {getBestPriceRetailer(product.retailers)?.toUpperCase()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
