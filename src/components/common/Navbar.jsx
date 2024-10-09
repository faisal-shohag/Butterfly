"use server"
import NavLinks from "./NavBar/NavLinks";
import Usersection from "./NavBar/Usersection";
import Leading from "./NavBar/Leading";

const Navbar = () => {
  const currentPath = usePathname();
  const session = useSession()
  const user = session.data?.user
  // console.log(user)

  if(currentPath === '/dashboard' || currentPath === '/exchangesPostReport' || currentPath === '/features' || currentPath === '/hivePostReport' || currentPath === '/manageUsers' || currentPath === '/messages' || currentPath === '/books' || currentPath === '/ordersReport' || currentPath === '/userProfile') {
    return <div></div>
  }

   
return (
    <nav className="bg-background border-b mb-5 custom-glass-2  py-3 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
         <Leading/>

          <NavLinks/>
          
         <Usersection/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
