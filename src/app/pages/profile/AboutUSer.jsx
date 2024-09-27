import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import ProfileBookCard from "./ProfileBookCard";
import { MdOutlineSwapCalls } from "react-icons/md";

export default function AboutUSer() {
  return (
    <div className="w-full">
      {/* Section for listing all books */}
      <div className="w-full p-1 sm:px-5 mt-2">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-100">
          All Books
        </h2>
        <hr />

        {/* Grid layout for book cards, responsive design from 1 to 3 columns */}
        <div className="w-full gap-3 py-2 pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {/* Render multiple ProfileBookCard components */}
          <ProfileBookCard />
          <ProfileBookCard />
          <ProfileBookCard />
        </div>
      </div>

      {/* Section for exchanged books */}
      <div className="w-full p-1 sm:px-5 mt-2">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-100">
          Exchanged book
        </h2>
        <hr />

        {/* Display a list of exchanged book pairs using flexbox for responsiveness */}
        <div
          className="w-full gap-3 py-2 pt-4 grid md:flex md:flex-wrap items-center"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          }}
        >
          {/* Create 5 pairs of exchanged books using Array.map */}
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center cursor-pointer gap-2 custom-glass rounded-xl flex-shrink-0"
            >
              {/* First user avatar with name */}
              <div className="flex flex-col items-center text-sm font-semibold">
                <Avatar>
                  <AvatarImage
                    src="https://i.postimg.cc/GmY0ZXtx/image.png"
                    className="w-[60px] h-[60px] rounded-full"
                  />
                </Avatar>
                <div>Haiyan</div>
              </div>

              {/* Swap icon representing the book exchange */}
              <div className="text-2xl text-green-600">
                <MdOutlineSwapCalls />
              </div>

              {/* Second user avatar with name */}
              <div className="flex flex-col items-center text-sm font-semibold">
                <Avatar>
                  <AvatarImage
                    src="https://i.postimg.cc/5tqhtjwH/image.png"
                    className="w-[60px] h-[60px] rounded-full"
                  />
                </Avatar>
                <div>Jabir</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
