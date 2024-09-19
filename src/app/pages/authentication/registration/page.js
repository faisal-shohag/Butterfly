import Image from "next/image";
import BgImage from "@/_images/authBg.gif";
import image from "@/_images/AuthImage.gif";
import RegistrationForm from "./RegistrationForm";
const Registration = () => {
  return (
    <div className="w-full min-h-screen py-0 sm:p-3 md:py-10 relative flex justify-center items-center">
      <Image
        src={BgImage}
        alt="this is background image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0 absolute left-0"
      />

      {/* Content */}
      <div className="blurBg w-full sm:max-w-[1000px]  sm:border sm:shadow-md sm:rounded-md mx-auto relative overflow-hidden z-100 grid grid-cols-1 sm:grid-cols-2">
        <div className="w-full h-full overflow-hidden">
          <Image
            src={image}
            alt="this is image"
            className="min-w-full hidden sm:block min-h-full"
          />
        </div>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default Registration;
