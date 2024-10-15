import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="w-full custom-glass rounded-md ">
      <div className="w-full flex flex-col sm:flex-row justify-center items-center">
        <div className="min-w-[200px] pr-2">
          <img
            src="https://ik.imagekit.io/masudur/book.webp?updatedAt=1727267354890"
            alt="book"
            className="w-[200px] h-auto rounded"
          />
        </div>
        <div className="w-full pl-2 border-l">
          <p className="uppercase  text-blue-500">Adventure</p>
          <h1 className="text-4xl font-bold text-gray-500 my-2">Book Name </h1>
          <div className="flex flex-col gap-1 mb-2">
            <p className="text-gray-500">by Sir Arthur Conan Doyle</p>
            <p className="text-gray-500">
              Published by ABDO Publishing Company in 2010-09-01
            </p>
            <p className="text-gray-500">ISBN: 1631066447</p>
          </div>
          <p className="text-gray-500">
            Part of the elegant Knickerbocker Classics series, The Complete
            Sherlock Holmes is comprised of 4 full-length novels and 56 short
            stories featuring the world's most famous pipe-smoking detective.
            For Sherlock Holmes fans worldwide, this stunning hardcover edition
            is perfect for gift giving. Written by Sir Arthur Conan Doyle
            between the years 1867 and 1927, the legendary Sherlock Holmes
            employed his mastery of deductive reasoning and expert sleuthing to
            solve an array of complex and harrowing cases. From his home—221B
            Baker Street in London—the legendary Sherlock Holmes (accompanied by
            his loyal companion and chronicler, Dr. Watson) baffled policemen
            and became famous worldwide for his remarkable observations and even
            more eccentric habits. Featuring a foreword from renowned Holmes
            scholar Daniel Stashower, (author of A Teller of Tales: The Life of
            Arthur Conan Doyle and Sherlock Holmes in America), The Complete
            Sherlock Holmes contains every known Sherlock Holmes tale ever
            written. From Holmes’ first appearance in “A Study in Scarlet”
            (1887) and The Hound of the Baskervilles (1901–1902), through the
            collection of stories in the The Case-Book of Sherlock Holmes, this
            deluxe edition boasts the entire Holmes catalogue. The Timeless
            Classics series from Rock Point brings together the works of classic
            authors from around the world. Complete and unabridged, these
            elegantly designed gift editions feature luxe, patterned endpapers,
            ribbon markers, and foil and deboss details on vibrantly colored
            cases. Celebrate these beloved works of literature as true standouts
            in your personal library collection. Other titles in the series
            include: The Complete Grimm’s Fairy Tales, The Complete Novels of
            Jane Austen, The Complete Tales & Poems of Edgar Allan Poe, The
            Complete Tales of H.P. Lovecraft, and The Complete Works of William
            Shakespeare.
          </p>
          <div className="mt-5 flex justify-between items-center">
            <span></span>
            <div className="flex justify-center items-center gap-3">
              <Link
                href={"/"}
                className="font-medium  bg-black text-white px-5 rounded !py-1"
              >
                See All Books
              </Link>
              <Link
                href={"/"}
                className="font-medium  bg-black text-white px-5 rounded !py-1"
              >
                Edit Book
              </Link>
              <Link
                href={"/"}
                className="font-medium  bg-black text-white px-5 rounded !py-1"
              >
                Add Book
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
