"use client"
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { FaBook, FaUsers, FaRegEnvelope, FaFileImage, FaStore  } from "react-icons/fa";
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
];

export default function TopCards() {
  
  const axiosSecure = useAxiosSecure();
  const {
    data: total,
    isLoading,
    error,
    refetch
  } = useQuery("total", async () => {
    const response = await axiosSecure.get("/total-count");
    return response.data;
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;
  refetch()
  // console.log(total);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
        <div
          className="w-full p-8  custom-glass dark:bg-zinc-800 rounded-lg shadow-lg "
        >
          <div className=" ">
            <div className="flex items-center mb-2 justify-between w-full">
              <div className=" w-14 text-center border-4 border-green-600 p-2 rounded-full">
                <h4 className="font-bold text-3xl text-gray-600 ">{total.totalBooks}</h4>     
              </div>
              <div
                className="p-4 bg-green-500 dark:bg-green-600 rounded-lg text-white shadow-lg"
              >
               <FaBook size={28} />
              </div>
            </div>
            <p className="text-gray-600 font-bold text-l dark:text-gray-400">Total Books</p>
          </div>
        </div>
        <div
          className="w-full p-8  custom-glass dark:bg-zinc-800 rounded-lg shadow-lg "
        >
          <div className=" ">
            <div className="flex items-center mb-2 justify-between w-full">
              <div className="w-14 text-center border-4 border-blue-600 p-2 rounded-full">
                <h4 className="font-bold text-3xl text-gray-600 ">{total.totalPosts}</h4>     
              </div>
              <div
                className="p-4 bg-blue-500 dark:bg-blue-600 rounded-lg text-white shadow-lg"
              >
                <FaFileImage size={28}/>
              </div>
            </div>
            <p className="text-gray-600 font-bold text-l dark:text-gray-400">Total Posts</p>
          </div>
        </div>
        <div
          className="w-full p-8  custom-glass dark:bg-zinc-800 rounded-lg shadow-lg "
        >
          <div className=" ">
            <div className="flex items-center mb-2 justify-between w-full">
              <div className="w-14 text-center border-4 border-purple-600 p-2 rounded-full">
                <h4 className="font-bold text-3xl text-gray-600 ">{total.totalStoreBooks}</h4>     
              </div>
              <div
                className="p-4 bg-purple-600 dark:bg-purple-600 rounded-lg text-white shadow-lg"
              >
                <FaStore  size={28} />
              </div>
            </div>
            <p className="text-gray-600 font-bold text-l dark:text-gray-400">Total Store Books</p>
          </div>
        </div>
        <div
          className="w-full p-8  custom-glass dark:bg-zinc-800 rounded-lg shadow-lg "
        >
          <div className=" ">
            <div className="flex items-center mb-2 justify-between w-full">
              <div className="w-14 text-center border-4 border-pink-600 p-2 rounded-full ">
                <h4 className="font-bold text-3xl  text-gray-600 ">{total.totalUsers}</h4>     
              </div>
              <div
                className="p-4 bg-pink-500 dark:bg-pink-600 rounded-lg text-white shadow-lg"
              >
                <FaUsers size={28} />
              </div>
            </div>
            <p className="text-gray-600 font-bold text-l dark:text-gray-400">Total Users</p>
          </div>
        </div>
    </div>
  );
}


// return (
//   <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
//     {cardData.map((card) => (
//       <div
//         key={card.id}
//         className="w-full p-6 custom-glass dark:bg-zinc-800 rounded-lg shadow-lg flex items-center justify-between"
//       >
//         <div className="flex flex-col ">
//           <div className="flex items-center mb-2 flex-col">
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
        
//       </div>
//     ))}
//   </div>
// );
// }