import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";

const images = [
  "BADMINTONCOURT.webp", "CRICKETPITCH.webp", "GANESHATEMPLE.webp",
  "GRANDCLUBHOUSE.webp", "KIDSPLAYAREA.webp", "GYM.webp",
  "INDOORPOOL.webp", "MULTIPLEPARTYHALL.webp", "POOLSIDECAFE.webp",
  "POOLSIDEDECK.webp", "PRIVATETHEATRE.webp", "PRIVATEWOODS.webp"
];

const Amenities = ({ openModal }) => {
  const rawSlides = [];
  for (let i = 0; i < images.length; i += 6) {
    rawSlides.push(images.slice(i, i + 6));
  }
  const slides = [rawSlides[rawSlides.length - 1], ...rawSlides, rawSlides[0]]; // Add clones at both ends

  const [index, setIndex] = useState(1); // Start at the first real slide
  const [isTransitioning, setIsTransitioning] = useState(true);
  const autoSlideRef = useRef(null);
  const resumeTimeoutRef = useRef(null);

  const nextSlide = () => {
    setIndex((prev) => prev + 1);
    setIsTransitioning(true);
    pauseAutoSlide();
  };

  const prevSlide = () => {
    setIndex((prev) => prev - 1);
    setIsTransitioning(true);
    pauseAutoSlide();
  };

  const startAutoSlide = () => {
    autoSlideRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
      setIsTransitioning(true);
    }, 4000);
  };

  const pauseAutoSlide = () => {
    clearInterval(autoSlideRef.current);
    clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      startAutoSlide();
    }, 5000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      clearInterval(autoSlideRef.current);
      clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (index === slides.length - 1) {
      // If we're at the last clone, instantly jump to the real first slide
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(1);
      }, 700);
    } else if (index === 0) {
      // If we're at the first clone, instantly jump to the real last slide
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(slides.length - 2);
      }, 700);
    }
  }, [index]);

  return (
    <div className="relative lg:px-10 lg:py-8 p-4 w-full overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <div className="w-fit">
            <h2 className="text-gray-900 text-2xl sm:text-3xl font-bold">Amenities</h2>
            <div className="h-1 bg-primary mt-1 w-full"></div>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Discover a lifestyle enriched with premium amenities and facilities
          </p>
        </div>
        <button
          className="bg-primary text-white font-medium text-sm px-4 py-2 rounded flex items-center justify-center cursor-pointer w-full sm:w-auto"
          onClick={() => openModal("download-amenities")}
        >
          <Download className="w-5 h-5" /> Download Amenities
        </button>
      </div>

      {/* Title */}
      <div className="text-center mb-8">
        <h3 className="font-bold text-2xl text-gray-900">32+ World-Class</h3>
        <p className="text-sm text-gray-600 mt-1">Everything you need for a luxurious lifestyle</p>
      </div>

      {/* Slider */}
      <div className="relative w-full overflow-hidden">
        <div
          className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full flex-shrink-0"
            >
              {slide.map((img, j) => (
                <div key={j} className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={`/${img}`}
                    alt={img}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="absolute bottom-2 left-2 font-bold text-white text-lg mb-1 px-2 py-1">
                    {img
                      .replace(".webp", "")
                      .replace(/_/g, " ")
                      .toLowerCase()
                      .replace(/\b\w/g, (char) => char.toUpperCase())}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 bg-[#e5fff6] border green-border p-3 rounded-full shadow-sm w-12 h-12 cursor-pointer opacity-80 hover:opacity-100 transition-all"
        >
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>

        <button
          onClick={nextSlide}
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 bg-[#e5fff6] border green-border p-3 rounded-full shadow-md w-12 h-12 cursor-pointer opacity-80 hover:opacity-100 transition-all"
        >
          <ArrowRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default Amenities;