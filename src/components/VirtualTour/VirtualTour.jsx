import { Play } from "lucide-react";
import lodhaLogo from "/logo.svg";

const VirtualTour = ({ openModal }) => {
  const reraImages = [
    { src: "/P51700020164.webp", number: "P51700020164" },
    { src: "/P51700020128.webp", number: "P51700020128" },
    { src: "/P51700018579.webp", number: "P51700018579" },
    { src: "/P51700020157.webp", number: "P51700020157" }
  ];

  const features = [
    { title: "360° Views", description: "Explore every corner of our property in detail" },
    { title: "Live Interaction", description: "Real-time guidance from our property experts" },
    { title: "Flexible Timing", description: "Schedule your tour at your convenience" },
  ];

  return (
    <>
      <div className="lg:px-10 lg:py-8 p-4">


        <div className="w-fit">

          <h2 className="text-gray-900 text-2xl sm:text-3xl font-bold">Virtual Tour Request</h2>
          <div className="h-1 bg-primary mt-1 w-full"></div>
        </div>

        <p className="text-sm text-gray-600 mb-8 mt-1">
          Experience Lodha Amara from the comfort of your home
        </p>

        <div
          className="relative rounded-lg overflow-hidden shadow-md w-full group cursor-pointer"
          onClick={() => openModal("request-virtual-tour")}
        >
          {/* Image with Scale Effect */}
          <img
            src="/banner-1.png"
            alt="Virtual Tour"
            className="w-full h-auto transition-all duration-500 group-hover:scale-105"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-white">
            {/* Play Button */}
            <div className="w-16 h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 bg-white/30 rounded-full flex items-center justify-center">
              <Play className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-white" />
            </div>

            {/* Virtual Tour Text */}
            <span className="text-xl lg:text-2xl xl:text-3xl font-bold mt-4">
              Virtual Tour
            </span>

            {/* Description Text */}
            <p className="text-base lg:text-lg xl:text-xl text-white/90 font-bold text-center mt-1 px-4">
              Experience Lodha Amara from the comfort of your home
            </p>
          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-4 md:px-10 mt-6 ">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-50 rounded-xl shadow-sm p-6">
            <h3 className="font-semibold text-lg text-gray-900">{feature.title}</h3>
            <p className="text-gray-600 text-sm mt-1">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="lg:px-10 lg:py-8 p-4">
        <div className="flex justify-center mb-6">
          <img src={lodhaLogo} alt="Lodha Preferred Partner" className="h-14" />
        </div>

        {/* About Section */}
        <div className=" mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">About Lodha Amara</h2>
          <p className="text-gray-600 mt-4 text-base text-justify leading-relaxed ">
            One of India's leading real estate firms, the Lodha Group is renowned for building urban dream homes that offer refined living. The developer caters to all segments, from luxury to budget residences and has built iconic landmarks all across Mumbai, Thane, and Navi Mumbai. Lodha properties are known to feature quality interiors, state-of-the-art amenities, vast open spaces, and manicured green landscapes. A few of their standout properties are Lodha World Towers in Lower Parel, Lodha Palava in Dombivli, Lodha Crown in Thane, and Lodha Bellagio in Powai.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900">RERA Information</h2>

          {/* Grid Layout for QR Codes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 place-items-center w-full">
            {reraImages.map((img, index) => (
              <div key={index} className="text-center">
                <img src={img.src} alt={`RERA ${img.number}`} className="w-28 h-28 mx-auto" />
                <p className="text-gray-600 mt-2 text-[10px]">Rera No. {img.number}</p>
              </div>
            ))}
          </div>
        </div>





        <div className="mb-12">
          <h2 className="text-sm font-bold text-gray-900">Legal Information</h2>
          <ul className="mt-4 text-gray-600 text-[10px] pl-5 space-y-2">
            {[
              "Project Registered under Government of India RERA Act 2016",
              "Government RERA Authorised Advertiser: Marketing Space Pvt Ltd, Registration No A51700005065, CIN U74999MH2018PTC288144",
              "RERA Project Registration No.: P51700020164 / P51700020128 / P51700018579 / P51700020157",
              "Lodha Amara: Kolshet Rd, Kolshet Industrial Area, Thane West, Thane, Maharashtra 400607"
            ].map((item, index) => (
              <li key={index} className="relative pl-4">
                {/* Custom Dot */}
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary rounded-full h-2 w-2"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>


        <div className="p-4 bg-gray-100 rounded-md">
          <h3 className="text-sm font-semibold text-gray-900">Disclaimer</h3>
          <p className="text-gray-600 text-[12px] mt-2 text-justify">
            The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserve
          </p>
        </div>
      </div>
    </>
  );
};

export default VirtualTour;
