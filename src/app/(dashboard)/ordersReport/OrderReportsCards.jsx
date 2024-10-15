import { IoBagCheckSharp, IoCash, IoStatsChart } from "react-icons/io5"; // Icons from react-icons

export default function OrderReportsCards() {
  // Dummy data for radial progress
  const ordersProgress = 75; // Represents 75%
  const revenueProgress = 50; // Represents 50%
  const growthProgress = 90; // Represents 90%

  // Function to calculate stroke-dashoffset for radial progress
  const calcStrokeDashOffset = (progress) => {
    const radius = 30; // Radius of the circle
    const circumference = 2 * Math.PI * radius;
    return circumference - (progress / 100) * circumference;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* Total Orders Card */}
      <div className="p-3 border shadow-md rounded-lg hover:shadow-lg  transition-transform bg-gradient-to-r from-indigo-500 to-blue-500">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Total Orders</h2>
          <IoBagCheckSharp className="text-3xl text-white" />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold text-center text-white">100</h2>
            <p className="text-center text-gray-200">
              Orders Progress: {ordersProgress}%
            </p>
          </div>
          <div className="flex justify-center items-center pt-4">
            <svg className="w-20 h-20">
              <circle
                className="text-gray-300"
                strokeWidth="6"
                stroke="currentColor"
                fill="transparent"
                r="30"
                cx="40"
                cy="40"
              />
              <circle
                className="text-white"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray="188.4" // 2 * PI * 30 (circumference)
                strokeDashoffset={calcStrokeDashOffset(ordersProgress)}
                stroke="currentColor"
                fill="transparent"
                r="30"
                cx="40"
                cy="40"
                style={{
                  transform: "rotate(-90deg)",
                  transformOrigin: "center",
                }}
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Total Revenue Card */}
      <div className="p-3 border shadow-md rounded-lg hover:shadow-lg  transition-transform bg-gradient-to-r from-green-500 to-teal-500">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Total Revenue</h2>
          <IoCash className="text-3xl text-white" />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start">
            {" "}
            <h2 className="text-2xl font-bold text-center text-white">500$</h2>
            <p className="text-center text-gray-200">
              Revenue Progress: {revenueProgress}%
            </p>
          </div>
          <div className="flex justify-center items-center pt-4">
            <svg className="w-20 h-20">
              <circle
                className="text-gray-300"
                strokeWidth="6"
                stroke="currentColor"
                fill="transparent"
                r="30"
                cx="40"
                cy="40"
              />
              <circle
                className="text-white"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray="188.4"
                strokeDashoffset={calcStrokeDashOffset(revenueProgress)}
                stroke="currentColor"
                fill="transparent"
                r="30"
                cx="40"
                cy="40"
                style={{
                  transform: "rotate(-90deg)",
                  transformOrigin: "center",
                }}
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Growth Card */}
      <div className="p-3 border shadow-md rounded-lg hover:shadow-lg  transition-transform bg-gradient-to-r from-pink-500 to-red-500">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Growth</h2>
          <IoStatsChart className="text-3xl text-white" />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold text-center text-white">90%</h2>
            <p className="text-center text-gray-200">
              Growth Progress: {growthProgress}%
            </p>
          </div>
          <div className="flex justify-center items-center pt-4">
            <svg className="w-20 h-20">
              <circle
                className="text-gray-300"
                strokeWidth="6"
                stroke="currentColor"
                fill="transparent"
                r="30"
                cx="40"
                cy="40"
              />
              <circle
                className="text-white"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray="188.4"
                strokeDashoffset={calcStrokeDashOffset(growthProgress)}
                stroke="currentColor"
                fill="transparent"
                r="30"
                cx="40"
                cy="40"
                style={{
                  transform: "rotate(-90deg)",
                  transformOrigin: "center",
                }}
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
