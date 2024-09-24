import Image from "next/image";
import book from "../../../_images/book.webp";

export default function AboutUSer() {
  const BookCard = (
    <div className="w-full p-3 border rounded-md custom-glass">
      <div className="w-full flex justify-center gap-1 items-center">
        <div className="w-1/3 h-[100px] rounded-md flex justify-center items-center">
          <Image src={book} alt="book image " className="max-h-full" />
        </div>
        <div className="w-2/3 ">
          <h3 className="text-xl font-bold text-gray-700 dark:text-gray-100">
            Book Name
          </h3>
          <p>writer name</p>
          <div className="w-full flex justify-between items-center">
            <small className="flex justify-center gap-1 items-center">
              publisher
            </small>
            <small className="flex justify-center gap-1 items-center">
              publishing year
            </small>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="w-full">
      <div className="w-full p-1 sm:px-5 mt-2">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-100">
          All Books
        </h2>
        <hr />
        <div className="w-full gap-2 py-2 pt-4  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {BookCard}
          {BookCard}
          {BookCard}
        </div>
      </div>
    </div>
  );
}
