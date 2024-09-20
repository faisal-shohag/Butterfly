import Image from "next/image";
import RegistrationForm from "./RegistrationForm";
const Registration = () => {
  return (
    <div className="w-full min-h-screen py-0 sm:p-3 md:py-10 relative flex justify-center items-center">
      {/* Content */}
      <div className="blurBg w-full sm:max-w-[1000px]  sm:border sm:shadow-md sm:rounded-md mx-auto relative overflow-hidden z-100 grid grid-cols-1 sm:grid-cols-2">
        <div className="w-full relative h-full overflow-hidden">
          <Image
            src='https://i.postimg.cc/xd1JXkkX/image.png'
            alt="this is image"
            className="min-w-full absolute hidden sm:block min-h-full"
          />
        </div> 
        <RegistrationForm />
      </div>
    </div>
  );
};

export default Registration;
