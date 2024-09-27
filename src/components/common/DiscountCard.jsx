"use client";
import Image from "next/image";

const discountMap = {
  50: "https://i.postimg.cc/hPm1YS2P/image.png",
  25: "https://i.postimg.cc/cC2TnCTP/image.png",
  10: "https://i.postimg.cc/CLb6qHTN/image.png",
};

const DiscountCard = ({ book }) => {
  const { bookId, image, bookName, author, discount } = book;

  return (
    // <Link to={`/book_details/${bookId}`}>
    <div className="cursor-pointer rounded-md p-7 flex flex-col  gap-3 justify-start shadow-md hover:shadow-2xl relative">
      <div className=" absolute right-0 top-[-5px]">
        <Image
          height={100}
          width={100}
          alt="discount"
          className="h-[100px]"
          src={discountMap[discount]}
        />
      </div>
      <div className="h-[270px] w-full flex  justify-center bg-[#f7d7d7] rounded-md items-center">
        <Image
          height={250}
          width={240}
          
          className="h-[250px] hover:h-[270px] transition-all"
          src={image}
          alt="book"
        />
      </div>
      <div className="text-xl font-bold font-play">{bookName}</div>
      <hr />
      <div className="flex justify-between items-center">
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
    </div>
    // </Link>
  );
};

export default DiscountCard;
