const WeatherCard = () => {
  return (
    <div className="flex flex-col md:lg:xl:flex-row">
      {/* <!-- light --> */}
      <div className="h-screen w-screen md:lg:xl:w-1/2 bg-gray-100 flex flex-wrap justify-center content-center ">
        {/* <!-- card a --> */}

        <div className="bg-white p-8 rounded-xl shadow-lg shadow-neutral-200 w-96">
          {/* <!-- header --> */}
          <div className="flex justify-between mb-4">
            <div>
              <p className="text-lg font-semibold text-neutral-700">
                Devon Lane
              </p>
              <p className="mt-0.5  text-neutral-400 text-sm">WooCommerce</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-neutral-700">
                $1,848.00
              </p>
              <p className="mt-0.5  text-neutral-400 text-sm">#940590</p>
            </div>
          </div>
          {/* <!-- bedge --> */}
          <span className="text-orange-500   px-3 text-sm py-1.5 bg-red-50 rounded-lg font-semibold">
            Missing Info
          </span>

          <div className="flex items-center justify-between mt-5">
            <div className="flex items-center">
              <svg
                className="h-5 w-5 stroke-gray-400 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="gray-400"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-neutral-400 text-sm">Added Today</span>
            </div>
            <div className="flex items-center">
              <span className="text-neutral-400 text-sm">0</span>
            </div>
          </div>

          {/* <!-- body --> */}
          <div className="mt-5 border-t border-dashed space-y-4 py-4">
            {/* <!-- item 1 --> */}
            <div className="flex justify-between group duration-150 cursor-pointer">
              <div>
                <p className="text-lg text-neutral-600 group-hover:text-red-600 duration-150">
                  iPhone 13 Pro
                </p>
                <p className="text-sm text-neutral-400">512GB, Sierra Blue</p>
              </div>
              <span className="text-lg text-neutral-600">1</span>
            </div>

            {/* <!-- item 2 --> */}
            <div className="flex justify-between group duration-150 cursor-pointer">
              <div>
                <p className="text-lg text-neutral-600 group-hover:text-red-600 duration-150">
                  Apple Watch Series 7
                </p>
                <p className="text-sm text-neutral-400">
                  44mm, cellular, space gray
                </p>
              </div>
              <span className="text-lg text-neutral-600">1</span>
            </div>
          </div>
          <div className="text-center cursor-pointer duration-150 hover:bg-neutral-200 py-0.5 bg-neutral-100 text-neutral-400 font-semibold rounded-lg mt-3">
            +1 more
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
