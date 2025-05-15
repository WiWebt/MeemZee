'use client';

import Link from 'next/link';

export default function Landing() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 will-change-transform">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-cyan-500/30 to-blue-500/30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="mx-auto max-w-[90rem]">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-6 animate-gradient">
              Smarter Shopping
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Simpler Tools
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Your one-stop destination for baby essentials, home solutions, and powerful online tools.
            </p>
          </div>

          {/* 4-World Portal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
            <Link href="/baby-products" className="group">
              <div className="relative h-full bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 transition-all duration-500 hover:scale-[1.02] hover:bg-gray-800/70 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500">👶</div>
                  <h3 className="text-2xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Baby Products</h3>
                  <p className="text-gray-400">Curated essentials for your little ones</p>
                </div>
              </div>
            </Link>

            <Link href="/homeAndKitchen" className="group">
              <div className="relative h-full bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 transition-all duration-500 hover:scale-[1.02] hover:bg-gray-800/70 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500">🏡</div>
                  <h3 className="text-2xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">Home & Kitchen</h3>
                  <p className="text-gray-400">Smart gadgets & space-saving hacks</p>
                </div>
              </div>
            </Link>

            <Link href="/deals" className="group">
              <div className="relative h-full bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 transition-all duration-500 hover:scale-[1.02] hover:bg-gray-800/70 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500">🔥</div>
                  <h3 className="text-2xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-rose-400">Hot Deals</h3>
                  <p className="text-gray-400">Price tracking & exclusive offers</p>
                </div>
              </div>
            </Link>

            <Link href="/utilityTools" className="group">
              <div className="relative h-full bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 transition-all duration-500 hover:scale-[1.02] hover:bg-gray-800/70 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500">⚙️</div>
                  <h3 className="text-2xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-400">Free Tools</h3>
                  <p className="text-gray-400">Video downloaders & converters</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Live Activity Ticker */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="relative overflow-hidden bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700/50">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5" />
              <div className="relative px-6 py-4">
                <div className="flex items-center justify-between gap-8 text-sm md:text-base overflow-x-auto whitespace-nowrap scrollbar-hide">
                  <div className="flex items-center space-x-2 text-blue-400">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                    </span>
                    <span>Live: 35% off Philips Baby Monitor</span>
                  </div>
                  <div className="hidden md:block text-purple-400">200+ tools used today</div>
                  <div className="text-emerald-400">New deals added hourly</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
