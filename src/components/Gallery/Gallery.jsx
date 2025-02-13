import { Download, MapPin } from "lucide-react";

const galleryImages = [
  "/gallery-1.webp",
  "/gallery-2.webp",
  "/gallery-3.webp",
  "/gallery-4.webp"
];


const Gallery = ({ openModal }) => {
  return (
    <>
      {/* Gallery Section */}
      <div className="px-10 py-4 w-full">
        <div className="flex justify-between items-center">

          <div className="w-fit">
            <h2 className="text-gray-900 text-3xl font-bold">Gallery</h2>
            <div className="h-1 bg-primary mt-1 w-full"></div>
          </div>

          <button className="bg-primary text-white font-medium text-sm px-4 py-2 rounded flex items-center gap-2 shadow-md hover:bg-primary-dark transition cursor-pointer"
            onClick={() => openModal("download-gallery")} // Correct enquiryType
          >
            <Download className="w-5 h-5" /> Download Gallery
          </button>
        </div>
        <p className="text-sm text-gray-600 mb-8 mt-1">Experience luxury living through our carefully curated spaces</p>
        <div className="grid grid-cols-4 gap-4">
          {galleryImages.map((img, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-auto transition-transform duration-500 ease-in-out transform group-hover:scale-105"
              />
              {/* Overlay effect */}
              <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default Gallery;
