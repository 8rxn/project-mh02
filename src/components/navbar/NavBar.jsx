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

export default function HomeNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [{name: "Dashboard", link: "/chats"}, {name: "Features", link: "#WcFeatures"}, {name: "Contact", link: "#Contact"}];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="fixed top-0 bg-[#0b0b0b] bg-opacity-5 backdrop-blur-md text-white border-b-[1px] border-gray-600 w-full mx-auto shadow-lg py-0 sm:py-2"
    >
      <NavbarContent>
        <NavbarBrand>
          <a
            className="flex justify-center items-center gap-2 font-RobotoMono text-md sm:text-3xl"
            href="/"
          >
            <img src="/logo.png" alt="logo" className="w-[30px] sm:w-[40px]" />
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
          <Link className="text-white font-RobotoMono" href="/chats">
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white font-RobotoMono" href="#WcFeatures">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white font-RobotoMono" href="#Contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-black mt-10">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="white"
              href={item.link}
              size="lg"
              className="font-RobotoMono text-white text-lg w-full bg-black"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
