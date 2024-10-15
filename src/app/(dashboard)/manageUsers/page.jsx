'use client'
import ManageUsers from "@/components/ManageUsers/ManageUsers";
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
import React, { useState } from "react";
import { RiEdit2Line } from "react-icons/ri";
import { useInfiniteQuery } from "react-query";
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


const Page = () => {

  const axiosSecure = useAxiosSecure();
  const [users, setUsers] = useState([]) 
  const [currentUser, setCurrentUser] = useState({})

  const { data: allUser = [], isPending, refetch } = useInfiniteQuery({
    queryKey: ['users', axiosSecure],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    }
  });

  React.useEffect(() => {
    if (allUser && allUser.pages && allUser.pages.length > 0) {
      setUsers(allUser.pages[0]); 
    }
  }, [allUser]);

  const sortedUsers = users?.sort((a, b) => {
    if (a.role === 'admin' && b.role !== 'admin') return -1;
    if (a.role !== 'admin' && b.role === 'admin') return 1;
    if (a.role === 'moderator' && b.role !== 'moderator') return -1;
    if (a.role !== 'moderator' && b.role === 'moderator') return 1;
    // if (a.role === 'guest' && b.role !== 'guest') return 1;
    // if (a.role !== 'guest' && b.role === 'guest') return -1;
    return 0;
  });

  const handleEditRole = (user) => {
    setCurrentUser(user) 
  }
   

  const handleRoleUpdate = async (e) => {

    e.preventDefault()
    const currentRole = e.target.role.value
    const data = {
      role: currentRole,
    }

    const res = await axiosSecure.put(`/users/${currentUser?.id}`, data)

    console.log(res.status)
    if (res.status === 200) {
        refetch()
        console.log('success')
         
        // Swal.fire({
        //     position: "top-end",
        //     icon: "success",
        //     title: "Role updated",
        //     showConfirmButton: false,
        //     timer: 1000
        //   });
    }
  }

  return (
    <div>
      {/* <ManageUsers></ManageUsers> */}
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>UserInfo</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className='text-center'>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedUsers?.map((user, idx) => (
            <TableRow key={user?.id}>
              <TableCell>{idx + 1}</TableCell>
              <TableCell>
                <div className="flex gap-2   items-center max-sm:mr-10">
                  <Image
                    width={60}
                    height={60}
                    src={user?.image || "/bcoin.png"}
                    alt="User Image"
                    className="h-8 w-8 rounded-md"
                  />
                  <div>
                    <p className="font-medium">{user?.name}</p>
                    <p className="opacity-90">{user?.email}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  {
                    user?.role === 'moderator' ?

                      <p className='text-green-500'>{user?.role || 'N/A'}</p>
                      :
                      user?.role === 'admin' ?
                        <p className='text-sky-500'>{user?.role || 'N/A'}</p>
                        :

                        <p className='text-red-500'>{user?.role || 'N/A'}</p>

                  }
                </div>
              </TableCell>
              <TableCell>
                <div className="flex gap-2 justify-center items-center">
                  {/* <button onClick={() => handleEditRole(user)} className="flex gap-1 justify-center items-center border border-gray-900 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md"><span>Edit</span><RiEdit2Line /></button> */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <button onClick={() => handleEditRole(user)} className="flex gap-1 justify-center items-center border border-gray-900 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md"><span>Edit</span><RiEdit2Line /></button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <div className="grid gap-4 py-3">
                        <form onSubmit={handleRoleUpdate} className='flex flex-col justify-center items-center my-2'>
                          <select name="role" id="" className="border px-4 py-1 rounded-md w-full mb-2">
                            <option disabled selected>{user?.role || 'N/A'}</option>
                            {/* <option value='guest'>guest</option> */}
                            <option value='moderator'>moderator</option>
                            <option value='admin'>admin</option>
                          </select>
                          <div>
                          <DialogClose asChild>
                          <input type="submit" value="Save" className="w-fit md:px-2 text-center border border-gray-900 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md font-medium text-sm  " />
          </DialogClose>
                            
                          </div>
                        </form>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <button className="w-24 border border-gray-900 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md"> Sent Mail </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Edit Profile</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <div className="grid gap-4 py-3">
              <form onSubmit={handleRoleUpdate} className='flex flex-col justify-center items-center my-2'>
                <select name="role" id="" className="border px-4 py-1 rounded-md w-full mb-2">
                  <option disabled selected>{'user?.role' || 'N/A'}</option>
                  <option value='guest'>guest</option>
                  <option value='moderator'>moderator</option>
                  <option value='admin'>admin</option>
                </select>
                <div>
                  <input type="submit" value="Save" className="w-fit md:px-2 text-center border border-gray-900 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md font-medium text-sm  " />
                </div>
              </form>
            </div>
          </DialogContent>
        </Dialog>
      </div> */}
    </div>
  );
};

export default Page;
