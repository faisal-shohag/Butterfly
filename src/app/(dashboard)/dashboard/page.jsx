'use server'
import React from 'react';
 

const page = () => {
    return (
        <div>
            <div>
                <h3 className="text-2xl font-bold text-center p-3 border shadow-md rounded-sm">DashBoard</h3>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-6'>
<div className='p-3 border shadow-md rounded-sm hover:shadow-lg hover:scale-105'>
    <h2 className="text-xl font-bold">Stock Books</h2>
    <h2 className="text-2xl font-bold text-center">100</h2>
</div>
<div className='p-3 border shadow-md rounded-sm hover:shadow-lg hover:scale-105'>
    <h2 className="text-xl font-bold">Total Users</h2>
    <h2 className="text-2xl font-bold text-center">100</h2>
</div>
<div className='p-3 border shadow-md rounded-sm hover:shadow-lg hover:scale-105'>
    <h2 className="text-xl font-bold">Total Hive Posts</h2>
    <h2 className="text-2xl font-bold text-center">100</h2>
</div>
<div className='p-3 border shadow-md rounded-sm hover:shadow-lg hover:scale-105'>
    <h2 className="text-xl font-bold">Total Exchange Requests</h2>
    <h2 className="text-2xl font-bold text-center">100</h2>
</div>
<div className='p-3 border shadow-md rounded-sm hover:shadow-lg hover:scale-105'>
    <h2 className="text-xl font-bold">Subscribers</h2>
    <h2 className="text-2xl font-bold text-center">100</h2>
</div>



            </div>
        </div>
    );
};

export default page;