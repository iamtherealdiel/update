import React from 'react';

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 flex justify-center pt-4 px-4">
      <div className="bg-black/90 backdrop-blur-sm border border-gray-800 rounded-full px-6 md:px-8 py-3 flex items-center space-x-4 md:space-x-8">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://vaeuvecjtnvismnobvyy.supabase.co/storage/v1/object/public/images/39888c2f-22d0-4a95-85ae-dfa6dc1aae7b.png"
            alt="MusicLib Logo"
            className="h-10 w-10 rounded-lg"
          />
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-4 md:space-x-8">
          <a href="#" className="text-sm md:text-base text-white hover:text-[#6366f1] transition-colors">Home</a>
          <a href="#partnership" className="text-sm md:text-base text-white hover:text-[#6366f1] transition-colors">Benefits</a>
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center">
          <button className="px-6 md:px-8 py-2 text-sm md:text-base rounded-full bg-[#6366f1] text-white hover:bg-[#5855eb] transition-all duration-200">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}