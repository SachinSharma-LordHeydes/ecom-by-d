"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Percent, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const brandOffers = [
  {
    id: 1,
    brand: 'Samsung',
    title: 'Samsung Galaxy Days',
    discount: 'Up to 40% OFF',
    description: 'Latest smartphones & tablets',
    validTill: '2 days left',
    bgGradient: 'from-blue-600 to-indigo-700',
    logo: 'S'
  },
  {
    id: 2,
    brand: 'Apple',
    title: 'Apple Fest',
    discount: 'Up to 25% OFF',
    description: 'iPhone, iPad, MacBook deals',
    validTill: '5 days left',
    bgGradient: 'from-gray-800 to-black',
    logo: 'A'
  },
  {
    id: 3,
    brand: 'Nike',
    title: 'Nike Super Sale',
    discount: 'Up to 60% OFF',
    description: 'Sports shoes & apparel',
    validTill: '3 days left',
    bgGradient: 'from-orange-500 to-red-600',
    logo: 'N'
  },
  {
    id: 4,
    brand: 'Local Artisans',
    title: 'Nepal Heritage Sale',
    discount: 'Up to 50% OFF',
    description: 'Authentic Nepali crafts',
    validTill: '7 days left',
    bgGradient: 'from-green-600 to-teal-600',
    logo: 'L'
  },
  {
    id: 5,
    brand: 'Sony',
    title: 'Sony Electronics Fest',
    discount: 'Up to 35% OFF',
    description: 'Audio, cameras & gaming',
    validTill: '4 days left',
    bgGradient: 'from-purple-600 to-indigo-700',
    logo: 'S'
  }
];

const BrandOffersSwiper = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % brandOffers.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % brandOffers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + brandOffers.length) % brandOffers.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Brand Offers</h2>
          <p className="text-gray-600 text-lg">Exclusive deals from your favorite brands</p>
        </div> */}

        <div className="relative h-64 md:h-72 overflow-hidden rounded-2xl  mx-auto">
          {/* Slides */}
          <div 
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {brandOffers.map((offer) => (
              <div
                key={offer.id}
                className={`min-w-full h-full bg-gradient-to-r ${offer.bgGradient} flex items-center justify-between text-white relative overflow-hidden px-8`}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-24 translate-x-24"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
                
                {/* Content */}
                <div className="flex-1 z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{offer.logo}</span>
                    </div>
                    <span className="text-xl font-semibold">{offer.brand}</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">{offer.title}</h3>
                  <p className="text-2xl md:text-3xl font-extrabold mb-2 text-yellow-300">
                    {offer.discount}
                  </p>
                  <p className="text-lg opacity-90 mb-4">{offer.description}</p>
                  
                  <div className="flex items-center gap-2 mb-6">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{offer.validTill}</span>
                  </div>
                  
                  <Button className="bg-white text-gray-900 hover:bg-gray-100">
                    Shop Now
                  </Button>
                </div>

                {/* Brand logo area */}
                <div className="hidden md:flex items-center justify-center w-48 z-10">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-3xl">{offer.logo}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {brandOffers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandOffersSwiper;