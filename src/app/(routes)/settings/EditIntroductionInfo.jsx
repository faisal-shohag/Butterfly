import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button"; // Assuming you're using the shadcn/ui library for the Button component

export default function EditIntroductionInfo() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission
  };

  return (
    <div className="w-full p-4 sm:p-7 md:p-10">
      <h2 className="text-center sm:text-left text-2xl font-bold mb-6">
        Add Your Introduction Information
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-4">
          {/* Cover URL input */}
          <label
            htmlFor="coverUrl"
            className="block text-sm font-medium mt-3 mb-2"
          >
            Enter Your Cover URL
          </label>
          <input
            type="url"
            id="coverUrl"
            placeholder="Enter Your Cover URL"
            className="w-full border rounded px-3 p-1 mt-1 outline-0"
            {...register("coverUrl")}
          />

          {/* Profile URL input */}
          <label
            htmlFor="profileUrl"
            className="block text-sm font-medium mt-3 mb-2"
          >
            Enter Your Profile URL
          </label>
          <input
            type="text"
            id="profileUrl"
            placeholder="Enter Your Profile URL"
            className="w-full border rounded px-3 p-1 mt-1 outline-0"
            {...register("profileUrl")}
          />

          {/* Bio textarea */}
          <label htmlFor="bio" className="block text-sm font-medium mt-3 mb-2">
            Bio
          </label>
          <textarea
            id="bio"
            placeholder="Write a short bio"
            className="w-full border rounded px-3 p-1 mt-1 outline-0"
            {...register("bio")}
          />

          {/* School input */}
          <label
            htmlFor="school"
            className="block text-sm font-medium mt-3 mb-2"
          >
            School
          </label>
          <input
            type="text"
            id="school"
            placeholder="Enter your school name"
            className="w-full border rounded px-3 p-1 mt-1 outline-0"
            {...register("school")}
          />

          {/* High School input */}
          <label
            htmlFor="highSchool"
            className="block text-sm font-medium mt-3 mb-2"
          >
            High School
          </label>
          <input
            type="text"
            id="highSchool"
            placeholder="Enter your high school name"
            className="w-full border rounded px-3 p-1 mt-1 outline-0"
            {...register("highSchool")}
          />

          {/* College input */}
          <label
            htmlFor="college"
            className="block text-sm font-medium mt-3 mb-2"
          >
            College
          </label>
          <input
            type="text"
            id="college"
            placeholder="Enter your college name"
            className="w-full border rounded px-3 p-1 mt-1 outline-0"
            {...register("college")}
          />

          {/* University input */}
          <label
            htmlFor="university"
            className="block text-sm font-medium mt-3 mb-2"
          >
            University
          </label>
          <input
            type="text"
            id="university"
            placeholder="Enter your university name"
            className="w-full border rounded px-3 p-1 mt-1 outline-0"
            {...register("university")}
          />

          {/* Job input */}
          <label htmlFor="job" className="block text-sm font-medium mt-3 mb-2">
            Job
          </label>
          <input
            type="text"
            id="job"
            placeholder="Enter your job title"
            className="w-full border rounded px-3 p-1 mt-1 outline-0"
            {...register("job")}
          />

          {/* Relationship input */}
          <label
            htmlFor="relationship"
            className="block text-sm font-medium mt-3 mb-2"
          >
            Relationship Status
          </label>
          <input
            type="text"
            id="relationship"
            placeholder="Enter your relationship status"
            className="w-full border rounded px-3 p-1 mt-1 outline-0"
            {...register("relationship")}
          />

          {/* Hobby input */}
          <label
            htmlFor="hobby"
            className="block text-sm font-medium mt-3 mb-2"
          >
            Hobby
          </label>
          <input
            type="text"
            id="hobby"
            placeholder="Enter your hobbies"
            className="w-full border rounded px-3 p-1 mt-1 outline-0"
            {...register("hobby")}
          />

          {/* Submit button */}
          <Button type="submit" className="mt-4 px-10 bg-black text-white">
            Update Profile
          </Button>
        </div>
      </form>
    </div>
  );
}