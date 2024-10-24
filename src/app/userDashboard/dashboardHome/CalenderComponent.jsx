"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function CalenderComponent() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="w-full h-full flex justify-center shadow-md items-center bg-white">
      <div className="w-full h-full max-w-md">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className=" rounded-md "
        />
      </div>
    </div>
  );
}
