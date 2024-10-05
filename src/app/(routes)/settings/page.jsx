import SettingsNav from "./SettingsNav";

export default function Settings() {
  return (
    <div className="container mx-auto px-2 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      <div className="w-full col-span-1">
        <SettingsNav />
      </div>
      <div className="w-full col-span-1 sm:col-span-2 lg:col-span-3 ">
        <div className="w-full p-2 rounded-md bg-white dark:bg-zinc-900 shadow-md"></div>
      </div>
    </div>
  );
}
