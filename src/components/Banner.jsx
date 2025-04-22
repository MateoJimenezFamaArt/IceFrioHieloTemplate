import React, { useState, useEffect, useCallback } from 'react';

function Banner() {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 5;

  // Function to handle moving to the next slide
  const nextSlide = useCallback(() => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  }, [totalSlides]);

  // Auto-advance slides with interval
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    
    // Clean up interval on component unmount
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  // Function to handle manual slide navigation
  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <section className="banner full">
      <article className={activeSlide === 0 ? "active" : ""}>
        <img src="images/Slide1.jpg" alt="" />
        <div className="inner">
          <header>
            <p>A free responsive web site template by <a href="https://templated.co">TEMPLATED</a></p>
            <h2>Hielo</h2>
          </header>
        </div>
      </article>
      <article className={activeSlide === 1 ? "active" : ""}>
        <img src="images/Slide2.jpg" alt="" />
        <div className="inner">
          <header>
            <p>Lorem ipsum dolor sit amet nullam feugiat</p>
            <h2>Magna</h2>
          </header>
        </div>
      </article>
      <article className={activeSlide === 2 ? "active" : ""}>
        <img src="images/Slide3.jpg" alt="" />
        <div className="inner">
          <header>
            <p>Sed cursus aliuam veroeros lorem ipsum nullam</p>
            <h2>Tempus</h2>
          </header>
        </div>
      </article>
      <article className={activeSlide === 3 ? "active" : ""}>
        <img src="images/Slide4.jpg" alt="" />
        <div className="inner">
          <header>
            <p>Adipiscing lorem ipsum feugiat sed phasellus consequat</p>
            <h2>Etiam</h2>
          </header>
        </div>
      </article>
      <article className={activeSlide === 4 ? "active" : ""}>
        <img src="images/Slide5.jpg" alt="" />
        <div className="inner">
          <header>
            <p>Ipsum dolor sed magna veroeros lorem ipsum</p>
            <h2>Adipiscing</h2>
          </header>
        </div>
      </article>

      {/* Navigation dots */}
      <ul className="indicators">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <li key={index} 
              className={activeSlide === index ? "active" : ""}
              onClick={() => goToSlide(index)} />
        ))}
      </ul>
    </section>
  );
}

export default Banner;