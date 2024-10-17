'use client'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import useAxiosSecure from "@/hooks/useAxiosSecure";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RiEdit2Line } from "react-icons/ri";
import { useMutation, useQuery } from "react-query";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import toast from "react-hot-toast";
import Loading from "@/components/common/Loading";
import {  FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";


const Page = () => {

  const axiosSecure = useAxiosSecure();
  const [currentUser, setCurrentUser] = useState({}); 
  const [pages, setPages] = useState([]); 
  const [itemParPage, setItemParPage] = useState(6);   
  const [currentPage, setCurrentPage] = useState(1);   


  const { data: allUser = [], isLoading, refetch } = useQuery({
    queryKey: ['users', axiosSecure, currentPage],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?page=${currentPage}&limit=${itemParPage}`);
      return res.data; 
    }
  }); 
  
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

  const handleEditRole = (user) => {
    setCurrentUser(user);
  }

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

  useEffect(() => {
    if (count) {
      const numberOfPages = Math.ceil(count / itemParPage);
      const page = [...Array(numberOfPages).keys()];
      setPages(page);
    }
  }, [itemParPage, count]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const handleNextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  }

  const handleItemParPage = e => {
    const val = parseInt(e.target.value)
    setItemParPage(val)
    setCurrentPage(0)
}

  if (isLoading) {
    return  <Loading></Loading>
  }

  return (
    <div>
      <div className="flex justify-between items-center my-5 px-6">
      <h3 className="text-center">Total : {allUser.totalUsers} Users</h3>
      <h3 className="text-2xl font-bold text-center">Manage Users</h3>
      <div className="flex gap-1 justify-end items-center mr-4  text-sm font-medium">
                <p className="px-2 py-1">Show : </p>
                <select  onChange={handleItemParPage} defaultValue={itemParPage} name="" id="" className="border px-2 py-1">
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
            <TableHead className='text-center'>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedUsers?.map((user, idx) => (
            <TableRow key={user?.id}>
              <TableCell>{idx + 1}</TableCell>
              <TableCell>
                <div className="flex gap-2 items-center max-sm:mr-10">
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
                <div>
                  {
                    user?.role === 'admin' ? (
                      <p className='text-green-500'>{user?.role || 'N/A'}</p>
                    ) : (
                      <p>{user?.role || 'N/A'}</p>
                    )
                  }
                </div>
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
                      <div className="grid gap-4 py-3">
                        <form 
                          onSubmit={handleRoleUpdate} 
                          className='flex flex-col justify-center items-center my-2'
                        >
                          <select name="role" className="border px-4 py-1 rounded-md w-full mb-2">
                            <option disabled selected>{user?.role || 'N/A'}</option>
                            <option value='guest'>guest</option>
                            <option value='moderator'>moderator</option>
                            <option value='admin'>admin</option>
                          </select>
                          <div>
                            <DialogClose asChild>
                              <Button type='submit' variant="outline">Save</Button>
                            </DialogClose>
                          </div>
                        </form>
                      </div>
                    </DialogContent>
                  </Dialog>
                  {/* <Button variant="outline">Sent Mail</Button> */}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      <div className="md:w-1/2 mx-auto mt-10 mb-5">
        <Button variant="outline" onClick={handlePrevPage}><FaChevronLeft /></Button>
        {pages?.map(page => (
          <Button
            variant="outline"
            onClick={() => setCurrentPage(page + 1)}
            key={page}
            className={currentPage === page + 1 ? "mx-3 text-red-500" : "mx-3"}
          >
            {page + 1}
          </Button>
        ))}
        <Button variant="outline" onClick={handleNextPage}><FaChevronRight /></Button>
      </div>
    </div>
  );
};

export default Page;
