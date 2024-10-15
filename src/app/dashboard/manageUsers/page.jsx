import React from "react";
import { IoNotificationsCircle } from "react-icons/io5";
import { Button } from "@/components/ui/button"; // Assuming you have shadcn/ui button component

const Page = () => {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      image:
        "https://ik.imagekit.io/masudur/default-image.jpg?updatedAt=1727106592857",
      role: "admin",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      image:
        "https://ik.imagekit.io/masudur/default-image.jpg?updatedAt=1727106592857",
      role: "user",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael.brown@example.com",
      image:
        "https://ik.imagekit.io/masudur/default-image.jpg?updatedAt=1727106592857",
      role: "user",
    },
    {
      id: 4,
      name: "Emily Johnson",
      email: "emily.johnson@example.com",
      image:
        "https://ik.imagekit.io/masudur/default-image.jpg?updatedAt=1727106592857",
      role: "user",
    },
    {
      id: 5,
      name: "David Wilson",
      email: "david.wilson@example.com",
      image:
        "https://ik.imagekit.io/masudur/default-image.jpg?updatedAt=1727106592857",
      role: "user",
    },
    {
      id: 6,
      name: "Sarah Miller",
      email: "sarah.miller@example.com",
      image:
        "https://ik.imagekit.io/masudur/default-image.jpg?updatedAt=1727106592857",
      role: "user",
    },
    {
      id: 7,
      name: "James Taylor",
      email: "james.taylor@example.com",
      image:
        "https://ik.imagekit.io/masudur/default-image.jpg?updatedAt=1727106592857",
      role: "user",
    },
    {
      id: 8,
      name: "Sophia Lee",
      email: "sophia.lee@example.com",
      image:
        "https://ik.imagekit.io/masudur/default-image.jpg?updatedAt=1727106592857",
      role: "user",
    },
    {
      id: 9,
      name: "Chris Evans",
      email: "chris.evans@example.com",
      image:
        "https://ik.imagekit.io/masudur/default-image.jpg?updatedAt=1727106592857",
      role: "user",
    },
    {
      id: 10,
      name: "Olivia Davis",
      email: "olivia.davis@example.com",
      image:
        "https://ik.imagekit.io/masudur/default-image.jpg?updatedAt=1727106592857",
      role: "user",
    },
  ];

  return (
    <div className="p-4  min-h-screen">
      {/* Header */}
      <div className="w-full flex justify-between items-center mb-4">
        <h4 className="font-bold text-xl text-gray-600 dark:text-gray-300">
          Manage Users
        </h4>
        <IoNotificationsCircle className="text-3xl cursor-pointer text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors" />
      </div>

      {/* User Table */}
      <div className="overflow-x-auto mt-4 flex justify-center items-center">
        <table className="table-auto w-full text-left dark:bg-zinc-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md">
          <thead className="bg-gradient-to-r from-zinc-500 to-zinc-700 dark:from-zinc-700 dark:to-zinc-900 text-white dark:text-gray-200 rounded-t-lg">
            <tr>
              <th className="py-3 px-4">User Info</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <td className="py-3 px-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={user.image}
                      alt={`${user.name} avatar`}
                      className="h-12 w-12 rounded-full object-cover border border-gray-300 dark:border-gray-600 shadow-sm"
                    />
                    <div>
                      <div className="font-semibold text-gray-700 dark:text-gray-300">
                        {user.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {user.email}
                      </div>
                    </div>
                  </div>
                </td>

                <td
                  className={`w-52 text-center font-semibold ${
                    user.role === "admin"
                      ? "text-red-500 dark:text-red-400"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {user.role}
                </td>

                {user.role === "admin" ? (
                  <td></td>
                ) : (
                  <td className="w-52 text-center">
                    {/* Black button with white text */}
                    <Button className="bg-black text-white hover:bg-gray-800  dark:text-black dark:bg-gray-200 shadow-md transition">
                      Edit Role
                    </Button>
                    {/* White button with black border and black text */}
                    <Button className="ml-2 border border-black hover:text-white text-black bg-gray-100 dark:border-gray-300 dark:text-white dark:bg-gray-800 shadow-md transition">
                      Send Mail
                    </Button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
