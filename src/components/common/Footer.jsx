"use client"
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => { 
    return (
        <footer className="bg-gray-100 dark:bg-gray-800 pt-12 pb-8 scroll-mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Motto */}
                    <div className="flex flex-col items-start">
                        <Image src="https://i.postimg.cc/nrSMfQDf/image.png" alt="Butterfly Logo" width={80} height={80} />
                        <h2 className="mt-2 text-xl font-bold text-gray-900 dark:text-white">Butterfly</h2>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Let your book fly</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Quick Links</h3>
                        <ul className="mt-4 space-y-4">
                            <li><Link href="/about" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About Us</Link></li>
                            <li><Link href="/how-it-works" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">How It Works</Link></li>
                            <li><Link href="/faq" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">FAQ</Link></li>
                            <li><Link href="/contact" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact Us</Link></li>
                        </ul>
                    </div> 

                    {/* Legal */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Legal</h3>
                        <ul className="mt-4 space-y-4">
                            <li><Link href="/terms" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Terms of Service</Link></li>
                            <li><Link href="/privacy" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Privacy Policy</Link></li>
                            <li><Link href="/cookie-policy" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Cookie Policy</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter Signup */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Stay Updated</h3>
                        <p className="mt-4 text-base text-gray-600 dark:text-gray-300">Subscribe to our newsletter for the latest updates.</p>
                        <form className="mt-4">
                            <div className="flex space-x-2">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-grow"
                                />
                                <Button type="submit">Subscribe</Button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Social Links and Copyright */}
                <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
                    <div className="flex justify-between items-center">
                        <p className="text-base text-gray-400">&copy; 2024 Butterfly. All rights reserved.</p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Facebook</span>
                                <Facebook className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Twitter</span>
                                <Twitter className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Instagram</span>
                                <Instagram className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Email</span>
                                <Mail className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;