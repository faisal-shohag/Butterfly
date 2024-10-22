"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";


import { Map, Marker } from "pigeon-maps";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";


const ContactUs = () => {
    const dhakaCoordinates = [23.8103, 90.4125];
    const [center, setCenter] = useState(dhakaCoordinates);
    const [zoom, setZoom] = useState(11);
  
    return (
      <div className="max-w-screen-lg mx-auto">
       
        <div
          className="lg:h-[400px] md:h-[300px] h-[300px] relative rounded-xl bg-fixed bg-cover bg-center"
          style={{
            backgroundImage: `url('https://i.postimg.cc/hjzcgJcs/araix-rand-Xe46k-NRh-Xs-A-unsplash.jpg')`,
          }}
        >
          <div className="bg-[#586DF2] z-10 lg:h-[400px] md:h-[300px] h-[300px] w-full bg-opacity-40"></div>
          <div className="absolute inset-0 text-center flex items-center justify-center flex-col z-20">
            <h3 className="text-4xl font-extrabold uppercase mt-2 text-black mb-2">
              Contact <span className="text-white">Us</span>
            </h3>
            <p className="text-white text-base">
              Have any questions or need assistance? Reach out to us, and our team
              <br /> will get back to you promptly to help with your inquiry.
            </p>
          </div>
        </div>
  
  
        <div className="grid grid-cols-1 md:grid-cols-2 mt-24 gap-6">

          <Card className="p-6 shadow-lg">
            <h4 className="text-2xl font-bold mb-6">Get in Touch</h4>
            <div className="flex gap-4 mb-4">
              <Input type="text" placeholder="First Name" />
              <Input type="text" placeholder="Last Name" />
            </div>
            <Input className="mb-4" type="email" placeholder="Email" />
            <Textarea className="mb-4" placeholder="Message" />
            <Button className="w-full">Submit</Button>
  
            <div className="flex gap-4 justify-center mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-400"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-700"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </Card>
  
          <Card className="shadow-lg">
            <Map
              height={300}
              center={center}
              zoom={zoom}
              onBoundsChanged={({ center, zoom }) => {
                setCenter(center);
                setZoom(zoom);
              }}
            >
              <Marker width={50} anchor={dhakaCoordinates} />
            </Map>
          </Card>
        </div>
      </div>
    );
  };

export default ContactUs;