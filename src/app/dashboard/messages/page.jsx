"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { FiSend } from "react-icons/fi";

const EmailFormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // handle sending the email
  };

  return (
    <div className="w-full">
      <div className="w-full p-1">
        <h1 className="text-xl font-bold text-center text-gray-600">
          Write Email for Users
        </h1>
      </div>
      <form className="w-full pb-5 px-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 justify-center items-center">
          <div className="w-full mt-2">
            <label className="text-gray-600 font-bold pb-2">To:</label>
            <input
              type="text"
              {...register("to", { required: true })}
              className="w-full p-1 px-3 border rounded outline-0"
              placeholder="Recipient Email"
            />
            {errors.to && (
              <p className="text-red-500">This field is required</p>
            )}
          </div>

          <div className="w-full mt-2">
            <label className="text-gray-600 font-bold pb-2">Cc:</label>
            <input
              type="text"
              {...register("cc")}
              className="w-full p-1 px-3 border rounded outline-0"
              placeholder="Cc"
            />
          </div>
        </div>

        <div className="w-full mt-2">
          <label className="text-gray-600 font-bold pb-2">Bcc:</label>
          <input
            type="text"
            {...register("bcc")}
            className="w-full p-1 px-3 border rounded outline-0"
            placeholder="Bcc"
          />
        </div>

        <div className="w-full mt-2">
          <label className="text-gray-600 font-bold pb-2">Subject:</label>
          <input
            type="text"
            {...register("subject", { required: true })}
            className="w-full p-1 px-3 border rounded outline-0"
            placeholder="Subject"
          />
          {errors.subject && (
            <p className="text-red-500">This field is required</p>
          )}
        </div>

        <div className="w-full mt-2">
          <label className="text-gray-600 font-bold pb-2">Message:</label>
          <textarea
            {...register("message", { required: true })}
            className="w-full p-1 px-3 border rounded outline-0 min-h-[200px]"
            placeholder="Write your message"
          ></textarea>
          {errors.message && (
            <p className="text-red-500">This field is required</p>
          )}
        </div>

        <div className="flex justify-center mt-0">
          {/* Submit button */}
          <Button
            type="submit"
            className="mt-4 px-10 bg-black flex items-center text-white"
          >
            <FiSend className="mr-2" /> Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EmailFormPage;
