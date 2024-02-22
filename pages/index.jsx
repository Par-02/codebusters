import React from "react";
import LandingPageNavbar from "../components/ui/navbar";
import FAQ from "../components/FAQ/FAQ";
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

        </main>
    )
}