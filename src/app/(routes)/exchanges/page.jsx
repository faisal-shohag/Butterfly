"use server"

import { auth } from "@/auth";
import Exchanges from "./Exchanges";

const ExchangeLayout = async () => {
    let user = await auth()
    user = user?.user;

    return (
        <div>
             <Exchanges userId={user?.id}/>
        </div>
    );
};

export default ExchangeLayout;