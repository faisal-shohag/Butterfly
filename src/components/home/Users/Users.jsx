"use client"
import React, { useEffect, useState } from 'react';
import SingleUser from './SingleUser';

const Users = () => {
    const [allUsers, setAllUsers] = useState([]);
    useEffect(()=>{
        fetch('https://butterfly-backend.vercel.app/users')
        .then(res => res.json())
        .then(data => setAllUsers(data))
    },[])

 
    return (
        <div className=' my-14 '>
            <h3 className="text-xl font-medium opacity-75 my-3">Active Users</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4 rounded-lg shadow-lg border'>
            {
            allUsers.length? 
               
                allUsers.map(user => <SingleUser key={user?.id} user={user}></SingleUser>  )
                
                : 'No data  available'
            }
        </div>
        </div>
    );
};

export default Users;