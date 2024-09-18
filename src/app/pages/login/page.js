import Image from "next/image";
import BgImage from "../../../_images/AuthBg.jpg";

const Login = () => {
  return (
    <div className="w-full min-h-screen py-10 relative px-3 flex justify-center items-center">
      <Image
        src={BgImage}
        alt="this is background image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0 absolute left-0"
      />
      <div
        className="w-full h-full absolute left-0 bg-[#0a0a0a59]"
        style={{
          backgroundImage: `linear-gradient(90deg, #0a0a0ade, #0a0a0abd,#0a0a0abd, #0a0a0a56, #0a0a0a56)`,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-100 text-white">Login</div>
    </div>
  );
};

export default Login;
