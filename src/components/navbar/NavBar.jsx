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

  const menuItems = ["Features", "About", "Support"];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="fixed top-7 bg-[#ffffff] bg-opacity-5 backdrop-blur-md text-white border-[1px] border-gray-600 w-[95vw] sm:w-[80vw] mx-auto rounded-full shadow-lg"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <a className="font-bold font-Gabarito text-md sm:text-xl" href="/">
            WeaveChat
          </a>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        <NavbarItem>
          <Link className="text-white font-Poppins" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-white font-Poppins">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white font-Poppins" href="#">
            Support
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
            <Button
              as={Link}
              href="/"
              variant="flat"
              className="text-white font-Poppins bg-opacity-100 bg-blue-500 font-medium text-sm sm:text-md"
            >
              Connect Wallet
            </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-black mt-10">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="white"
              href="#"
              size="lg"
              className="font-Poppins text-white text-lg w-full bg-black"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
