import Link from "next/link";



const SitemapRoutes = () => {
    return (
        <div className="w-full px-16 md:px-32 my-16">
            

            <div className="grid grid-cols-1  md:grid-cols-3 gap-10 md:gap-20">

            <div>
           <h3 className="text-[20px] italic font-bold mb-2 text-[#0A2B34] ">Get to know us</h3>
           <hr className="h-[2px] w-1/2 bg-[#0A2B34] "></hr>

                <ul className="mt-6 list-disc pl-6">
                    <li >
                        <Link className="hover:text-blue-500" href={"/contact"}>Contact us</Link>
                    </li>
                    <li>
                        <Link className="hover:text-blue-500" href={"/about"}>About us</Link>
                    </li>
                    </ul>        
                        
           </div>

           {/* Browse By */}
            <div>
           <h3 className="text-[20px] italic font-bold mb-2 text-[#0A2B34] ">Browse By</h3>
           <hr className="h-[2px] w-1/2 bg-[#0A2B34] "></hr>

                <ul className="mt-6 list-disc pl-6">
                    <li>
                        <Link className="hover:text-blue-500" href={"/"}>Home</Link>
                    </li>
                    
                    <li>
                        <Link className="hover:text-blue-500" href={"/exchanges"}>Exchanges</Link>
                    </li>
                    <li>
                        <Link className="hover:text-blue-500" href={"/store"}>Butterfly Store</Link>
                    </li>
                    <li>
                        <Link className="hover:text-blue-500" href={"/forum"}>Hive</Link>
                    </li>
                    </ul>        
                        
           </div>

           {/* Profile */}
            <div>
           <h3 className="text-[20px]  italic font-bold mb-2 text-[#0A2B34] ">Profile Pages</h3>
           <hr className="h-[2px] w-1/2 bg-[#0A2B34] "></hr>

                <ul className="mt-6 list-disc pl-6">
                    <li>
                        <Link className="hover:text-blue-500" href={"/profile"}>Profile</Link>
                    </li>
                    
                    <li>
                        <Link className="hover:text-blue-500" href={"/userDashboard/dashboardHome"}>Dashboard</Link>
                    </li>
                    
                    </ul>        
                        
           </div>


           {/* Support */}
            <div>
           <h3 className="text-[20px]  italic font-bold mb-2 text-[#0A2B34] ">Support</h3>
           <hr className="h-[2px] w-1/2 bg-[#0A2B34] "></hr>

                <ul className="mt-6 list-disc pl-6">
                    <li>
                        <Link className="hover:text-blue-500" href={"/faq"}>FAQ</Link>
                    </li>
                    
                   
                    
                    </ul>        
                        
           </div>

           {/* Policies */}
            <div>
           <h3 className="text-[20px]  italic font-bold mb-2 text-[#0A2B34] ">Policies</h3>
           <hr className="h-[2px] w-1/2 bg-[#0A2B34] "></hr>

                <ul className="mt-6 list-disc pl-6">
                    <li>
                        <Link className="hover:text-blue-500" href={"/terms"}>Terms of Service</Link>
                    </li>
                    <li>
                        <Link className="hover:text-blue-500" href={"/privacy"}>Privacy Policy</Link>
                    </li>
                    <li>
                        <Link className="hover:text-blue-500" href={"/cookie"}>Cookie Policy</Link>
                    </li>
                    
                   
                    
                    </ul>        
                        
           </div>
            
                  
                        
        
            
            </div>
        </div>
    );
};

export default SitemapRoutes;