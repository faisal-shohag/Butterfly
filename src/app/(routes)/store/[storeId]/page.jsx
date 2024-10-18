"use server"

import StoreBookDetailsPage from "./StoreBookDetailsPage";

const StoreBookDetails = async ({params}) => {
    // console.log(params);
    const id = params.storeId
    return (
        <div className="section">
            <StoreBookDetailsPage bookId={id}/>
        </div>
    );
};

export default StoreBookDetails;