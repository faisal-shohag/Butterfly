import React, { useState } from 'react';
import { RiEdit2Line } from 'react-icons/ri';

const SingleManageUser = ({ user, idx, refetch }) => {
    const { id, email, name, image, role } = user
    const [open, setOpen] = useState(false)

    const handleRoleUpdate = async (e) => {
        e.preventDefault()
        const currentRole = e.target.role.value
        const data = { 
            role: currentRole, 
        }

        // const res = await axiosSecure.patch(`/users/user/${_id}`, data)
        // if (res.data.modifiedCount > 0) {
        //     refetch()
        //     setOpen(!open)
        //     Swal.fire({
        //         position: "top-end",
        //         icon: "success",
        //         title: "Role updated",
        //         showConfirmButton: false,
        //         timer: 1000
        //       });
        // }
    }

    return (
        <div className='flex gap-10 justify-between items-center border-b mb-1 space-y-1 p-2 min-w-[800px]'>

            <div className='flex  gap-2 w-full'>
                <div className='flex justify-center items-center mr-3'>
                    <p>{idx + 1}.</p>
                </div>
                <img src={image} alt="image" className='w-12 h-12' />
                <div>
                    <p className='font-medium'>{name}</p>
                    <p className='opacity-80'>{email}</p>
                </div>
            </div>
            <div className='flex flex-1 justify-start items-center w-full ml-10'>
                {
                    role === 'moderator' ?
                    <div className='flex gap-1'>
                    <span className='font-medium'>Role</span> :
                    <span className='text-sky-500'>{role || 'N/A'}</span>
                </div> :
                        role === 'admin' ?
                            <div className='flex gap-1'>
                                <span className='font-medium'>Role</span> :
                                <span className='text-green-500'>{role || 'N/A'}</span>
                            </div> :
                            <div className='flex gap-1'>
                            <span className='font-medium'>Role</span> :
                            <span className='text-red-500'>{role || 'N/A'}</span>
                        </div>
                }

            </div>
            <div className=' flex gap-2   w-full justify-end items-center'>
                {
                    !open ?
                        <button onClick={()=>setOpen(!open)} className="flex gap-1 justify-center items-center border border-gray-900 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md"><span>Edit</span><RiEdit2Line /></button>
                        :
                        <form onSubmit={handleRoleUpdate} className='flex items-center gap-3 my-2'>
                            <select name="role" id="" className="border px-4 py-1 rounded-md">
                                <option disabled selected>{user?.role || 'N/A'}</option>
                                <option value='guest'>guest</option>
                                <option value='moderator'>moderator</option>
                                <option value='admin'>admin</option>
                            </select>
                            <div>
                                <input type="submit" value="Done" className="w-fit md:px-2 text-center border border-gray-900 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md font-normal text-[10px]" />
                            </div>
                        </form>
                }
                <button className="w-24 border border-gray-900 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md"> Sent Mail </button>

            </div>

        </div>
    );
};

export default SingleManageUser;