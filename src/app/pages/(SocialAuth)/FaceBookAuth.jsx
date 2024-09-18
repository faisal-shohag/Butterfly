import { BsFacebook } from "react-icons/bs";

export default function FaceBookAuth() {
  return (
    <button className="flex font-bold cursor-pointer text-gray-800 items-center shadow-md bg-gray-100 rounded-full justify-center px-4 py-2 border border-gray-300 w-full hover:bg-gray-200 focus:outline-none active:scale-90">
      <BsFacebook className="text-blue-600 mr-2" />
      Facebook
    </button>
  );
}
