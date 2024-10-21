"use client";

import { useEffect, useState } from "react";
import ReportsTable from "./ReportsTable";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useSession } from "next-auth/react";
import { useQuery } from "react-query";
import Loading from "@/components/common/Loading";
import { Button } from "@/components/ui/button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const page = () => {
  const axiosSecure = useAxiosSecure();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const {  data:session } = useSession(); 
 console.log(session)
  const { data: reports = [], isLoading, error } = useQuery(["reports", currentPage, itemsPerPage], 
    async () => {
    const response = await axiosSecure.get(`/reports?page=${currentPage}&limit=${itemsPerPage}`);
    return response.data;
  });


  const totalReport = reports.totalReports || 0
  const numberOfPages = Math.ceil(totalReport / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];


  const handleItemParPage = (e) => {
    const value = parseInt(e.target.value);
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  // Handle pagination: go to previous page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  // Handle pagination: go to next page
  const handleNextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  }
  useEffect(() => {
  }, [itemsPerPage]);

  if (isLoading) {
    return <Loading/>;
  }
  return (
    <div className="p-4">
    <div className="flex justify-between items-center my-5 px-6">
        <h3 className="text-center">Total: {reports.totalReports} Reports</h3>
        <h3 className="text-2xl font-bold text-center">Users Report</h3>
        <div className="flex gap-1 justify-end items-center mr-4 text-sm font-medium">
          <p className="px-2 py-1">Show:</p>
          <select
            onChange={handleItemParPage}
            value={itemsPerPage}
            className="border px-2 py-1"
          >
            <option value="6">6</option>
            <option value="20">20</option>
            <option value="40">40</option>
            <option value="60">60</option>
          </select>
        </div>
      </div>

    <ReportsTable session={session} reports={reports}/>

    <div className="md:w-1/2 mx-auto mt-10 mb-5 flex justify-center gap-3">
        <Button variant="outline" 
        onClick={handlePrevPage}
         disabled={currentPage === 1}>
          <FaChevronLeft />
        </Button>
        {pages.map(page => (
          <Button
            key={page}
            variant="outline"
            onClick={() => setCurrentPage(page + 1)}
            className={currentPage === page + 1 ? "text-red-500" : ""}
          >
            {page + 1}
          </Button>
        ))}
        <Button variant="outline"
         onClick={handleNextPage}
          disabled={currentPage === pages.length}>
          <FaChevronRight />
        </Button>
      </div>
  </div>
  );
};

export default page;