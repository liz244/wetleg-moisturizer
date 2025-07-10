import React, { useState, useEffect } from "react";
import HeroImageBlock from "../components/HeroImageBlock";
import BottomNav from "../components/BottomNav";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";

import BlogSection from "../components/Blog"; // desktop
import BlogSectionMobile from "../components/BlogSectionMobile"; // mobile

import BlogCarouselSection from "../components/BlogCarouselSection";
import BlogRewardSection from "../components/BlogRewardSection";

export default function BlogPageResponsive() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      {/* Hero Image */}
      <HeroImageBlock
        imageSrc="/assets/images/hero-home.png"
        titleImageSrc="/assets/images/title-moz.png"
      />

      {/* Navigation */}
      {isMobile ? <MobileMenu /> : <BottomNav />}

      {/* Blog Section (adaptée selon device) */}
      {isMobile ? <BlogSectionMobile /> : <BlogSection />}

      {/* Blog Carousel - toujours visible */}
      <BlogCarouselSection />

      {/* Blog Reward - toujours visible */}
      <BlogRewardSection />

      {/* Footer */}
      <Footer />
    </>
  );
}
