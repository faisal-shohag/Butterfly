
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import React from 'react'

const About = () => {
    return (
        <div className='max-w-screen-lg mx-auto z-0'>
            <Card
                className="lg:h-[400px] md:h-[300px] h-[300px] relative rounded-xl bg-fixed bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://i.postimg.cc/hjzcgJcs/araix-rand-Xe46k-NRh-Xs-A-unsplash.jpg')`,
                }}
            >
                <div className="bg-[#586DF2] z-10 lg:h-[400px] md:h-[300px] rounded-xl h-[300px] w-full bg-opacity-40"></div>
                <div className="absolute inset-0 text-center flex items-center justify-center flex-col ">
                    <CardTitle className="text-4xl font-extrabold uppercase mt-2 text-black mb-2">
                        About  <span className="text-white">Us</span>
                    </CardTitle>
                    <CardDescription className="text-white ">
                        At Butterfly, our mission is to bring book lovers together by creating a platform for seamless <br /> book exchanges. We believe that every book deserves a second life, and  through our platform, we aim to foster <br /> a community where knowledge and stories can be shared freely and sustainably.
                    </CardDescription>
                </div>
            </Card>
            <Card className="text-center py-12 px-4">
                <CardTitle className="text-2xl font-bold">Mission And Values</CardTitle>
                <CardDescription className="mt-4 text-gray-500 max-w-2xl mx-auto">
                    Our mission is to create a vibrant community of book lovers who can easily exchange and share their favorite reads, promoting sustainability and a love for literature. We value accessibility, community engagement, and the belief that every book can bring joy and insight to someone else.
                </CardDescription>

                <div className="flex justify-center space-x-8 mt-8 animate-fadeIn">
                    <Card className="transition transform hover:scale-110 p-4">
                        <h3 className="text-xl font-bold">1000+</h3>
                        <p className="text-gray-500">Books Exchanged</p>
                    </Card>

                    <Card className="transition transform hover:scale-110 p-4">
                        <h3 className="text-xl font-bold">3+</h3>
                        <p className="text-gray-500">Years of Community Building</p>
                    </Card>
                </div>
            </Card>
            <Card
                className="lg:h-[250px] md:h-[250px] h-[200px] relative rounded-xl bg-fixed bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://i.postimg.cc/hjzcgJcs/araix-rand-Xe46k-NRh-Xs-A-unsplash.jpg')`,
                }}
            >
                <div className="bg-[#586DF2] z-10 lg:h-[250px] md:h-[250px] h-[300px] w-full rounded-lg bg-opacity-40"></div>
                <div className="absolute inset-0 text-center flex items-center justify-center flex-col ">
                    <CardTitle className="text-4xl font-extrabold uppercase mt-2 text-black mb-2">
                        Our <span className="text-white">Vision</span>
                    </CardTitle>
                    <CardDescription className="text-white ">
                        At Butterfly, we envision a world where every book finds a new reader. <br /> We aim to create a vibrant community that fosters sharing, learning, and connection <br /> through literature. Together, we can inspire creativity and a love for reading across generations.
                    </CardDescription>
                </div>
            </Card>
        </div>
    );
};

export default About;