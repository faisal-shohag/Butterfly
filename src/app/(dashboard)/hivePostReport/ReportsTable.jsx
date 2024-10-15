"use client";
import { useState, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import Loading from "@/components/common/Loading";

export default function ReportsTable({ handleMessageBox }) {

  const axiosSecure = useAxiosSecure();
  const [reports, setReports] = useState([]);
  const [openMenuId, setOpenMenuId] = useState(null);

  useEffect(() => {
    async function fetchReports() {
      try {
        const res = await axiosSecure.get('/reports');
        setReports(res.data);  
       
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    }
    fetchReports();
  }, []);

  if (reports.length === 0) return <div><Loading /></div>;

  
  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  
 

  return (
    <div className="container mx-auto py-6">
      <table className="w-full text-left border-collapse table-auto">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 font-semibold text-gray-700">User Name</th>
            <th className="p-3 font-semibold text-gray-700">Report Type</th>
            <th className="p-3 font-semibold text-gray-700">Report</th>
            <th className="p-3 font-semibold text-gray-700">Report Time</th>
            <th className="p-3 font-semibold text-gray-700">Last Action</th>
            <th className="p-3 font-semibold text-center text-gray-700">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {reports.reports.map((report) => (
            <tr key={report.id} className="hover:bg-gray-50">
              <td className="p-3 text-sm font-medium text-gray-900">
                {report.id}
              </td>
              <td className="p-3 text-sm text-gray-500"> Hive/Exchange </td>
              <td className="p-3 text-sm text-gray-500">
                {report.text}  
              </td>
              <td className="p-3 text-sm text-gray-500">{report.createdAt}</td>
              <td className="p-3 text-sm text-gray-500">Reviewed/Resolved</td>
              <td className="text-sm relative cursor-pointer">
                <div
                  className="flex justify-center items-center"
                  onClick={() => toggleMenu(report.id)}
                >
                  <BsThreeDotsVertical />
                </div>
                {openMenuId === report.id && (
                  <div className="absolute top-full border right-0 w-52 bg-white p-2 shadow-lg rounded-lg z-10">
                    <div
                      onClick={() => handleMessageBox(true)}
                      className="block p-2 text-sm hover:bg-gray-100 rounded"
                    >
                      Message User
                    </div>
                    <div
                      onClick={() => handleMessageBox(true)}
                      className="block p-2 text-sm hover:bg-gray-100 rounded"
                    >
                      Message Reported User
                    </div>
                    <Link
                      href="#"
                      className="block p-2 text-sm hover:bg-gray-100 rounded"
                    >
                      See Reported Post
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
