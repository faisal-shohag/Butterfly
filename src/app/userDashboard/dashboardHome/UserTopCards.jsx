import { FaBook, FaUsers, FaRegEnvelope, FaClipboardList } from "react-icons/fa";
import { MdCompareArrows, MdGroups2 } from "react-icons/md";

const cardData = [
  {
    id: 1,
    title: "My Total Posts",
    count: "10 Posts",
   
    icon: <FaClipboardList size={28} />,
    iconBg: "bg-green-500 dark:bg-green-600",
   
    description: "The total number of posts i've shared on the hive.",
  },
  {
    id: 2,
    title: "My Exchange Posts",
    count: "05 Exchanges",
  
    icon: <MdCompareArrows size={28} />,
    iconBg: "bg-purple-500 dark:bg-purple-600",
   
    description: "The total number of exchange posts I've initiated.",
  },
  {
    id: 3,
    title: "My Followers",
    count: "10 Followers",
   
    icon: <MdGroups2 size={28} />,
    iconBg: "bg-blue-500 dark:bg-blue-600",
  
    description: "The total number of people currently following my activity. ",
  },
];

export default function UserTopCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
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
            <span className="text-xs  text-gray-500 dark:text-gray-400">
              {card.description}
            </span>
          </div>
         
        </div>
      ))}
    </div>
  );
}
