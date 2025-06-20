
import React from 'react';
import { Button } from '@/components/ui/button';
import { Clock, Zap, Gift, Percent } from 'lucide-react';

const offers = [
  {
    id: 1,
    title: 'Flash Sale',
    subtitle: 'Up to 70% OFF',
    description: 'Limited time electronics deals',
    timeLeft: '23:45:12',
    icon: Zap,
    bgColor: 'from-red-500 to-pink-600',
    textColor: 'text-white'
  },
  {
    id: 2,
    title: 'Bundle Offers',
    subtitle: 'Buy 2 Get 1 Free',
    description: 'On selected fashion items',
    timeLeft: '5 Days Left',
    icon: Gift,
    bgColor: 'from-green-500 to-teal-600',
    textColor: 'text-white'
  },
  {
    id: 3,
    title: 'New User Special',
    subtitle: '50% OFF',
    description: 'First purchase discount',
    timeLeft: 'No Expiry',
    icon: Percent,
    bgColor: 'from-purple-500 to-indigo-600',
    textColor: 'text-white'
  }
];

const OffersSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Special Offers</h2>
          <p className="text-gray-600 text-lg">Don't miss out on these amazing deals!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div
              key={offer.id}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${offer.bgColor} p-8 text-white animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <offer.icon className="h-8 w-8" />
                  <div className="flex items-center gap-2 text-sm opacity-90">
                    <Clock className="h-4 w-4" />
                    <span>{offer.timeLeft}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                <p className="text-3xl font-extrabold mb-2">{offer.subtitle}</p>
                <p className="text-lg opacity-90 mb-6">{offer.description}</p>
                
                <Button 
                  variant="outline" 
                  className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm"
                >
                  Shop Now
                </Button>
              </div>
              
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
