'use client'
import { useState } from "react"; 
import { AiOutlineClose } from 'react-icons/ai';
import { SlMenu } from 'react-icons/sl';
import { LiaTimesSolid } from 'react-icons/lia'; 
import Link from "next/link";
import { FiLogOut } from "react-icons/fi";

const DashboardNavbar = () => { 
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMenu = () => {
        setClick(false) 
    };
 

    const routes = <>
        <li onClick={closeMenu} className='btn font-medium w-full rounded-md px-5 py-2   '>
            <Link href={'/dashboard'}> Dashboard </Link> </li> 
        <li onClick={closeMenu} className='font-medium  w-full rounded-md px-5 py-2   '>
            <Link href={'/manageUsers'}>Manage users</Link> </li>
        <li onClick={closeMenu} className='font-medium  w-full rounded-md px-5 py-2   '>
            <Link href={'/books'}>Books</Link> </li>
             
        <li onClick={closeMenu} className='font-medium  w-full rounded-md px-5 py-2   '>
            <Link href={'/ordersReport'}>Orders Report</Link> </li>
        <li onClick={closeMenu} className='font-medium  w-full rounded-md px-5 py-2   '>
            <Link href={'/exchangesPostReport'}>Exchanges Post Report</Link> </li>
        <li onClick={closeMenu} className='font-medium  w-full rounded-md px-5 py-2    '>
            <Link href={'/reports'}>Reports</Link> </li>
        <li onClick={closeMenu} className='font-medium  w-full rounded-md px-5 py-2  '>
            <Link href={'/messages'}>Messages</Link> </li>
        <li onClick={closeMenu} className='font-medium  w-full rounded-md px-5 py-2   '>
            <Link href={'/userProfile'}>Profile</Link> </li>
            <p className='font-medium  w-full rounded-md px-5 py-2 hover:bg-gray-200 flex gap-1 justify-start items-center text-red-500'>
                <FiLogOut /> <span>LogOut</span>  </p>
    </>

    return (
        <div className="shadow-md border-b z-10 w-full top-0">
            <nav className="bg-background">
                <div className='flex justify-between items-center'>
                    <div className=' flex items-center justify-between p-2'>
                        <div className="flex gap-5 lg:gap-10 justify-start items-center">
                            {/* Burger Icon: visible only on mobile and medium screens */}
                            <div className="lg:hidden mt-1" onClick={handleClick}>
                                {click ? (
                                    <AiOutlineClose className="text-2xl lg:text-3xl cursor-pointer" />
                                ) : (
                                    <SlMenu className="text-2xl lg:text-3xl cursor-pointer" />
                                )}
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-pink-500">ButterFly</h3> 
                            </div>
                        </div> 
                    
                        {/* Burger Menu Items for smaller screens */}
                        <div
                            className={`fixed top-0 left-0 w-[250px] h-full bg-background transition-transform duration-500 ease-in-out z-50 ${click ? 'translate-x-0' : '-translate-x-full'
                                } lg:hidden`} // hidden on large screens
                        >
                            {/* Fixed Header in Burger Menu */}
                            <div className="sticky top-0 bg-background px-4 py-2 md:py-[11px] border-b ">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-3xl font-medium text-pink-500">ButterFly</h3>
                                    <a onClick={closeMenu} className="cursor-pointer border-2">
                                        <LiaTimesSolid className="text-xl lg:text-2xl cursor-pointer " />
                                    </a>
                                </div>
                            </div>

                            {/* Scrollable Content with Hidden Scrollbar */}
                            <ul
                                className="overflow-y-scroll px-4 space-y-4 mt-5 font-medium"
                                style={{
                                    maxHeight: 'calc(100vh - 160px)',
                                    scrollbarWidth: 'thin', /* For Firefox */
                                    msOverflowStyle: 'none',  /* For Internet Explorer and Edge */
                                }}
                            >
                                <style jsx>{` ul::-webkit-scrollbar { display: none; } `}</style> 
                                {routes}
                            </ul>
                        </div>

                        {/* Overlay when burger menu is open */}
                        {click && (
                            <div
                                className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                                onClick={closeMenu}
                            ></div>
                        )}
                    </div> 
                </div>
            </nav>
        </div>
    );
};

export default DashboardNavbar;