"use client";
import React, { useState } from "react";
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
  Modal,
  ModalContent,
  useDisclosure,
  Input,
  Tooltip,
} from "@nextui-org/react";

export default function ChatsNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Features", "About", "Support"];

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
            MH02
          </a>
        </NavbarBrand>
      </NavbarContent>


      <NavbarContent justify="end">
        <NavbarItem>
          <Tooltip content="Join/Create a Chat">
            <Button
              onPress={onOpen}
              variant="flat"
              className="text-white font-Poppins bg-opacity-100 bg-blue-500 font-medium text-sm sm:text-md"
            >
              New Chat
            </Button>
          </Tooltip>
          <Modal
            isOpen={isOpen}
            placement={"center"}
            onOpenChange={onOpenChange}
            className="rounded-sm bg-gray-900 pt-4 pb-8 px-8"
          >
            <ModalContent className="">
              {(onClose) => (
                <>
                  <p className="mb-2 text-white text-lg font-bold">
                    Join/Create a Chat Room:
                  </p>
                  <div className="flex items-center justify-center">
                    <Input
                      type="text"
                      variant={"faded"}
                      placeholder="Chat Room ID"
                      radius="none"
                      className="p-0 outline-none focus:outline-none border-none focus:border-none text-black"
                    />
                    <Button
                      color="primary"
                      onPress={onClose}
                      className="rounded-l-none rounded-r-sm text-white"
                    >
                      Submit
                    </Button>
                  </div>
                </>
              )}
            </ModalContent>
          </Modal>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
