'use client'
import React, { useState } from "react";
import { IoNotificationsCircle } from "react-icons/io5";
import { Button } from "@/components/ui/button"; // Assuming you have shadcn/ui button component
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useInfiniteQuery } from "react-query";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Image from "next/image";
import { RiEdit2Line } from "react-icons/ri";
import SingleManageUser from "./SingleManageUser";

const ManageUsers = () => {

    const axiosSecure = useAxiosSecure();
    const [users, setUsers] = useState([])
    const [open, setOpen] = useState(false)

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
            console.log(allUser.pages[0]);
        }
    }, [allUser]);

    const sortedUsers = users?.sort((a, b) => {
        if (a.role === 'admin' && b.role !== 'admin') return -1;
        if (a.role !== 'admin' && b.role === 'admin') return 1;
        if (a.role === 'moderator' && b.role !== 'moderator') return -1;
        if (a.role !== 'moderator' && b.role === 'moderator') return 1;
        if (a.role === 'guest' && b.role !== 'guest') return 1;
        if (a.role !== 'guest' && b.role === 'guest') return -1;
        return 0;
    });
     

     

    return (
        <div>
            <div className="mt-10 overflow-x-auto w-full">
                {
                    sortedUsers?.map((user, idx) => < SingleManageUser key={user?.id} user={user} idx={idx} refetch={refetch}></SingleManageUser>)
                }
            </div>


            {/* <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>UserInfo</TableHead>
          <TableHead>Role</TableHead>
          <TableHead className='text-center'>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user?.id}>
            <TableCell>
              <div className="flex gap-2   items-center">
              <Image
                width={60}
                height={60}
                src={user?.image || ""}
                alt="User Image"
                className="h-8 w-8"
              />
              <div>
              <p className="font-medium">{user?.name}</p>
              <p className="opacity-90">{user?.email}</p>
              </div>
              </div>
            </TableCell>
            <TableCell>{user?.role || "N/A"}</TableCell>
            <TableCell>
              <div className="flex gap-2 justify-center items-center">

              {
                !open ?
                <button onClick={()=>handleEditRole(user)} className="flex gap-1 justify-center items-center border border-gray-900 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md"><span>Edit</span><RiEdit2Line /></button>
                    :
                    <form onSubmit={handleRoleUpdate} className='flex items-center gap-3 my-2'>
                        <select name="role" id="" className="border px-4 py-1 rounded-md">
                            <option disabled selected>{user?.role || 'N/A'}</option>
                            <option value='guest'>guest</option>
                            <option value='moderator'>moderator</option>
                            <option value='admin'>admin</option>
                        </select>
                        <div>
                            <input type="submit" value="Done" className="w-fit md:px-2 px-1 py-1 text-center rounded-md bg-orange-500 text-white font-normal text-[10px]" />
                        </div>
                    </form>
            }   
                <button className="w-24 border border-gray-900 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md"> Sent Mail </button>
              </div>
              </TableCell> 
          </TableRow>
        ))}
      </TableBody>
    </Table> */}
        </div>
    );
};

export default ManageUsers;
