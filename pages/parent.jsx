import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import bg2 from '../assets/bg_image2.jpg';
export default function Parent() {
    const [isOpen,setIsOpen] = useState(false);
    return (
        <main>
        <Image src={bg2} alt="Background Image" layout="fill" className="z-[-5] object-fill"/>
            {/* <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
            </button> */}
            
            
            
        </main>
    );
}
