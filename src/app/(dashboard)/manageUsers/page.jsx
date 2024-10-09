import React from 'react';

const page = () => {

    const users = [
        {
            "id": 1,
            "name": "John Doe",
            "email": "john.doe@example.com",
            "image": "https://ik.imagekit.io/masudur/default-image.jpg?updatedAt=1727106592857",
            "role": "admin"
        },
        {
            "id": 2,
            "name": "Jane Smith",
            "email": "jane.smith@example.com",
            "image": "https://ik.imagekit.io/masudur/default-image.jpg?updatedAt=1727106592857",
            "role": "user"
        },
        {
            "id": 3,
            "name": "Michael Brown",
            "email": "michael.brown@example.com",
            "image": "https://ik.imagekit.io/masudur/default-image.jpg?updatedAt=1727106592857",
            "role": "user"
        },
        {
            "id": 4,
            "name": "Emily Johnson",
            "email": "emily.johnson@example.com",
            "image": "https://ik.imagekit.io/masudur/default-image.jpg?updatedAt=1727106592857",
            "role": "user"
        },
        {
            "id": 5,
            "name": "David Wilson",
            "email": "david.wilson@example.com",
            "image": "https://ik.imagekit.io/masudur/default-image.jpg?updatedAt=1727106592857",
            "role": "user"
        },
        {
            "id": 6,
            "name": "Sarah Miller",
            "email": "sarah.miller@example.com",
            "image": "https://ik.imagekit.io/masudur/default-image.jpg?updatedAt=1727106592857",
            "role": "user"
        },
        {
            "id": 7,
            "name": "James Taylor",
            "email": "james.taylor@example.com",
            "image": "https://ik.imagekit.io/masudur/default-image.jpg?updatedAt=1727106592857",
            "role": "user"
        },
        {
            "id": 8,
            "name": "Sophia Lee",
            "email": "sophia.lee@example.com",
            "image": "https://ik.imagekit.io/masudur/default-image.jpg?updatedAt=1727106592857",
            "role": "user"
        },
        {
            "id": 9,
            "name": "Chris Evans",
            "email": "chris.evans@example.com",
            "image": "https://ik.imagekit.io/masudur/default-image.jpg?updatedAt=1727106592857",
            "role": "user"
        },
        {
            "id": 10,
            "name": "Olivia Davis",
            "email": "olivia.davis@example.com",
            "image": "https://ik.imagekit.io/masudur/default-image.jpg?updatedAt=1727106592857",
            "role": "user"
        }
    ]


    return (

        <div>
            <div>
                <h3 className="text-2xl font-bold text-center p-3 border shadow-md rounded-sm">Manage Users</h3>
            </div>
            <div className="overflow-x-auto mt-8 flex justify-center items-center">
                <table className="table min-w-[600px] ">
                    {/* head */}
                    <thead>
                        <tr className='border-b'>

                            <th>User Info</th>
                            <th>Role</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user => <tr key={user.id} className='border-b group hover:shadow-md'>
                                <td>
                                    <div className="flex items-center gap-3 py-2"> 
                                        <img
                                            src={user.image}
                                            alt="Avatar Tailwind CSS Component" className='h-12 w-12 rounded-full group-hover:scale-105' />
 
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                            <div className="text-sm opacity-50">{user.email}</div>
                                        </div>
                                    </div>
                                </td>
                                {user.role == 'admin' ? <td className='w-52 text-center text-red-500'> {user.role} </td> :
                                    <td className='w-52 text-center'> {user.role} </td>}

                                {
                                    user.role === 'admin' ? '' :
                                        <th className='w-52 text-center space-y-2 py-2'>
                                            <p className="btn btn-sm px-3 py-1 rounded-md border hover:shadow-md text-sm font-medium">Edit Role</p>
                                            <p className="btn btn-sm px-3 py-1 rounded-md border hover:shadow-md text-sm font-medium">Send Mail</p>
                                        </th>
                                }
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>

    );
};

export default page;