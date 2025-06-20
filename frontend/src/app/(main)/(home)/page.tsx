import BrandOffersSwiper from "@/components/BrandOffersSwiper";
import CategoriesSection from "@/components/CategoriesSection";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import OffersSection from "@/components/OffersSection";
import ProductCarousel from "@/components/ProductCarousel";
import { homeProducts } from "@/data/productData";

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
        <CategoryGrid />
        <OffersSection/>
        <FeaturedProducts />
      </div>
    </div>
  );
};

export default page;
