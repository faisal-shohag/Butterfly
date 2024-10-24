"use client"
import React, { useState } from "react";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import {
  FaHome,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaLink,
  FaUserFriends,
  FaEdit,
  FaBook,
} from "react-icons/fa";
import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";

export default function UserSubInformation({ userId, isOwnProfile }) {
  const [isOpen, setIsOpen] = useState(false);
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const { data: user, isLoading } = useQuery({
    queryKey: ["user", userId],
    queryFn: async () => {
      const response = await axiosSecure.get(`/users/${userId}`);
      return response.data;
    },
  });

  const updateUserMutation = useMutation({
    mutationFn: async (updateData) => {
      const response = await axiosSecure.patch(`/user-update/${userId}`, updateData);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["user", userId]);
      setIsOpen(false);
      toast.success(
        "Profile Updated",
       );
    },
    onError: (error) => {
      toast.error("Failed to update profile. Please try again."
      );
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updateData = {
      bio: formData.get("bio"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      username: formData.get("username"),
    };
    updateUserMutation.mutate(updateData);
  };

  if (isLoading) {
    return (
      <div className="w-full bg-white dark:bg-zinc-900 shadow-lg rounded-lg p-6 animate-pulse">
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="w-full bg-white dark:bg-zinc-900 shadow-lg rounded-lg p-6">
        <div className="flex justify-between items-start">
          <div className="text-center flex-grow">
            <p className="text-3xl text-gray-700 dark:text-gray-300 mb-2">📚📖</p>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              {user?.bio || "বইয়ের মাঝে নতুন দিগন্ত উন্মোচন, প্রতিটি পাতায় একটি নতুন গল্প।"}
            </p>
          </div>
          {isOwnProfile && (
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon">
                  <FaEdit className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogDescription></DialogDescription>
                <DialogHeader>
                  <DialogTitle>Edit Profile Information</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label>Username</label>
                    <Input
                      name="username"
                      defaultValue={user?.username}
                      placeholder="Username"
                      disabled
                    />
                  </div>
                  <div className="space-y-2">
                    <label>Bio</label>
                    <Textarea
                      name="bio"
                      defaultValue={user?.bio}
                      placeholder="Tell us about yourself..."
                    />
                  </div>
                  <div className="space-y-2">
                    <label>Phone</label>
                    <Input
                      name="phone"
                      defaultValue={user?.phone}
                      placeholder="Phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <label>Address</label>
                    <Input
                      name="address"
                      defaultValue={user?.address}
                      placeholder="Address"
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button 
                      type="submit"
                      disabled={updateUserMutation.isLoading}
                    >
                      {updateUserMutation.isLoading ? "Saving..." : "Save Changes"}
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          )}
        </div>

        <div className="mt-4">
          <div className="flex flex-col space-y-2 text-gray-600 dark:text-gray-300">
            <div className="flex items-center">
              <FaUserFriends className="mr-2" />
              <span> @{user?.username}</span>
            </div>
           
            <div className="flex items-center">
              <FaBook className="mr-2" />
              <span>{user?._count?.books || 0} Books Listed</span>
            </div>
            <div className="flex items-center">
              <FaBook className="mr-2" />
              <span>{user?._count?.purchasedBooks || 0} Books Purchased</span>
            </div>
          </div>

          <div className="mt-4 flex flex-col space-y-2 text-gray-600 dark:text-gray-300">
            {user?.address && (
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span>{user.address}</span>
              </div>
            )}
            <div className="flex items-center">
              <FaEnvelope className="mr-2" />
              <span>{user?.email}</span>
            </div>
            {user?.phone && (
              <div className="flex items-center">
                <FaPhoneAlt className="mr-2" />
                <span>{user.phone}</span>
              </div>
            )}
          </div>

          <div className="mt-4">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Joined: {new Date(user?.createdAt).toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}