"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { FaMinusCircle } from "react-icons/fa";

export default function EditSocialLinks() {
  const socialMedia = [
    "Website",
    "Facebook",
    "Instagram",
    "Twitter (X)",
    "LinkedIn",
    "TikTok",
    "Snapchat",
    "Pinterest",
    "YouTube",
    "Reddit",
    "WhatsApp",
    "Telegram",
    "WeChat",
    "Viber",
    "Discord",
    "Tumblr",
    "Flickr",
    "MySpace",
    "Periscope",
  ];

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      socialLinks: [{ platform: "", link: "" }], // Initialize with one social link
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "socialLinks",
  });

  const onSubmit = (data) => {
    console.log(data); // This will log the data when the form is submitted
  };

  return (
    <div className="w-full p-4 sm:p-7 md:p-10">
      <h2 className="text-center sm:text-left text-2xl font-bold">
        Add Your Social Links
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full mt-5 grid gap-4">
          {fields.map((item, index) => (
            <div key={item.id} className="grid grid-cols-3 gap-3 items-center">
              <select
                {...register(`socialLinks.${index}.platform`, {
                  required: true,
                })}
                className="w-[calc(100%-24px)] ml-6 rounded p-1 border"
              >
                <option value="" disabled>
                  Select one
                </option>
                {socialMedia.map((platform, idx) => (
                  <option key={idx} value={platform}>
                    {platform}
                  </option>
                ))}
              </select>
              <input
                type="text"
                className="w-full outline-0 border rounded col-span-2 p-1 px-3"
                placeholder="Add your link"
                {...register(`socialLinks.${index}.link`, { required: true })}
              />
              {/* Conditionally render the Remove button */}
              {fields.length > 1 && (
                <button
                  type="button"
                  className="text-red-500 absolute text-xl"
                  onClick={() => remove(index)}
                >
                  <FaMinusCircle />
                </button>
              )}
            </div>
          ))}
        </div>
        <button
          type="button"
          className="mt-4 ml-6 bg-black mr-5 text-white rounded px-4 py-2"
          onClick={() => append({ platform: "", link: "" })} // Adds another social link
        >
          Add Another Social Link
        </button>
        <button
          type="submit"
          className="mt-4 bg-black mr-5 text-white rounded px-4 py-2"
        >
          Submit
        </button>
      </form>
      {errors.socialLinks && (
        <p className="text-red-500">Please fill in all fields.</p>
      )}
    </div>
  );
}
