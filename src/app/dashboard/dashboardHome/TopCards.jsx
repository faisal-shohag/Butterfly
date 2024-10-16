"use client"
import useAxiosSecure from "@/hooks/useAxiosSecure";

import { FaBook, FaUsers, FaRegEnvelope } from "react-icons/fa";
import { useQuery } from "react-query";

const cardData = [
  {
    id: 1,
    title: "Stock Books",
    count: "1,200 Books",
    progress: 70,
    icon: <FaBook size={28} />,
    iconBg: "bg-blue-500 dark:bg-blue-600",
    circleColor: "text-blue-500 dark:text-blue-400",
    description: "Total available stock in inventory",
  },
  {
    id: 2,
    title: "Total Users",
    count: "850 Users",
    progress: 85,
    icon: <FaUsers size={28} />,
    iconBg: "bg-purple-500 dark:bg-purple-600",
    circleColor: "text-purple-500 dark:text-purple-400",
    description: "Total registered users",
  },
  {
    id: 3,
    title: "Subscribers",
    count: "560 Subscribers",
    progress: 56,
    icon: <FaRegEnvelope size={28} />,
    iconBg: "bg-green-500 dark:bg-green-600",
    circleColor: "text-green-500 dark:text-green-400",
    description: "Total active email subscribers",
  },
  {
    id: 3,
    title: "Subscribers",
    count: "560 Subscribers",
    progress: 56,
    icon: <FaRegEnvelope size={28} />,
    iconBg: "bg-green-500 dark:bg-green-600",
    circleColor: "text-green-500 dark:text-green-400",
    description: "Total active email subscribers",
  },
];


export default function TopCards() {
  const axiosSecure = useAxiosSecure();
  const {
    data: total,
    isLoading,
    error,
  } = useQuery("total", async () => {
    const response = await axiosSecure.get("/total-count");
    return response.data;
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;
console.log(total);

  
return (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
    <h1>{total.totalBooks}</h1>
    {cardData.map((card) => (
      <div
        key={card.id}
        className="w-full p-6 custom-glass dark:bg-zinc-800 rounded-lg shadow-lg flex items-center justify-between"
      >
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-2">
            <div
              className={`p-4 ${card.iconBg} rounded-lg text-white shadow-lg`}
            >
              {card.icon}
            </div>
            <div className="ml-4">
              <h4 className="font-bold text-lg">{card.title}</h4>
              <p className="text-gray-600 dark:text-gray-400">{card.count}</p>
            </div>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {card.description}
          </span>
        </div>
        <div className="relative w-20 h-20">
          <svg className="w-full h-full">
            <circle
              className="text-gray-200"
              strokeWidth="10"
              stroke="currentColor"
              fill="transparent"
              r="35"
              cx="50%"
              cy="50%"
            />
            <circle
              className={card.circleColor}
              strokeWidth="10"
              strokeDasharray="220"
              strokeDashoffset={220 - (220 * card.progress) / 100} // Dynamic progress
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="35"
              cx="50%"
              cy="50%"
            />
          </svg>
          <span
            className={`absolute inset-0 flex items-center justify-center ${card.circleColor} font-bold`}
          >
            {card.progress}%
          </span>
        </div>
      </div>
    ))}
  </div>
);
}




// return (
//   <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
//     <h1>{total.totalBooks}</h1>
//     {cardData.map((card) => (
//       <div
//         key={card.id}
//         className="w-full p-6 custom-glass dark:bg-zinc-800 rounded-lg shadow-lg flex items-center justify-between"
//       >
//         <div className="flex flex-col items-start">
//           <div className="flex items-center mb-2">
//             <div
//               className={`p-4 ${card.iconBg} rounded-lg text-white shadow-lg`}
//             >
//               {card.icon}
//             </div>
//             <div className="ml-4">
//               <h4 className="font-bold text-lg">{card.title}</h4>
//               <p className="text-gray-600 dark:text-gray-400">{card.count}</p>
//             </div>
//           </div>
//           <span className="text-xs text-gray-500 dark:text-gray-400">
//             {card.description}
//           </span>
//         </div>
//         <div className="relative w-20 h-20">
//           <svg className="w-full h-full">
//             <circle
//               className="text-gray-200"
//               strokeWidth="10"
//               stroke="currentColor"
//               fill="transparent"
//               r="35"
//               cx="50%"
//               cy="50%"
//             />
//             <circle
//               className={card.circleColor}
//               strokeWidth="10"
//               strokeDasharray="220"
//               strokeDashoffset={220 - (220 * card.progress) / 100} // Dynamic progress
//               strokeLinecap="round"
//               stroke="currentColor"
//               fill="transparent"
//               r="35"
//               cx="50%"
//               cy="50%"
//             />
//           </svg>
//           <span
//             className={`absolute inset-0 flex items-center justify-center ${card.circleColor} font-bold`}
//           >
//             {card.progress}%
//           </span>
//         </div>
//       </div>
//     ))}
//   </div>
// );
