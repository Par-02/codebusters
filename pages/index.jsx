import React from "react";
import LandingPageNavbar from "../components/navbar";
import FAQ from "../components/FAQ/FAQ";
import  Footer from "../components/Footer";
import bg from '../assets/index_bg.jpg';
import Image from "next/image";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  
  

export default function Home(){
    return(
        <main className="h-[100vh] ">
            <Image src={bg} alt="Background Image" layout="fill" className="z-[-5] object-fill"/>
            <LandingPageNavbar />
            <section>
            <FAQ />
            <Footer />
            </section>
        </main>
    )
}