import ProfileBookCard from "./ProfileBookCard";

export default function AboutUSer() {
  return (
    <div className="w-full">
      <div className="w-full p-1 sm:px-5 mt-2">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-100">
          All Books
        </h2>
        <hr />
        <div className="w-full gap-3 py-2 pt-4  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <ProfileBookCard />
          <ProfileBookCard />
          <ProfileBookCard />
        </div>
      </div>
      <div className="w-full p-1 sm:px-5 mt-2">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-100">
          Exchanged book
        </h2>
        <hr />
        <div className="w-full gap-3 py-2 pt-4  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {/* exchanged book details  */}
        </div>
      </div>
    </div>
  );
}
