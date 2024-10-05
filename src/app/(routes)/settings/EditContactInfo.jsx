"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export default function EditContactInfo() {
  return (
    <div className="w-full p-4 sm:p-7 md:p-10">
      <h2 className="text-center sm:text-left text-2xl font-bold">
        Add Your Contact Information
      </h2>
      <form>
        {/* Permanent Address Section */}
        <h3 className="mt-6 text-lg font-semibold">Permanent Address</h3>
        <div className="w-full">
          <label className="block text-sm font-medium mt-3 mb-2">Country</label>
          <input
            type="text"
            placeholder="Enter your country"
            className="w-full rounded px-3 p-2 border outline-0"
          />
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium mt-3 mb-2">City</label>
          <input
            type="text"
            placeholder="Enter your city"
            className="w-full rounded px-3 p-2 border outline-0"
          />
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium mt-3 mb-2">
            Town/Village/Block
          </label>
          <input
            type="text"
            placeholder="Enter your town/village/block"
            className="w-full rounded px-3 p-2 border outline-0"
          />
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium mt-3 mb-2">
            Street Address
          </label>
          <input
            type="text"
            placeholder="Enter your street address"
            className="w-full rounded px-3 p-2 border outline-0"
          />
        </div>

        {/* Present Address Section */}
        <h3 className="mt-6 text-lg font-semibold">Present Address</h3>
        <div className="w-full">
          <label className="block text-sm font-medium mt-3 mb-2">Country</label>
          <input
            type="text"
            placeholder="Enter your country"
            className="w-full rounded px-3 p-2 border outline-0"
          />
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium mt-3 mb-2">City</label>
          <input
            type="text"
            placeholder="Enter your city"
            className="w-full rounded px-3 p-2 border outline-0"
          />
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium mt-3 mb-2">
            Town/Village/Block
          </label>
          <input
            type="text"
            placeholder="Enter your town/village/block"
            className="w-full rounded px-3 p-2 border outline-0"
          />
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium mt-3 mb-2">
            Street Address
          </label>
          <input
            type="text"
            placeholder="Enter your street address"
            className="w-full rounded px-3 p-2 border outline-0"
          />
        </div>

        {/* Other Contacts Section */}
        <h3 className="mt-6 text-lg font-semibold">Other Contacts</h3>
        <div className="w-full">
          <label className="block text-sm font-medium mt-3 mb-2">
            Mobile Number
          </label>
          <input
            type="text"
            placeholder="Enter your mobile number"
            className="w-full rounded px-3 p-2 border outline-0"
          />
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium mt-3 mb-2">
            Telephone Number (optional)
          </label>
          <input
            type="text"
            placeholder="Enter your telephone number"
            className="w-full rounded px-3 p-2 border outline-0"
          />
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium mt-3 mb-2">
            Home Address (optional)
          </label>
          <input
            type="text"
            placeholder="Enter your home address"
            className="w-full rounded px-3 p-2 border outline-0"
          />
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium mt-3 mb-2">
            Office Address (optional)
          </label>
          <input
            type="text"
            placeholder="Enter your office address"
            className="w-full rounded px-3 p-2 border outline-0"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <Button className="bg-black text-white px-10">Submit</Button>
        </div>
      </form>
    </div>
  );
}
