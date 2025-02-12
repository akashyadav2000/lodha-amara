import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";

const images = [
  "BADMINTONCOURT.webp", "CRICKETPITCH.webp", "GANESHATEMPLE.webp",
  "GRANDCLUBHOUSE.webp", "KIDSPLAYAREA.webp", "GYM.webp",
  "INDOORPOOL.webp", "MULTIPLEPARTYHALL.webp", "POOLSIDECAFE.webp",
  "POOLSIDEDECK.webp", "PRIVATETHEATRE.webp", "PRIVATEWOODS.webp"
];

const Amenities = ({ openModal }) => {
  const [index, setIndex] = useState(0);
  const slides = [];

  // Group images into sets of 6
  for (let i = 0; i < images.length; i += 6) {
    slides.push(images.slice(i, i + 6));
  }

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative px-10 py-4 w-full overflow-hidden">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div>

          <div className="w-fit">
            <h2 className="text-gray-900 text-3xl font-bold">Amenities</h2>
            <div className="h-1 bg-primary mt-1 w-full"></div>
          </div>
          <p className="text-sm text-gray-600 mt-1">Discover a lifestyle enriched with premium amenities and facilities</p>
        </div>
        <button className="bg-primary text-white font-medium text-sm px-4 py-2 rounded flex items-center cursor-pointer" onClick={() => openModal("download-amenities")}>
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
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }}>
          {slides.map((slide, i) => (
            <div key={i} className="grid grid-cols-3 gap-4 w-full flex-shrink-0">
              {slide.map((img, j) => (
                <div key={j} className="relative overflow-hidden rounded-lg shadow-lg">
                  <img src={`/${img}`} alt={img} className="w-full h-auto object-cover" />
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="absolute bottom-2 left-2 font-bold text-white text-lg mb-1 px-2 py-1">
                    {img.replace(".webp", "").replace(/_/g, " ").toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())}

                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button onClick={prevSlide} className="absolute text-sm font-medium left-2 top-1/2 -translate-y-1/2 bg-[#e5fff6] border green-border p-2 rounded-full shadow-md flex items-center justify-center w-10 h-10 cursor-pointer">

        <ArrowLeft className="w-5 h-5" />
      </button>
      <button onClick={nextSlide} className="absolute text-sm font-medium right-2 top-1/2 -translate-y-1/2 bg-[#e5fff6] border green-border p-2 rounded-full shadow-md flex items-center justify-center w-10 h-10 cursor-pointer">

        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Amenities;
