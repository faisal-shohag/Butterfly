"use server"

import { auth } from "@/auth";
import StoreBookDetailsPage from "./StoreBookDetailsPage";

const StoreBookDetails = async ({params}) => {
    let user = await auth();
    user = user?.user;
    const id = params.storeId
    return (
        <div className="section">
            <StoreBookDetailsPage bookId={id} userId={user.id}/>
        </div>
    );
};

export default StoreBookDetails;