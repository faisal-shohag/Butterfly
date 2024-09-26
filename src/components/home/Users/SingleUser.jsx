"use client"
import Image from 'next/image';
import React from 'react';

const SingleUser = ({user}) => {
    const {full_name,email,avatar_url,coverPhoto} = user
    return (
        <div>
            <div className='border flex gap-3 items-center p-2 rounded-lg shadow-md hover:scale-105'>
                 <Image src={avatar_url} alt='user Image' width={70} height={70} className='rounded-full'></Image>
                <div>
                <h3 className="text-lg font-bold">{full_name}</h3>
                <p>{email}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleUser;