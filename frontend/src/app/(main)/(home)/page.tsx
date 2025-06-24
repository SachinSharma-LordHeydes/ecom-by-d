import BrandOffersSwiper from "@/components/BrandOffersSwiper";
import CategoriesSection from "@/components/CategoriesSection";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import ProductCarousel from "@/components/ProductCarousel";
import { homeProducts, sportsProducts } from "@/data/productData";

const page = () => {
  return (
    <div className="min-h-screen">
      <CategoriesSection />
      <BrandOffersSwiper />
      {/* <HeroSection /> */}

      {/* Main content container for layout alignment */}
      <div className="container mx-auto px-4">
        <ProductCarousel
          title="Home Decor & Furnishings"
          products={homeProducts}
          className="mt-6"
        />
        <ProductCarousel
          title="Sports"
          products={sportsProducts}
          className="mt-6"
        />
        <CategoryGrid />
        {/* <OffersSection/> */}
        <FeaturedProducts />
      </div>
    </div>
  );
};

export default page;
