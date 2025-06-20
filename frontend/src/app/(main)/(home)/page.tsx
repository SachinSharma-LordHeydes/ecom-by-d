import BrandOffersSwiper from '@/components/BrandOffersSwiper'
import CategoriesSection from '@/components/CategoriesSection'
import FeaturedProducts from '@/components/FeaturedProducts'
import HeroSection from '@/components/HeroSection'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen">
      <CategoriesSection />
      {/* <HeroSection /> */}
      <BrandOffersSwiper/>
      <FeaturedProducts />
    </div>
  )
}

export default page
