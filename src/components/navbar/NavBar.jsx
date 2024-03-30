"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { ConnectButton } from "arweave-wallet-kit";

export default function HomeNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Features", "About", "Support"];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="fixed top-0 bg-[#ffffff] bg-opacity-5 backdrop-blur-md text-white border-b-[1px] border-gray-600 w-full mx-auto shadow-lg py-0 sm:py-2"
    >
      <NavbarContent>
        <NavbarBrand>
          <a
            className="flex justify-center items-center gap-2 font-RobotoMono text-md sm:text-3xl"
            href="/"
          >
            <img src="/logo.png" alt="logo" className="sm:w-[40px]" />
            <p>WeaveChat</p>
          </a>
        </NavbarBrand>
      </NavbarContent>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarContent className="hidden sm:flex gap-10" justify="end">
        <NavbarItem>
          <Link className="text-white font-RobotoMono" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-white font-RobotoMono">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white font-RobotoMono" href="#">
            Support
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-black mt-10">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="white"
              href="#"
              size="lg"
              className="font-RobotoMono text-white text-lg w-full bg-black"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
