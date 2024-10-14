"use client";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";

export default function ReportsTable() {
  const [openMenuId, setOpenMenuId] = useState(null);

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const reports = [
    {
      id: 1,
      username: "John Doe",
      reportType: "Hive",
      reportedUser: "Jane Smith",
      reportTime: "2024-10-15 10:45 AM",
      lastAction: "Reviewed",
    },
    {
      id: 2,
      username: "Alice Brown",
      reportType: "Exchange",
      reportedUser: "Tom Hardy",
      reportTime: "2024-10-14 08:30 AM",
      lastAction: "Pending",
    },
    {
      id: 3,
      username: "Michael Scott",
      reportType: "Hive",
      reportedUser: "Dwight Schrute",
      reportTime: "2024-10-13 04:20 PM",
      lastAction: "Resolved",
    },
    {
      id: 4,
      username: "Pam Beesly",
      reportType: "Exchange",
      reportedUser: "Angela Martin",
      reportTime: "2024-10-12 09:50 AM",
      lastAction: "Pending",
    },
    {
      id: 5,
      username: "Jim Halpert",
      reportType: "Hive",
      reportedUser: "Stanley Hudson",
      reportTime: "2024-10-11 11:30 AM",
      lastAction: "Reviewed",
    },
    {
      id: 6,
      username: "Andy Bernard",
      reportType: "Exchange",
      reportedUser: "Ryan Howard",
      reportTime: "2024-10-10 12:15 PM",
      lastAction: "Reviewed",
    },
    {
      id: 7,
      username: "Kelly Kapoor",
      reportType: "Hive",
      reportedUser: "Toby Flenderson",
      reportTime: "2024-10-09 02:45 PM",
      lastAction: "Resolved",
    },
    {
      id: 8,
      username: "Creed Bratton",
      reportType: "Exchange",
      reportedUser: "Meredith Palmer",
      reportTime: "2024-10-08 10:20 AM",
      lastAction: "Reviewed",
    },
    {
      id: 9,
      username: "Oscar Martinez",
      reportType: "Hive",
      reportedUser: "Kevin Malone",
      reportTime: "2024-10-07 08:10 AM",
      lastAction: "Pending",
    },
    {
      id: 10,
      username: "Phyllis Vance",
      reportType: "Exchange",
      reportedUser: "Bob Vance",
      reportTime: "2024-10-06 05:55 PM",
      lastAction: "Reviewed",
    },
    {
      id: 11,
      username: "Stanley Hudson",
      reportType: "Hive",
      reportedUser: "Michael Scott",
      reportTime: "2024-10-05 07:35 AM",
      lastAction: "Pending",
    },
    {
      id: 12,
      username: "Dwight Schrute",
      reportType: "Exchange",
      reportedUser: "Jim Halpert",
      reportTime: "2024-10-04 06:25 PM",
      lastAction: "Reviewed",
    },
  ];

  return (
    <div className="container mx-auto py-6">
      <table className="w-full text-left border-collapse table-auto">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 font-semibold text-gray-700">User Name</th>
            <th className="p-3 font-semibold text-gray-700">Report Type</th>
            <th className="p-3 font-semibold text-gray-700">Reported User</th>
            <th className="p-3 font-semibold text-gray-700">Report Time</th>
            <th className="p-3 font-semibold text-gray-700">Last Action</th>
            <th className="p-3 font-semibold text-center text-gray-700">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {reports.map((report) => (
            <tr key={report.id} className="hover:bg-gray-50">
              <td className="p-3 text-sm font-medium text-gray-900">
                {report.username}
              </td>
              <td className="p-3 text-sm text-gray-500">{report.reportType}</td>
              <td className="p-3 text-sm text-gray-500">
                {report.reportedUser}
              </td>
              <td className="p-3 text-sm text-gray-500">{report.reportTime}</td>
              <td className="p-3 text-sm text-gray-500">{report.lastAction}</td>
              <td className="text-sm relative cursor-pointer">
                <div
                  className="flex justify-center items-center"
                  onClick={() => toggleMenu(report.id)}
                >
                  <BsThreeDotsVertical />
                </div>
                {openMenuId === report.id && (
                  <div className="absolute top-full border right-0 w-52 bg-white p-2 shadow-lg rounded-lg z-10">
                    <Link
                      href="#"
                      className="block p-2 text-sm hover:bg-gray-100 rounded"
                    >
                      Message User
                    </Link>
                    <Link
                      href="#"
                      className="block p-2 text-sm hover:bg-gray-100 rounded"
                    >
                      Message Reported User
                    </Link>
                    <Link
                      href="#"
                      className="block p-2 text-sm hover:bg-gray-100 rounded"
                    >
                      Delete Report
                    </Link>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
