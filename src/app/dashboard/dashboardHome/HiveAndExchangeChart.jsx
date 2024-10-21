import React from "react";

export default function HiveAndExchangeChart() {
  // Dummy monthly data for Hive activity
  const hiveData = [
    { month: "Jan", value: 30 },
    { month: "Feb", value: 25 },
    { month: "Mar", value: 20 },
    { month: "Apr", value: 40 },
    { month: "May", value: 35 },
    { month: "Jun", value: 45 },
    { month: "Jul", value: 50 },
    { month: "Aug", value: 55 },
    { month: "Sep", value: 60 },
    { month: "Oct", value: 65 },
    { month: "Nov", value: 70 },
    { month: "Dec", value: 75 },
  ];

  const maxValue = Math.max(...hiveData.map((data) => data.value));

  return (
    <div className="w-full grid grid-cols-1 gap-3 my-3 sm:grid-cols-3">
      {/* Hive Data - Enhanced Line Chart with Month Labels */}
      <div className="w-full col-span-1 sm:col-span-2 custom-glass rounded-md p-6">
        <h2 className="font-bold text-lg mb-4">Hive Activity (Monthly)</h2>
        <svg viewBox="0 0 100 40" className="w-full h-40">
          {/* X and Y Axes */}
          <line
            x1="10"
            y1="5"
            x2="10"
            y2="35"
            stroke="gray"
            strokeWidth="0.5"
          />
          <line
            x1="10"
            y1="35"
            x2="90"
            y2="35"
            stroke="gray"
            strokeWidth="0.5"
          />

          {/* Gridlines and Y-axis labels */}
          {[10, 20, 30, 40, 50, 60, 70].map((val, index) => (
            <text
              key={index}
              x="5"
              y={35 - (val / maxValue) * 30}
              fontSize="2"
              fill="gray"
            >
              {val}
            </text>
          ))}

          {/* Line Data */}
          <polyline
            fill="none"
            stroke="#4ade80"
            strokeWidth=".5"
            strokeLinecap="round"
            points={hiveData
              .map(
                (data, index) =>
                  `${10 + (index * 80) / (hiveData.length - 1)},${35 - (data.value / maxValue) * 30}`
              )
              .join(" ")}
          />

          {/* Data points */}
          {hiveData.map((data, index) => (
            <circle
              key={index}
              cx={10 + (index * 80) / (hiveData.length - 1)}
              cy={35 - (data.value / maxValue) * 30}
              r="1"
              fill="#4ade80"
            />
          ))}

          {/* Month labels */}
          {hiveData.map((data, index) => (
            <text
              key={index}
              x={10 + (index * 80) / (hiveData.length - 1)}
              y="38"
              fontSize="2.5"
              fill="gray"
              textAnchor="middle"
            >
              {data.month}
            </text>
          ))}
        </svg>
      </div>

      {/* Exchange Book Data - Pie Chart */}
      <div className="w-full custom-glass rounded-md p-6">
        <h2 className="font-bold text-lg mb-4">Exchange Book (Distribution)</h2>
        <svg viewBox="0 0 32 32" className="w-32 h-32 mx-auto">
          {/* Pie chart segments */}
          <circle r="16" cx="16" cy="16" fill="#a78bfa" />
          <path d="M16 16 L16 0 A16 16 0 0 1 28 16 Z" fill="#4ade80" />
          <path d="M16 16 L28 16 A16 16 0 0 1 16 28 Z" fill="#f59e0b" />
          <circle r="8" cx="16" cy="16" fill="white" />
        </svg>
        <div className="flex justify-center space-x-4 mt-4">
          <div className="flex items-center">
            <span className="w-3 h-3 bg-purple-500 inline-block mr-2"></span>
            <span>Science</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-green-500 inline-block mr-2"></span>
            <span>Literature</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-yellow-500 inline-block mr-2"></span>
            <span>Technology</span>
          </div>
        </div>
      </div>
    </div>
  );
}
