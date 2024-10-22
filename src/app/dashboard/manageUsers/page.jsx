'use client'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import useAxiosSecure from "@/hooks/useAxiosSecure";
import React, { useEffect, useState } from "react";
import { RiEdit2Line } from "react-icons/ri";
import { useMutation, useQuery } from "react-query";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import toast from "react-hot-toast";
import Loading from "@/components/common/Loading";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";


const Page = () => {

  const axiosSecure = useAxiosSecure();
  const [currentUser, setCurrentUser] = useState({});
  const [pages, setPages] = useState([]);
  const [itemParPage, setItemParPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  // get users
  const { data: allUser = [], isLoading, refetch } = useQuery({
    queryKey: ['users', axiosSecure, currentPage, itemParPage],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?page=${currentPage}&limit=${itemParPage}`);
      return res.data;
    },
    keepPreviousData: true,
  });

  // filter by role 
  const sortedUsers = Array.isArray(allUser.users)
    ? allUser.users.sort((a, b) => {
      if (a.role === 'admin' && b.role !== 'admin') return -1;
      if (a.role !== 'admin' && b.role === 'admin') return 1;
      if (a.role === 'moderator' && b.role !== 'moderator') return -1;
      if (a.role !== 'moderator' && b.role === 'moderator') return 1;
      if (a.role === 'guest' && b.role !== 'guest') return -1;
      if (a.role !== 'guest' && b.role === 'guest') return 1;
      return 0;
    })
    : [];

  // set user in a state
  const handleEditRole = (user) => {
    setCurrentUser(user);
  }

  // Handle updating role
  const mutation = useMutation(
    async (data) => {
      const res = await axiosSecure.put(`/users/${currentUser.id}`, data);
      return res;
    },
    {
      onSuccess: () => {
        refetch();
        toast.success('Successfully updated role!');
      }
    }
  );

  const handleRoleUpdate = async (e) => {
    e.preventDefault();
    const currentRole = e.target.role.value;
    const data = { role: currentRole };
    mutation.mutate(data);
  }

  const count = allUser.totalUsers;

  // Update page count whenever `itemParPage` or `count` changes
  useEffect(() => {
    if (count) {
      const numberOfPages = Math.ceil(count / itemParPage);
      const pageArray = [...Array(numberOfPages).keys()];
      setPages(pageArray);
    }
  }, [itemParPage, count]);

  // Handle pagination: go to previous page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  // Handle pagination: go to next page
  const handleNextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  }

  // Handle changing the number of items per page
  const handleItemParPage = e => {
    const val = parseInt(e.target.value);
    setItemParPage(val);
    setCurrentPage(1);
  }

  // Loading state
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="flex justify-between items-center my-5 px-6">
        <h3 className="text-center">Total: {allUser.totalUsers} Users</h3>
        <h3 className="text-2xl font-bold text-center">Manage Users</h3>
        <div className="flex gap-1 justify-center items-center mr-4 text-sm font-medium">
          <p className="px-2 py-1">Show :</p>
          <select
            onChange={handleItemParPage}
            value={itemParPage}
            className="border px-2  rounded-sm"
          >
            <option value="6">6</option>
            <option value="20">20</option>
            <option value="40">40</option>
            <option value="60">60</option>
          </select>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>User Info</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedUsers?.map((user, idx) => (
            <TableRow key={user?.id}>
              <TableCell>{idx + 1}</TableCell>
              <TableCell>
                <div className="flex gap-2 items-center">
                  <Avatar>
                    <AvatarImage src={user.image} />
                    <AvatarFallback className="font-bold border-2">
                      {user.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{user?.name}</p>
                    <p className="opacity-90">{user?.email}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                {
                  user?.role === 'admin'?
                   <p className="text-green-500">{user?.role}</p> :
                    user?.role ==='restricted' ?
                    <p className="text-red-500">{user?.role}</p>
                    :<p>{user?.role || 'N/A'}</p>
                }
                 
              </TableCell>
              <TableCell>
                <div className="flex gap-2 justify-center items-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        onClick={() => handleEditRole(user)}
                        variant="outline"
                        className="flex gap-1 justify-center items-center"
                      >
                        <span>Edit</span><RiEdit2Line />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <form onSubmit={handleRoleUpdate} className="grid gap-4 py-3">
                        <select name="role" className="border px-4 py-1 rounded-md w-full mb-2">
                          <option disabled selected>{user?.role || 'N/A'}</option>
                          <option value={null}>N/A</option>
                          <option value="moderator">moderator</option>
                          <option value="admin">admin</option>
                          <option value="restricted">restricted</option>
                        </select>
                        <div>
                          <DialogClose asChild>
                            <Button type="submit" variant="outline">Save</Button>
                          </DialogClose>
                        </div>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="md:w-1/2 mx-auto mt-10 mb-5 flex justify-center gap-3">
        <Button variant="outline" onClick={handlePrevPage} disabled={currentPage === 1}>
          <FaChevronLeft />
        </Button>
        {pages.map(page => (
          <Button
            key={page}
            variant="outline"
            onClick={() => setCurrentPage(page + 1)}
            className={currentPage === page + 1 ? "text-red-500" : ""}
          >
            {page + 1}
          </Button>
        ))}
        <Button variant="outline" onClick={handleNextPage} disabled={currentPage === pages.length}>
          <FaChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default Page;
