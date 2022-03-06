import Image from "next/image";

function Hero({ results }) {
  const BASE_URL = `https://image.tmdb.org/t/p/original`;
  return (
    <div>
      <div className="w-full h-screen relative">
        <div className="absolute w-full h-full z-10 ">
          <div className="px-16  h-full flex items-center justify-start">
            <div className="hidden lg:flex flex-col w-2/5 space-y-4 py-12 ">
              <h3 className="text-3xl font-semibold text-white ">
                {results.original_title}
              </h3>
              <p className="text-lg text-white">
                {results.overview}
              </p>
              <p className="text-lg text-white">
                {results.release_date}{` | `}{results.popularity}{` | `}{results.status}
              </p>
              <div className="flex space-x-4 flex-row w-full">
                <button className=" px-3 mt-5 items-center shadow-md rounded-lg bg-white  space-x-2 py-2 justify-center flex w-32">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-800 font-semibold">Play</span>
                </button>
                <button className=" px-3 mt-5 items-center shadow-md rounded-lg bg-gray-500 bg-opacity-50  space-x-2 py-2 justify-center flex w-auto">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span className="text-white font-semibold">Information</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-full h-64 bottom-0 bg-gradient-to-t from-black"></div>
        <div className="w-full h-64 lg:h-screen object-cover -mt-5">
          <Image alt=""
            src={
              `${BASE_URL}${results.backdrop_path || results.poster_path}` ||
              `${BASE_URL}${results.poster_path}`
            }
            className="h-screen object-contain"
            height={1080}
            width={1920}
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default Hero;
