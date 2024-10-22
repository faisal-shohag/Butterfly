import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactUs = () => {
    return (
        <div className=' max-w-screen-lg mx-auto'>
        <div
            className="lg:h-[400px] md:h-[300px] h-[300px]    relative rounded-xl bg-fixed bg-cover bg-center"
            style={{
                backgroundImage: `url('https://i.postimg.cc/hjzcgJcs/araix-rand-Xe46k-NRh-Xs-A-unsplash.jpg')`,
            }}
        >
            <div className=" bg-[#586DF2] z-10 lg:h-[400px] md:h-[300px] h-[300px] w-full bg-opacity-40"></div>
            <div className="absolute inset-0 text-center flex items-center justify-center flex-col z-20">
                <h3 className=" text-4xl  font-extrabold  uppercase mt-2 text-black mb-2">Contact <span className="text-white">Us</span> </h3>
                <p className="text-white text-base">Have any questions or need assistance? Reach out to us, and our team <br /> will get back to you promptly to help with your inquiry.</p>
            </div>
        </div>

        <div className='grid grid-cols-2 mt-5'>
                {/* side 1 */}
                <Card>
                    <div>
                        <div className="flex gap-4 mb-4">
                            <Input className='' type="text" placeholder="Fast Name" />
                            <Input className='' type="text" placeholder="Last Name" />
                        </div>
                        <Input className='mb-4' type="email" placeholder="Email" />
                        <Textarea className='mb-4' placeholder="Message" />
                        <Button className='w-full'>Button</Button>
                    </div>
                </Card>
                {/* side 2 */}
                <div>
                
                </div>
            </div>

    </div>
    );
};

export default ContactUs;