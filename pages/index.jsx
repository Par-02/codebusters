import React from "react";
import LandingPageNavbar from "../components/navbar";
import FAQ from "../components/FAQ/FAQ";
import  Footer from "../components/Footer";
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
            <LandingPageNavbar />
            <FAQ />
            <Footer />
        </main>
    )
}