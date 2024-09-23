import Image from "next/image";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="w-full py-0 sm:p-3  relative  flex justify-center items-center">
      <div className="">
        
        <LoginForm></LoginForm>
      </div>
    </div>
  );
};

export default Login;
