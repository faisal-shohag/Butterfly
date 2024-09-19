import Image from "next/image";
import image from "@/_images/AuthImage.jpg";
import LoginForm from "./LoginForm";

const Login = () => {
  return ( 
    <div className="w-ful  min-h-screen py-0 sm:p-3 md:py-10 relative  flex justify-center items-center">
      {/* Content */}
      <div className="text-white w-full sm:max-w-[1000px] min-h-full sm:h-auto sm:border sm:shadow-md sm:rounded-md mx-auto relative overflow-hidden z-100 grid grid-cols-1 sm:grid-cols-2">
        <div className="w-full relative h-full overflow-hidden">
          <Image
            src={image}
            alt="this is image"
            className="min-w-full absolute -top-14 hidden sm:block min-h-full"
          />
        </div>
        <LoginForm></LoginForm>
      </div>
    </div>
  );
};

export default Login;
