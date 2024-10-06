"use server"

import { auth } from "@/auth";
import Exchanges from "./Exchanges";
import ExchangeBanner from "./ExchangeBanner";



const ExchangeLayout = async () => {
    let user = await auth()
    user = user?.user;

    return (
        <div>
            <ExchangeBanner/>
             <Exchanges userId={user?.id}/>
        </div>
    );
};

export default ExchangeLayout;