"use client";

import Image from "next/image";
import { Card, CardHeader } from "../ui/card";

const discountMap = {
  50: "50%",
  25: "25%",
  10: "10%",
};

const DiscountCard = ({ book }) => {
  const { bookId, image, bookName, author, discount } = book;

  return (
    // <Link to={`/book_details/${bookId}`}>
    <Card className="overflow-hidden transition-shadow  duration-300 ease-in-out hover:shadow-lg">
      <div className="h-[270px] w-full flex justify-center rounded-md items-center relative">

        <div className=" absolute right-0 top-[-5px] bg-red-500 py-2 px-4 rounded-bl-xl text-white font-bold text-xl">
          {discountMap[discount]}
        </div>

        <div className="absolute bg-blue-500  duration-300 rounded-full w-56 h-56 blur-lg opacity-50"
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
        </div>

        <Image
          height={250}
          width={240}
          className="h-[250px] hover:h-[270px] transition-all z-10 mt-10"
          src={image}
          alt="book"
        />
      </div>

      <CardHeader className="flex flex-row font-bold items-center gap-4 pb-3 text-center">
        {bookName}
      </CardHeader>
      <hr />
      <div className="flex justify-between items-center px-6 ">
        <div className="flex flex-col items-start">
          <div className="text-sm font-bold text-gray-400">Writer</div>
          <div className="text-md font-bold">{author}</div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-sm font-bold text-gray-400">Price</div>
          <div className="text-md font-bold flex items-center gap-3">
            <s className="text-red-500 font-bold">$25.0</s>
            <span>$12.5</span>
          </div>
        </div>
      </div>
    </Card>
    // </Link>
  );
};

export default DiscountCard;
