"use client";
import { useState } from "react";
import SettingsContant from "./SettingsContant";
import SettingsNav from "./SettingsNav";

export default function Settings() {
  const [currentNav, SetCurrentNav] = useState("nameAndPassword");

  const HandleNav = (data) => {
    SetCurrentNav(data);
  };
  return (
    <div className="container mx-auto px-2 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      <div className="w-full col-span-1">
        <SettingsNav HandleNav={HandleNav} />
      </div>
      <div className="w-full col-span-1 sm:col-span-2 lg:col-span-3 ">
        <SettingsContant currentNav={currentNav} />
      </div>
    </div>
  );
}
