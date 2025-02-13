import { MapPin } from "lucide-react";

const landmarks = [
  { name: "Near Sandoz Baug Bus Stop", time: "" },
  { name: "Orchid International School", time: "5 Mins" },
  { name: "Viviana Mall", time: "10 Mins" },
  { name: "Ghodbunder Road", time: "5 Mins" },
  { name: "Kapurwadi Junction", time: "5 Mins" },
  { name: "Thane Railway Station", time: "20 Mins" }
];

const Location = ({ openModal }) => {
  return (
    <>

      {/* Location Section */}
      <div className="px-10 py-4 bg-gey-50 ">


        <div className="w-fit">
          <h2 className="text-gray-900 text-3xl font-bold">Location</h2>
          <div className="h-1 bg-primary mt-1 w-full"></div>
        </div>

        <p className="text-sm text-gray-600 mb-6 mt-1">Strategically located for your convenience</p>
        <div className="grid grid-cols-2 gap-8">
          {/* Map View */}
          <div className="rounded-lg shadow-md">
            <h3 className="font-bold text-xl text-gray-900 mb-6">Map View</h3>
            <div className="relative w-full pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.0800452259236!2d72.98642671421521!3d19.235342951944546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bb804e995433%3A0x2f047ee0483afb5a!2sLodha%20Amara!5e0!3m2!1sen!2sin!4v1626253261880!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full rounded-lg shadow-md"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Location Details */}
          <div className="rounded-lg shadow-md">
            <h3 className="font-bold text-xl text-gray-900 mb-6">Location Details</h3>
            <div className="relative overflow-hidden group cursor-pointer rounded-lg">
              {/* Image with Blur and Scale Effect */}
              <img
                src="/map.webp"
                alt="Location Details"
                className="w-full aspect-video rounded-lg shadow-md object-cover transition-transform duration-500 ease-in-out blur-[1px] group-hover:scale-105"
              />

              {/* Dark Overlay on Hover */}
              <div className="absolute inset-0 bg-black/30 transition-all duration-500 group-hover:bg-black/50"></div>

              {/* Enquire Now Button (Appears on Hover) */}
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <button className="flex items-center gap-2 px-6 py-2 bg-white text-gray-900 font-medium rounded-lg shadow-md cursor-pointer"
                  onClick={() => openModal("get-location")} // Correct enquiryType
                >
                  <MapPin className="w-5 h-5 text-gray-900" />
                  <span className="text-gray-900 text-sm">Get Location</span>
                </button>
              </div>
            </div>
          </div>
        </div>


        {/* Nearby Landmarks Section */}
        <div className="mt-10">
          <h2 className="font-bold text-xl text-gray-900  mb-4">Nearby Landmarks</h2>
          <div className="grid grid-cols-2 gap-6">
            {landmarks.map((landmark, index) => (
              <div key={index} className="flex items-center gap-y-4 gap-x-8">
                <MapPin className="text-primary w-5 h-5 ml-2" />
                <div>
                  <p className="text-gray-900 text-base font-medium">{landmark.name}</p>
                  {landmark.time && <p className="text-sm text-gray-600">{landmark.time}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
