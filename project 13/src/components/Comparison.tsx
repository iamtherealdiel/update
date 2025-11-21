import React from 'react';
import { X, Check } from 'lucide-react';

export function Comparison() {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Why choose <span className="italic text-[#6366f1]">us</span>?
          </h2>
          <p className="text-white text-xl mt-6">
            MediaTiger is a 360 Multi media network and agency, providing unparalleled benefits to creators, artists, and brands.
          </p>
          <p className="text-white text-xl mt-4">
            One thing we can promise to our clients is that we guarantee higher revenue from negotiations.
          </p>
          <p className="text-white text-xl mt-4">
            Whatever your current situation is, we always make sure that our clients have superior payout splits, better sponsorship opportunities, better content strategies, better payouts, better brand promotions, and more.
          </p>
          <p className="text-white text-xl mt-4">
            The team at MediaTiger works relentlessly to make sure every one of our clients has a smooth experience they deserve.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Other Music Libraries */}
          <div className="bg-gray-900/30 rounded-3xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-gray-400 mb-8 text-center">
              Other Media Companies
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <X className="w-6 h-6 text-red-500 flex-shrink-0" />
                <span className="text-gray-400 text-lg">Basic or Lower Revenue</span>
              </div>

              <div className="flex items-center space-x-4">
                <X className="w-6 h-6 text-red-500 flex-shrink-0" />
                <span className="text-gray-400 text-lg">No New Opportunities</span>
              </div>

              <div className="flex items-center space-x-4">
                <X className="w-6 h-6 text-red-500 flex-shrink-0" />
                <span className="text-gray-400 text-lg">Subpar Monetization Strategies</span>
              </div>

              <div className="flex items-center space-x-4">
                <X className="w-6 h-6 text-red-500 flex-shrink-0" />
                <span className="text-gray-400 text-lg">Only Focuses On One Region</span>
              </div>
            </div>
          </div>
          
          {/* Novial Music */}
          <div className="bg-gray-900/30 rounded-3xl p-8 border border-gray-700">
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-3">
                <img 
                  src="https://vaeuvecjtnvismnobvyy.supabase.co/storage/v1/object/public/images/39888c2f-22d0-4a95-85ae-dfa6dc1aae7b.png" 
                  alt="MediaTiger Logo" 
                  className="w-8 h-8 rounded-lg"
                />
                <h3 className="text-2xl font-bold text-white">
                  MediaTiger
                </h3>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Check className="w-6 h-6 text-[#6366f1] flex-shrink-0" />
                <span className="text-white text-lg">Guaranteed Higher Revenue</span>
              </div>

              <div className="flex items-center space-x-4">
                <Check className="w-6 h-6 text-[#6366f1] flex-shrink-0" />
                <span className="text-white text-lg">Fresh Opportunities</span>
              </div>

              <div className="flex items-center space-x-4">
                <Check className="w-6 h-6 text-[#6366f1] flex-shrink-0" />
                <span className="text-white text-lg">Boutique Monetization Strategies</span>
              </div>

              <div className="flex items-center space-x-4">
                <Check className="w-6 h-6 text-[#6366f1] flex-shrink-0" />
                <span className="text-white text-lg">Supports Creators, Artists, and Brands</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}