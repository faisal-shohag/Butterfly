"use client"
import Link from "next/link";
import { useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { GrMenu } from "react-icons/gr";
import { TbHomeEco } from "react-icons/tb";
import { HiOutlineX } from "react-icons/hi";
// import { useRouter } from "next/router"; 
import { GoX } from "react-icons/go";
import { MdLogout } from "react-icons/md";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [profile, setProfile] = useState(false);
    const [user, setUser] = useState(true);
    const router = useRouter();


    const routes = (
        <>
             <li></li>
             <li><Link href="/" onClick={() => setOpen(!open)} className={router.pathname === "/" ? 'text-teal-500 underline font-bold' : 'hover:text-teal-500'} > Home </Link></li>
             <li> <Link href="" onClick={() => setOpen(!open)} className={router.pathname === "/" ? 'text-teal-500 underline font-bold' : 'hover:text-teal-500'} > About </Link></li>
             <li><Link href="" onClick={() => setOpen(!open)} className={router.pathname === "/" ? 'text-teal-500 underline font-bold' : 'hover:text-teal-500'} > Blogs </Link></li> 

        </>
    );

    const handleLogOut = () => {
        setUser(false);
    };

    return (
        <div className="container mx-auto px-5 py-1 flex justify-between items-center shadow-md h-14">
            {/* dropdown icons */}
            <div onClick={() => setOpen(!open)} className="lg:hidden text-2xl md:text-3xl">
                {open === true ? <HiOutlineX /> : <GrMenu />}
            </div>

            {/* logo */}
            <div>
                <h3 className="absolute lg:static  max-sm:left-14 max-sm:top-[10px] md:left-20 md:top-[10px] flex gap-1 justify-center items-center"><span className="text-3xl font-bold text-teal-500">Butter</span><span className="text-3xl font-bold">Fly</span> 
                </h3>
            </div>

            {/* menu / routes */}
            <ul className={`lg:flex gap-5 duration-500 left-0 min-w-28 font-medium absolute lg:static ${open ? 'top-14 md:top-[58px] space-y-3' : '-left-64 top-14 md:top-16 z-[99] space-y-3'} bg-gray-50 lg:bg-white p-3 rounded-sm justify-center mb-3`}>
                {routes}
            </ul>

            {/* user image & button */}
            {user ? (
                <div className="flex max-sm:gap-2 gap-4 justify-center mr-2">
                    <div>
                        <div className="avatar">
                            <div className="max-sm:w-8 max-sm:h-8 h-12 w-12 rounded-full border">
                                <button className="w-fit" onClick={() => setProfile(!profile)}>
                                    <img src="" alt="user" className="max-sm:w-8 max-sm:h-8 h-12 w-12" />
                                    </button>
                            </div>
                        </div>
                        <ul className={`absolute space-y-5 duration-500 ${profile ? 'bg-gray-50 md:min-w-32 px-3 py-2 z-[99] font-bold rounded-md right-1 md:right-2 lg:right-64' : 'hidden'}`}>
                            <li onClick={() => setProfile(!profile)} className="absolute text-2xl top-0 right-0">
                                <GoX className="border border-black rounded-full" />
                            </li>
                            <div>
                                <li onClick={() => setProfile(!profile)}>
                                    <Link href="" className="hover:text-teal-500">Profile</Link>
                                </li>
                                <li onClick={handleLogOut} className="flex gap-1 items-center hover:text-teal-500">
                                    LogOut <MdLogout />
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            ) : (
                <div>
                    <Link href="" className="button px-4 py-1 font-bold rounded-md">Login<span></span></Link> 
                    {/* <Link href="" className="btn font-bold max-sm:btn-sm px-4 py-2 rounded-md text-white bg-teal-500 hover:bg-teal-700">Login</Link> */}
                </div>
            )}
        </div>
    );
};

export default Navbar;
