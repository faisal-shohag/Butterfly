'use server' 
import React from 'react';
import Chart from '@/components/Chart';



const page = () => {

    const name = 'Total Hive Posts'
    const amount = 'Total Hive Post Users'

    return (
        <div>
            <div>
                <h3 className="text-2xl font-bold text-center p-3 border shadow-md rounded-sm">Hive Posts Report</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7'>
                <div className='p-3 border shadow-md rounded-sm hover:shadow-lg hover:scale-105'>
                    <h2 className="text-xl font-bold">Total Hive Posts</h2>
                    <h2 className="text-2xl font-bold text-center">600</h2>
                </div>
                <div className='p-3 border shadow-md rounded-sm hover:shadow-lg hover:scale-105'>
                    <h2 className="text-xl font-bold">Total Hive Post Users</h2>
                    <h2 className="text-2xl font-bold text-center">100</h2>
                </div>
            </div>
            <Chart total={600}  number={100} name={name} amount={amount}></Chart>
        </div>
    );
};

export default page;