'use server'
import Chart from '@/components/Chart';
import React from 'react';

const page = () => {

    const name = 'Total Order'
    const amount = 'Total Revenue'

    return (
        <div>
            <div>
                <h3 className="text-2xl font-bold text-center p-3 border shadow-md rounded-sm">Orders Report</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7'>
                <div className='p-3 border shadow-md rounded-sm hover:shadow-lg hover:scale-105'>
                    <h2 className="text-xl font-bold">Total Orders</h2>
                    <h2 className="text-2xl font-bold text-center">100</h2>
                </div>
                <div className='p-3 border shadow-md rounded-sm hover:shadow-lg hover:scale-105'>
                    <h2 className="text-xl font-bold">Total Revenue</h2>
                    <h2 className="text-2xl font-bold text-center">500$</h2>
                </div>
            </div>
            <Chart total={300}  number={500} name={name} amount={amount}></Chart>
        </div>
    );
};

export default page;