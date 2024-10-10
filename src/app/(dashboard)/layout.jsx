 'use server' 
import DashboardNavbar from '@/components/common/DashboardNavbar';
 import Link from 'next/link';
import React from 'react';
import { FiLogOut } from "react-icons/fi";



const layout =({children})=> {
     
    return ( 
        <div> 
            <div className="bg-background h-14 lg:hidden">
            <DashboardNavbar></DashboardNavbar>
            </div>
            <div className="bg-background h-14 hidden lg:flex justify-center items-center">
            <h3 className="text-3xl font-bold text-pink-500 text-center">ButterFly Admin DashBoard</h3> 

            </div>
             
            <div className='flex gap-8 lg:px-6 my-10'> 
            <div className='w-96 min:h-screen space-y-4 border shadow-md rounded-md p-4 hidden lg:flex flex-col bg-background'>
                <p className='btn font-medium w-full rounded-md px-5 py-2 hover:bg-gray-200 '>
                <Link href={'/dashboard'}> Dashboard </Link> </p>  
                <p className='font-medium  w-full rounded-md px-5 py-2 hover:bg-gray-200 '>
                <Link href={'/manageUsers'}>Manage users</Link> </p>
                <p className='font-medium  w-full rounded-md px-5 py-2 hover:bg-gray-200 '>
                <Link href={'/books'}>Books</Link> </p>
                 
                <p className='font-medium  w-full rounded-md px-5 py-2 hover:bg-gray-200 '>
                <Link href={'/ordersReport'}>Orders Report</Link> </p>
                <p className='font-medium  w-full rounded-md px-5 py-2 hover:bg-gray-200 '>
                <Link href={'/exchangesPostReport'}>Exchanges Post Report</Link> </p>
                <p className='font-medium  w-full rounded-md px-5 py-2 hover:bg-gray-200 '>
                <Link href={'/hivePostReport'}>Hive Post Report</Link> </p>
                <p className='font-medium  w-full rounded-md px-5 py-2 hover:bg-gray-200 '>
                <Link href={'/messages'}>Messages</Link> </p>
                <p className='font-medium  w-full rounded-md px-5 py-2 hover:bg-gray-200 '>
                <Link href={'/userProfile'}>Profile</Link> </p>
                <div className="divider border-b"></div>
                <p className='font-medium  w-full rounded-md px-5 py-2 hover:bg-gray-200 flex gap-1 justify-start items-center text-red-500'>
                <FiLogOut /> <span>LogOut</span>  </p>
            </div>
             
        <div className='min:h-screen shadow-md w-full rounded-md p-4 border bg-background'>
            {children}
            </div>
        </div>
        </div>
         
        
    );
};

export default layout;