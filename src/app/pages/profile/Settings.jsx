'use client'

import React, { useState, useEffect } from 'react';
import { useAuth } from "@/providers/authProvider";
import Image from 'next/image';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {  toast } from 'react-hot-toast';
import Loading from '@/components/common/Loading';



const Settings = () => {
    const { user, setUpdatedUser } = useAuth();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            if (!user?.id) return;

            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/users/${user.id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                const data = await response.json();
                setUserData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [user?.id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        toast.loading('Updating profile...', { id: 'updateProfile' });
      
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/users/${user.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    full_name: userData.full_name,
                    avatar_url: userData.avatar_url,
                    coverPhoto: userData.coverPhoto,
                }),
            });
            if (!response.ok) {
                throw new Error('Failed to update user data');
            }

            toast.success('Profile updated successfully', {id: 'updateProfile'});
           response.json().then((data) => {
               setUpdatedUser({...user, ...data});
            })

        } catch (err) {
            toast.error(err.message);
            setError(err.message);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    if (loading) return <Loading/>;
    if (error) return <div>Error: {error}</div>;
    if (!userData) return <div>No user data available</div>;

    return (
        <div className="p-5 max-w-3xl mx-auto custom-glass-2 rounded-xl">
          
            <h1 className="text-2xl font-bold mb-4">User Settings</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <Label htmlFor="full_name">Full Name</Label>
                    <Input
                        id="full_name"
                        name="full_name"
                        value={userData.full_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        name="email"
                        value={userData.email}
                        disabled
                    />
                </div>
                <div>
                    <Label htmlFor="avatar_url">Avatar URL</Label>
                    <Input
                        id="avatar_url"
                        name="avatar_url"
                        value={userData.avatar_url}
                        onChange={handleChange}
                    />
                    {userData.avatar_url && (
                        <Image height={80} width={80} src={userData.avatar_url} alt="Avatar" className="mt-2 w-20 h-20 rounded-full" />
                    )}
                </div>
                <div>
                    <Label htmlFor="coverPhoto">Cover Photo URL</Label>
                    <Input
                        id="coverPhoto"
                        name="coverPhoto"
                        value={userData.coverPhoto}
                        onChange={handleChange}
                    />
                    {userData.coverPhoto && (
                        <Image height={200} width={400} src={userData.coverPhoto} alt="Cover Photo" className="mt-2 w-full h-40 object-cover" />
                    )}
                </div>
                <Button type="submit">Update Profile</Button>
            </form>
        </div>
    );
};

export default Settings;