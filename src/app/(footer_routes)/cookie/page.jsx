import Link from "next/link";

const CookiePolicy = () => {
    return (
        <div className="w-full my-7 px-6">
            <div className="text-3xl md:text-5xl font-thin text-center my-6  md:my-16">COOKIE POLICY</div>

            <div className="font-bold mb-6 text-[18px]">Cookies and how we use them</div>

            {/* what are cookies */}
            <div className="mb-6">
                <h5 className="font-bold">What are cookies?</h5>
                <p className="text-sm">Cookies are text files containing small amounts of information which are downloaded to your device when you visit a website. Cookies are then sent back to the originating website on each subsequent visit, or to another website that recognises that cookie. Cookies are useful because they allow a website to recognise a user’s device.</p>

                <p className="text-sm">You can find more information about cookies at: <a className="underline" target="_blank" href="http://www.allaboutcookies.org" rel="noopener noreferrer">www.allaboutcookies.org</a> and <a className="underline" target="_blank" href="https://youronlinechoices.eu/" rel="noopener noreferrer">www.youronlinechoices.eu</a>.</p>
            </div>

            {/* Do we use cookie */}
            <div className="mb-6">
                <h5 className="font-bold ">Do we use cookies?</h5>
                <p className="text-sm">Yes.</p>

                
            </div>
            {/* Types of cookies */}
            <div className="mb-6">
                <h5 className="font-bold ">Types of cookies</h5>
                <p className="text-sm">There are two broad types of cookies - 'first party cookies' and 'third party cookies':</p>

                <ul className="list-disc pl-5 text-sm">
                    <li >First party cookies are cookies that are served directly by the website operator to your computer, and are often used to recognise your computer when it revisits that site and to remember your preferences as you browse the site. Basically, these are our cookies.</li>

                    <li>Third party cookies are served by a service provider on behalf of the website operator, and can be used by the service provider to recognise your computer when you visit other web sites. Third party cookies are most commonly used for web site analytics or advertising purposes.</li>
                </ul>


                <p className="text-sm my-6">In addition, cookies may be either 'session cookies' or 'persistent cookies'. Your computer automatically removes session cookies once you close your browser. Persistent cookies will survive on your computer until an expiry date specified in the cookie itself, is reached. We use both session and persistent cookies.</p>
                
            </div>
            {/* Categories of cookies we use */}
            <div className="mb-6">
                <h5 className="font-bold ">Categories of cookies we use</h5>
                

                <ol className="list-decimal text-sm pl-5">
                    <li >Strictly necessary cookies: These cookies are essential for the user to move around the website and to use its features, e.g. shopping baskets and e-billing.</li>

                    <li>Performance cookies: These cookies collect information about how the user makes use of the site, e.g. which pages the user visits most. These cookies do not collect information that identifies the user.</li>

                    <li>Functionality cookies: These cookies remember choices made by the user and enhance the features, e.g. language or users location. This cookie is also used to remember a user's preferences for a font size, or customisable parts of a web page.</li>

                    <li>Targeting or advertising cookies: These cookies collect information about the users' browsing habits. This may also include your use of social media sites, e.g. Facebook, etc. or how you interact with our website which then shows you relevant content elsewhere on the internet. NB. These may also be used to remarket to you in limited circumstances</li>
                </ol>


                <p className="text-sm">The majority of our cookies fall into the first two categories. However, we also use cookies on our webpages which are in categories 3 and 4.</p>
                
            </div>


             {/* What information do we collect? */}
             <div className="mb-6">
                <h5 className="font-bold ">What information do we collect?</h5>
                <p className="text-sm">We may collect some, or all, of this information when you visit our website, depending on how you use it. We monitor how people use our website so we can improve it. We collect this information anonymously.</p>

                <p className="text-sm my-6">However, you can use our website anonymously without giving us any information.

</p>

                <p className="text-sm ">If you visit our website, we may record information about including (but not limited to):

</p>
<ul className="list-disc pl-8 text-sm">
    <li>the areas of the website you visit</li>
    <li>the amount of time you spend on the site</li>
    <li>whether you are new to the site, or have visited it before</li>
    <li>how you came to our website – for example, through an email link or a search engine</li>
    <li>the type of device and browser you use.</li>
    <li>how you use the website and the quality of your experience – for example we may track your bandwidth when viewing videos.</li>
</ul>

<p className="text-sm mt-6">We use cookies to track how donors come to our site. For example, we use approach codes in our internet addresses (URLs) to show us whether a donation came from and give us insight into the effectiveness of our marketing material. Some of this will be used by third party cookies to target you with relevant advertising (see below).

</p>

<p className="text-sm ">Although not through cookies, we do measure the success of the emails we send – so we know what subject lines and stories people liked the most. We receive this information anonymously, we don’t share this information.

</p>
                
            </div>


             {/* Third party cookies

 */}
             <div className="mb-6">
                <h5 className="font-bold ">Third party cookies
</h5>
                <p className="text-sm">You may notice some cookies that are not related to the Their Future Today’s website whilst visiting <a className="underline" target="_blank" href="http://www.theirfuturetoday.com" rel="noopener noreferrer">www.theirfuturetoday.com</a> . Some of our pages contain embedded content such as YouTube video, Twitter feed, Facebook likes or Google plus share, and you may receive cookies delivered from these websites. Their Future Today does not govern the publication of 3rd party cookies. To understand more about their cookies and privacy statements, please visit the relevant sites.</p>


                <p className="text-sm mt-6">Some of our cookies will remind you about our work and how you can help after you have left the website. These are the targeting/advertising cookies we use. It is a useful tool for us to keep public awareness of our campaigns and how they can be supported.</p>

                <p className="text-sm ">If you do not want cookies to be stored on your PC it is possible to disable this function without affecting your navigation around the site.</p>

                
            </div>


            {/* Changing your cookie preferences */}
            <div className="mb-6">
                <h5 className="font-bold ">Changing your cookie preferences</h5>
                <p className="text-sm">The "Help" menu in the toolbar of most web browsers will tell you how to change your browser's cookie settings, including how to have the browser notify you when you receive a new cookie, and how to disable cookies altogether. Below is some helpful guidance about how to make these changes.</p>

                
            </div>


            {/* How to disable cookies? */}
            <div className="mb-6">
                <h5 className="font-bold ">How to disable cookies?</h5>
                <p className="text-sm">If you are using Microsoft Internet Explorer and you wish to block Their Future Today’s website cookies, you can perform the following:</p>

                <ol className="list-decimal text-sm pl-6">
                    <li>On your browser tools menu, select 'Internet Options</li>
                    <li>Click on the 'Privacy' tab and then on the 'Sites' button</li>
                    <li>Type into the 'Address of website' field:</li>
                    <li>
                        <a className="underline" target="_blank"  href="http://www.theirfuturetoday.com/">www.theirfuturetoday.com</a>
                    </li>
                    <li>
                    Click on the 'Block' button
                    </li>
                    <li>
                    Click on the OK button
                    </li>
                    <li>
                    Other browsers:
                    <ul>
                        <li> - Firefox cookie management</li>
                        <li> - Chrome cookie management</li>
                        <li> - Safari cookie management</li>
                    </ul>
                    </li>
                </ol>

                <p className="text-sm my-6">Find more detailed information on disabling cookies from <a className="underline" target="_blank" href="https://www.allaboutcookies.org.">www.allaboutcookies.org.</a></p>
            </div>

        </div>
    );
};

export default CookiePolicy;