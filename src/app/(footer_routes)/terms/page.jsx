import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { FaMapMarkerAlt } from 'react-icons/fa';

const Terms = () => {
    return (
        <div className="px-3">

            <Card
                className="lg:h-[400px] md:h-[300px] h-[300px] relative rounded-xl bg-fixed bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://i.postimg.cc/hjzcgJcs/araix-rand-Xe46k-NRh-Xs-A-unsplash.jpg')`,
                }}
            >
                <div className="bg-black z-10 lg:h-[400px] md:h-[300px] rounded-xl h-[300px] w-full bg-opacity-50"></div>
                <div className="absolute inset-0 text-center flex items-center justify-center flex-col ">
                    <CardTitle className="text-3xl font-bold uppercase mt-2 text-white mb-2">
                        ButterFly Terms and Service
                    </CardTitle>
                    <CardDescription className="text-white ">
                        Welcome to Butterfly Books! We are delighted to provide a platform where users can exchange, sell, and buy books. <br /> By using our services, you agree to the following terms and conditions. Please review them carefully to understand your rights and responsibilities.
                    </CardDescription>
                </div>
            </Card>


            <h2 className="text-xl font-bold opacity-75 my-4">1. Acceptance of Terms</h2>
            <p>By accessing or using Butterfly Books, you agree to be bound by these terms. If you do not agree with any part of these terms, you should not use the platform.</p>

            <h2 className="text-xl font-bold opacity-75 my-4">2. Account Responsibilities</h2>
            <ul class="list-disc pl-5 space-y-2">
                <li>You are responsible for the accuracy and security of your account information.</li>
                <li>Make sure to keep your account information updated to ensure a smooth experience.</li>
                <li>We encourage open and honest participation within the community and appreciate your cooperation in maintaining a positive atmosphere.</li>
            </ul>

            <h2 className="text-xl font-bold opacity-75 my-4">3. Posting Books for Exchange</h2>
            <ul class="list-disc pl-5 space-y-2">
                <li>Users are welcome to post books they wish to exchange. Ensure that your listings are clear and truthful, describing the condition and details of the books as accurately as possible.</li>
                <li>We encourage users to facilitate smooth and friendly exchanges, enhancing the overall experience for everyone in the community.</li>
                <li>In case of issues with any book listing, we are here to assist and resolve the matter in a fair and timely manner.</li>
            </ul>

            <h2 className="text-xl font-bold opacity-75 my-4">4. Buying and Selling Books</h2>
            <ul class="list-disc pl-5 space-y-2">
                <li>Users can browse and purchase books through our platform with ease. We encourage clear communication between buyers and sellers to make sure transactions are transparent and satisfactory.</li>
                <li>Payment transactions are managed through secure third-party gateways to ensure safety for all users.</li>
                <li>We recommend reviewing the details and condition of books before purchasing to ensure a successful transaction.</li>
            </ul>

            <h2 className="text-xl font-bold opacity-75 my-4">5. Community Guidelines</h2>
            <p>We promote a positive, respectful, and engaging community where everyone can enjoy the book exchange experience. When using Butterfly Books, we encourage users to:</p>
            <ul class="list-disc pl-5 space-y-2">
                <li>Contribute with kindness, respect, and integrity.</li>
                <li>Share valuable feedback and help others in the community.</li>
                <li>Keep conversations and exchanges friendly and supportive.</li>
            </ul>

            <h2 className="text-xl font-bold opacity-75 my-4">6. Limitation of Liability</h2>
            <ul class="list-disc pl-5 space-y-2">
                <li>While we strive to ensure a seamless experience, Butterfly Books is not responsible for any disputes or issues arising from transactions between users. However, we will do our best to mediate and resolve conflicts in a constructive manner.</li>
                <li>We recommend resolving any transaction issues directly with the other party for a quick and amicable solution.</li>
            </ul>

            <Card className='p-3 md:flex gap-4 my-4'>
                <div className='md:border-r-2'>
                    <h2 className="text-xl font-bold opacity-75 mb-2">7. Termination</h2>
                    <p>We aim to maintain a harmonious community, but we reserve the right to suspend or terminate your access to Butterfly Books if we believe that any activities are negatively affecting the platform. We will always communicate openly before taking any action.</p>
                </div>
                <div>
                    <h2 className="text-xl font-bold opacity-75 mb-2">8. Changes to Terms</h2>
                    <p>From time to time, we may update these terms to improve the user experience. We will notify users of any significant changes, and by continuing to use the platform, you agree to the updated terms.</p>
                </div>
            </Card>

            {/* <Card className='p-3  '>
            <h2 className="text-xl font-bold opacity-75 mb-2">Contact Information</h2>
            <p>We value your feedback and are here to help! If you have any questions or concerns regarding these terms, feel free to contact us at <span className="font-bold">butterfly@gmail.com</span></p>
            </Card> */}



            <div className="space-y-4 pt-4">
                <div className="divider border-b-2"></div>
                <div className="space-y-2">
                    <p>This version emphasizes positive community engagement, clear communication, and support, while maintaining the necessary terms for ensuring a smooth and safe environment. Let me know if you'd like any more modifications!</p>
                    <p>It is hoped that you will comply with the above terms and conditions and use the platform properly</p>
                </div>
            </div>

            <Card className="mt-6 p-6 shadow-lg mx-auto text-center">
                <div className="text-2xl w-full font-bold mb-4 flex flex-col items-center">
                    {/* <FaMapMarkerAlt className="mr-2 text-gray-500" size={36}/> Location Icon */}
                    Contact Information
                </div>
                <p className="text-gray-500 mb-2">
                    Address: 123 Butterfly St, Dhaka, Bangladesh
                </p>
                <p className="text-gray-500 mb-2">
                    Business Hours: Mon - Fri: 9 AM - 6 PM
                </p>
                <p className="text-gray-500 mb-2">
                    Phone: +880 123 456 7890
                </p>
                <p className="text-gray-500 mb-2">
                    Email: contact@butterfly.com
                </p>
            </Card>

        </div>
    );
};

export default Terms;