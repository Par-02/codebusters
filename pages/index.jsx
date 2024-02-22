import React from "react";
import LandingPageNavbar from "../components/ui/navbar";
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
            {/* <Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>New Window</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Share</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
    <MenubarContent>
    <MenubarItem>File</MenubarItem>
    <MenubarItem>Home</MenubarItem>
    <MenubarItem>About Us</MenubarItem>
    <MenubarItem>Login</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar> */}

        </main>
    )
}