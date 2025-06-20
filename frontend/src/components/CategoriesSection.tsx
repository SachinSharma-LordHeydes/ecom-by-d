
import React from 'react';
import { Smartphone, Shirt, Home, Utensils, BookOpen, Gamepad2 } from 'lucide-react';

const categories = [
  {
    icon: Smartphone,
    name: 'Electronics',
    count: '2,500+ items',
    color: 'from-blue-500 to-purple-600',
  },
  {
    icon: Shirt,
    name: 'Fashion',
    count: '5,000+ items',
    color: 'from-pink-500 to-rose-600',
  },
  {
    icon: Home,
    name: 'Home & Garden',
    count: '1,800+ items',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Utensils,
    name: 'Kitchen',
    count: '900+ items',
    color: 'from-orange-500 to-amber-600',
  },
  {
    icon: BookOpen,
    name: 'Books',
    count: '3,000+ items',
    color: 'from-indigo-500 to-blue-600',
  },
  {
    icon: Gamepad2,
    name: 'Gaming',
    count: '600+ items',
    color: 'from-purple-500 to-violet-600',
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-5 bg-gray -50">
      <div className="container mx-auto px-4">
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Shop by Category</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our vast collection of products across multiple categories, 
            carefully curated for the Nepali market.
          </p>
        </div> */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-center mb-1 group-hover:text-nepal-red transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500 text-center">{category.count}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
