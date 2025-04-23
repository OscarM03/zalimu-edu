"use client";

import MobileNav from "@/sections/home/MobileNav";
import Navbar from "@/sections/home/Navbar";
import Image from "next/image";
import React, { useState } from "react";
import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";

const Layout = ({ children }: { children: React.ReactNode }) => { 
    const [isMinimized, setIsMinimized] = useState<boolean>(false);

    return (
        <div className="relative">
            <div className="sticky top-0 z-40 bg-white h-16 border-b border-gray-50  shadow-sm flex items-center justify-between px-4">
                <div>
                    <Image
                        src="/assets/images/logo.png"
                        alt="logo"
                        width={120}
                        height={120}
                        className="object-cover"
                    />
                </div>
                <div className="lg:hidden transition-all duration-300 ease-in-out">
                    <MobileNav />
                </div>
            </div>
            <aside className={`fixed top-0 left-0 ${ isMinimized ? "w-[70px]" : "w-[250px]" } h-screen bg-gray-50 mt-17 z-50 hidden lg:block transition-all duration-300 ease-in-out`}>
                <div>
                    <div className="absolute top-0 -right-[9px] z-50">
                        <button
                            onClick={() => setIsMinimized(!isMinimized)}
                            className="bg-primary text-white rounded-full p-1"
                        >
                            {isMinimized ? (
                                <FaAnglesRight size={10} />
                            ) : (
                                <FaAnglesLeft size={10 } />
                            )}
                        </button>
                    </div>
                    <Navbar minimizeMenu={isMinimized}/>
                </div>
            </aside>
            <main className="lg:ml-[250px] min-h-screen">
                <div className="max-w-[1400px] mx-auto px-4 mt-4">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default Layout;
