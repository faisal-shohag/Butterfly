import { FcGoogle } from "react-icons/fc";

export default function GoogleAuth() {
  return (
    <button className="flex font-bold cursor-pointer text-gray-800 dark:text-gray-200 items-center shadow-md bg-gray-100 dark:bg-gray-700 rounded-full justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 w-full hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none active:scale-90">
      <FcGoogle className="mr-2" />
      Google
    </button>
  );
}
