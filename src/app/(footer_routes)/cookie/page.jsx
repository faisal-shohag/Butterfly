import Link from "next/link";

const CookiePolicy = () => {
    return (
        <div className="w-full my-7 px-6">
            <div className="text-5xl font-thin text-center ">COOKIE POLICY</div>

            <div className="font-bold mb-6">Cookies and how we use them</div>

            {/* what are cookies */}
            <div className="mb-6">
                <h5 className="font-bold text-sm">What are cookies?</h5>
                <p className="text-[13px]">Cookies are text files containing small amounts of information which are downloaded to your device when you visit a website. Cookies are then sent back to the originating website on each subsequent visit, or to another website that recognises that cookie. Cookies are useful because they allow a website to recognise a user’s device.</p>

                <p className="text-[13px]">You can find more information about cookies at: <Link className="underline" target="_blank" href={"www.allaboutcookies.org"}>www.allaboutcookies.org</Link> and <Link className="underline" target="_blank" href="www.youronlinechoices.eu">www.youronlinechoices.eu</Link>.</p>
            </div>

            {/* Do we use cookie */}
            <div className="mb-6">
                <h5 className="font-bold text-sm">Do we use cookies?</h5>
                <p className="text-[13px]">Yes.</p>

                
            </div>
            {/* Types of cookies */}
            <div className="mb-6">
                <h5 className="font-bold text-sm">Types of cookies</h5>
                <p className="text-[13px]">There are two broad types of cookies - 'first party cookies' and 'third party cookies':</p>

                <ul className="list-disc pl-5">
                    <li >First party cookies are cookies that are served directly by the website operator to your computer, and are often used to recognise your computer when it revisits that site and to remember your preferences as you browse the site. Basically, these are our cookies.</li>

                    <li>Third party cookies are served by a service provider on behalf of the website operator, and can be used by the service provider to recognise your computer when you visit other web sites. Third party cookies are most commonly used for web site analytics or advertising purposes.</li>
                </ul>


                <p className="text-[13px] my-6">In addition, cookies may be either 'session cookies' or 'persistent cookies'. Your computer automatically removes session cookies once you close your browser. Persistent cookies will survive on your computer until an expiry date specified in the cookie itself, is reached. We use both session and persistent cookies.</p>
                
            </div>
        </div>
    );
};

export default CookiePolicy;