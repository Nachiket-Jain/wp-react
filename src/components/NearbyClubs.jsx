import React from "react";
import HeaderHome from "./HeaderHome";

const places = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1a/Andheri_sports_complex_stadium.jpg",
    rating: 5,
    name: "Andheri Sports Complex",
    vicinity: "Andheri ",
    types: ["Badminton", "Swimming", "Football"],
    contact: "+91 93091 83309",
    maplink: "https://g.co/kgs/fJ9KVED",
  },
  {
    image:
      "https://snworksceo.imgix.net/cav/8d443aec-2090-4e9e-8793-6b95d830d89f.sized-1000x1000.JPG?w=1000",
    rating: 4.5,
    name: "Fitness First India",
    vicinity: "Andheri West",
    types: ["Gym", "Fitness Center"],
    contact: "022 2626 5858",
    maplink: "https://g.co/kgs/tjicLbm",
  },
  {
    image:
      "https://content.jdmagicbox.com/v2/comp/mumbai/y7/022pxx22.xx22.170425150546.h3y7/catalogue/the-yoga-institute-mumbai-vqkteua9rm.jpg",
    rating: 3.5,
    name: "The Yoga Institute",
    vicinity: "Santacruz West",
    types: ["Yoga", "Wellness", "Accupressure"],
    contact: "022 2661 0101",
    maplink: "https://g.co/kgs/2TpLDjj",
  },
  {
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_500,q_auto:eco,dpr_2,f_auto,fl_progressive//image/gymfit/centers/prod/CENTER387/cf72f29e-6b71-4c79-affe-e1cb6aee28beDSC_5338-HDR.JPG",
    rating: 4.3,
    name: "Gold's Gym",
    vicinity: "Andheri East",
    types: [" Gym", "Fitness Center"],
    contact: "+91 72824 86565",
    maplink: "https://g.co/kgs/KnZ6fmy",
  },
  {
    image:
      "https://www.master-sh-yu.com/wp-content/uploads/2019/08/XqffXVMGSgIMpzBxinvoQ-e1575654366554.jpg",
    rating: 3.9,
    name: "Krav Maga India",
    vicinity: "Khar West",
    types: ["Martial Arts", "Self-Defense"],
    contact: "022 2611 8456",
    maplink: "https://g.co/kgs/qfFc1xp",
  },
  {
    image:
      "https://sportsacademy.somaiya.edu/assets/sportsacademy/img/home/academicprgm/MSC-image-sport.jpg",
    rating: 4,
    name: "Kings Sports Academy",
    vicinity: "Ghatkopar East",
    types: ["Cricket", "Badminton", "Football Turf"],
    contact: "+91 91875 55832",
    maplink: "https://g.co/kgs/w7pezB4",
  },
];

function NearbyClubs() {
  return (
    <div>
      <HeaderHome />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-24 p-6 bg-[#290942]">
        {places.map((place, index) => (
          <div
            key={index}
            className="max-w-sm md:max-w-md cursor-pointer rounded-xl bg-[#5e3b7a] dark:bg-gray-800 p-3 shadow-lg hover:shadow-xl hover:scale-95 transition-all duration-200"
          >
            <div className="relative flex items-end overflow-hidden rounded-xl">
              <img
                className="rounded-t-lg w-full h-[39vh] sm:h-[20vh] lg:h-[39vh] min-h-[250px] object-cover object-center"
                // src="https://theclubmumbai.com/wp-content/uploads/2024/01/Basketball-court.jpg"
                src={place.image}
                alt="tourist places"
              />

              <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg p-2 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>

                <span className="ml-1 text-sm text-slate-400">
                  {place.rating}
                </span>
              </div>
            </div>

            <div className="mt-1 p-2">
              <h2 className="text-xl font-semibold tracking-tight text-white dark:text-white">
                {place.name}
              </h2>
              <p className="mt-1 text-sm text-white dark:text-slate-400">
                {place.vicinity}
              </p>
              <div className="flex flex-wrap gap-2 my-2">
                {place?.types.map((type, index) => {
                  if (index > 6) return null;
                  return (
                    <span
                      key={index}
                      className="bg-white text-gray-950 text-xs font-semibold px-2.5 py-0.5 rounded-md dark:bg-blue-200 dark:text-blue-800"
                    >
                      {type}
                    </span>
                  );
                })}
              </div>
              <div className="flex items-center justify-between text-white">
                <div>
                  <p>Contact Details</p>
                  <p className="text-sm text-white dark:text-white">
                    <span className="text-lg font-bold text-white">
                      {place.contact}
                    </span>{" "}
                  </p>
                </div>

                <div className="focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-orange-500 text-white ml-auto">
                  <button>
                    <a href={place.maplink} target="_blank">
                      View on Map
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NearbyClubs;
