import React, { useEffect, useRef, useState } from "react";

const BannerCarousel = () => {
  const slides = [
    {
      title: "Inspirational interiors",
      subtitle: "Interior Designs.",
      bannerClass: "banner-top1"
    },
    {
      title: "Designing Dreams",
      subtitle: "Decorate ideas",
      bannerClass: "banner-top2"
    },
    {
      title: "Inspirational interiors",
      subtitle: "Interior Designs.",
      bannerClass: "banner-top3"
    },
    {
      title: "Designing Dreams",
      subtitle: "Decorate ideas",
      bannerClass: "banner-top4"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef(null);

  // Auto play logic
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const startAutoPlay = () => {
    slideInterval.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  return (
    <div className="carousel-container" onMouseEnter={stopAutoPlay} onMouseLeave={startAutoPlay}>
   
    </div>
  );
};

export default BannerCarousel;
