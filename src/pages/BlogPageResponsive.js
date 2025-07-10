import React, { useState, useEffect } from "react";
import BlogPage from "./Blog";
import BlogPageMobile from "./BlogPageMobile";

export default function BlogPageResponsive() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile ? <BlogPageMobile /> : <BlogPage />;
}
