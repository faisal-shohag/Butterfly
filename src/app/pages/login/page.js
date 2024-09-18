import Image from "next/image";
import BgImage from "../../../_images/authBg.gif";
import image from "../../../_images/AuthImage.gif";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="w-full min-h-screen py-0 md:py-10 relative px-3 flex justify-center items-center">
      <Image
        src={BgImage}
        alt="this is background image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0 absolute left-0"
      />

      {/* Content */}
      <div className="text-white max-w-[1000px] border shadow-md rounded-md mx-auto relative overflow-hidden z-100 grid grid-cols-1 sm:grid-cols-2">
        <div className="w-full h-full overflow-hidden">
          <Image
            src={image}
            alt="this is image"
            className="min-w-full hidden sm:block min-h-full"
          />
        </div>
        <LoginForm></LoginForm>
      </div>
    </div>
  );
};

export default Login;
