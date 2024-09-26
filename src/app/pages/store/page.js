"use client"
import { useAuth } from '@/providers/authProvider';
const Store = () => {
    const {user} = useAuth()
    console.log(user)
    return (
        <div>
            Store
        </div>
    );
};

export default Store;