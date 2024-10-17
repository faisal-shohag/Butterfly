"use client";
import Image from "next/image";
import Snowfall from "react-snowfall";
import StoreList from "./StoreList";

const Special = () => {
  return (
    <div>
       <div className="w-full flex justify-center custom-glass-2 rounded-xl overflow-hidden">
       <Image className="object-cover" src='/store-banner.png' height={400} width={1000} alt="banner"/>
       </div>
       <Snowfall style={{zIndex: '99999'}} />
     
     <StoreList/>
    <div className="section px-2 grid grid-cols-1 md:grid-cols-4 gap-3">
      <div className="w-full">
        {/* find by filter  */}
        <div className="custom-glass !p-0 rounded-lg mb-3">
          <div className="border-b p-3 text-xl text-gray-600 dark:text-gray-300 font-bold">
            Filter by Your choies
          </div>
          <form className="p-3 space-y-3">
            <label className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
              <input
                type="radio"
                name="category"
                className="form-radio text-blue-600"
              />
              <span>Price - Low to High</span>
            </label>
            <label className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
              <input
                type="radio"
                name="category"
                className="form-radio text-blue-600"
              />
              <span>Price - High to Low</span>
            </label>
            <label className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
              <input
                type="radio"
                name="category"
                className="form-radio text-blue-600"
              />
              <span>Discount - Low to High</span>
            </label>
            <label className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
              <input
                type="radio"
                name="category"
                className="form-radio text-blue-600"
              />
              <span>Discount - High to Low</span>
            </label>
          </form>
        </div>
        {/* Find by Categories  */}
        <div className="custom-glass !p-0 rounded-lg">
          <div className="border-b p-3 text-xl text-gray-600 dark:text-gray-300 font-bold">
            Shop by Categories
          </div>
          <form className="p-3 space-y-3">
            <label className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
              <input
                type="radio"
                name="category"
                className="form-radio text-blue-600"
              />
              <span>Popular</span>
            </label>
            <label className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
              <input
                type="radio"
                name="category"
                className="form-radio text-blue-600"
              />
              <span>Best Seller</span>
            </label>
            <label className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
              <input
                type="radio"
                name="category"
                className="form-radio text-blue-600"
              />
              <span>New Books</span>
            </label>
            <label className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
              <input
                type="radio"
                name="category"
                className="form-radio text-blue-600"
              />
              <span>New Released</span>
            </label>
            <label className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
              <input
                type="radio"
                name="category"
                className="form-radio text-blue-600"
              />
              <span>History</span>
            </label>
            <label className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
              <input
                type="radio"
                name="category"
                className="form-radio text-blue-600"
              />
              <span>Fiction</span>
            </label>
          </form>
        </div>
      </div>
      <div className="col-span-1 md:col-span-3">
        <div className="w-full flex  justify-center custom-glass-2 rounded-xl overflow-hidden">
          <Image
            className="object-cover"
            src="/store-banner.png"
            height={400}
            width={1000}
            alt="banner"
          />
        </div>
        <div className="w-full custom-glass rounded-lg mt-3"></div>
      </div>
      <Snowfall style={{ zIndex: "99999" }} />
    </div>
    </div>
  );
};

export default Special;
