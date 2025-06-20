interface CategoryItem {
  id: number;
  title: string;
  subtitle?: string;
  image: string;
  link: string;
}

interface CategorySection {
  id: number;
  title: string;
  items: CategoryItem[];
  linkText: string;
  bgColor: string;
}

const categoryData: CategorySection[] = [
  {
    id: 1,
    title: "Fashion trends you like",
    linkText: "Explore more",
    bgColor: "bg-purple-100",
    items: [
      {
        id: 1,
        title: "Dresses",
        image:
          "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=200&fit=crop",
        link: "/fashion/dresses",
      },
      {
        id: 2,
        title: "Knits",
        image:
          "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&h=200&fit=crop",
        link: "/fashion/knits",
      },
      {
        id: 3,
        title: "Jackets",
        image:
          "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=300&h=200&fit=crop",
        link: "/fashion/jackets",
      },
      {
        id: 4,
        title: "Jewelry",
        image:
          "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop",
        link: "/fashion/jewelry",
      },
    ],
  },
  {
    id: 2,
    title: "Get your game on",
    linkText: "Shop gaming",
    bgColor: "bg-blue-50",
    items: [
      {
        id: 5,
        title: "Gaming Setup",
        image:
          "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=600&h=400&fit=crop",
        link: "/gaming",
      },
    ],
  },
  {
    id: 3,
    title: "Shop for your home essentials",
    linkText: "Discover more in Home",
    bgColor: "bg-gray-50",
    items: [
      {
        id: 6,
        title: "Cleaning Tools",
        image:
          "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop",
        link: "/home/cleaning",
      },
      {
        id: 7,
        title: "Home Storage",
        image:
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop",
        link: "/home/storage",
      },
      {
        id: 8,
        title: "Home Decor",
        image:
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop",
        link: "/home/decor",
      },
      {
        id: 9,
        title: "Bedding",
        image:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop",
        link: "/home/bedding",
      },
    ],
  },
  {
    id: 4,
    title: "Top categories in Kitchen appliances",
    linkText: "Explore all products in Kitchen",
    bgColor: "bg-gray-50",
    items: [
      {
        id: 10,
        title: "Cooker",
        image:
          "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop",
        link: "/kitchen/cooker",
      },
      {
        id: 11,
        title: "Coffee",
        image:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=200&fit=crop",
        link: "/kitchen/coffee",
      },
      {
        id: 12,
        title: "Pots and Pans",
        image:
          "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop",
        link: "/kitchen/cookware",
      },
      {
        id: 13,
        title: "Kettles",
        image:
          "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=200&fit=crop",
        link: "/kitchen/kettles",
      },
    ],
  },
];

const CategoryGrid = () => {
  return (
    // <div className="flex justify-center items-center">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {categoryData.map((section) => (
          <div key={section.id} className={`${section.bgColor} rounded-lg p-4`}>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              {section.title}
            </h3>

            <div className="space-y-3">
              {section.items.length === 1 ? (
                // Single large item layout (for gaming section)
                <div className="cursor-pointer group">
                  <div className="aspect-video bg-white rounded-lg overflow-hidden mb-2">
                    <img
                      src={section.items[0].image}
                      alt={section.items[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                </div>
              ) : (
                // Grid layout for multiple items
                <div className="grid grid-cols-2 gap-2">
                  {section.items.map((item) => (
                    <div key={item.id} className="cursor-pointer group">
                      <div className="aspect-square bg-white rounded-lg overflow-hidden mb-1">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                      </div>
                      <p className="text-sm font-medium text-gray-700">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button className="text-sm text-blue-600 hover:text-blue-800 font-medium mt-4 hover:underline">
              {section.linkText}
            </button>
          </div>
        ))}
      </div>
    // </div>
  );
};

export default CategoryGrid;
