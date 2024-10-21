import Link from "next/link";

const CookiePolicy = () => {
    return (
        <div className="w-full my-7 px-6">
            <div className="text-5xl font-thin text-center">COOKIE POLICY</div>

            <div className="font-bold ">Cookies and how we use them</div>

            <div>
                <h5 className="font-bold text-sm">What are cookies?</h5>
                <p className="text-[13px]">Cookies are text files containing small amounts of information which are downloaded to your device when you visit a website. Cookies are then sent back to the originating website on each subsequent visit, or to another website that recognises that cookie. Cookies are useful because they allow a website to recognise a user’s device.</p>

                <p className="text-[13px]">You can find more information about cookies at: <Link className="underline" target="_blank" href={"www.allaboutcookies.org"}>www.allaboutcookies.org</Link> and <Link className="underline" target="_blank" href="www.youronlinechoices.eu">www.youronlinechoices.eu</Link>.</p>
            </div>
        </div>
    );
};

export default CookiePolicy;