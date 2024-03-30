"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Modal,
  ModalContent,
  useDisclosure,
  Input,
  Tooltip,
} from "@nextui-org/react";
import { IoMdAddCircle } from "react-icons/io";

export default function ChatsNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      justify={"center"}
      className="bg-[#ffffff] bg-opacity-5 backdrop-blur-md text-white border-[1px] border-gray-600 max-w-full mx-auto rounded-md shadow-lg"
    >
      <NavbarContent>
        <NavbarBrand>
          <a className="font-bold font-Gabarito text-md sm:text-xl" href="/">
            WeaveChat
          </a>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="flex gap-2">
          <Tooltip content="Join/Create a Chat">
            <button
              onClick={onOpen}
              variant="flat"
              className="text-white font-Poppins bg-opacity-100 bg-blue-500 font-medium text-xs sm:text-sm py-2 px-3 rounded-sm"
            >
              <p className="hidden sm:block">New Chat</p>
              <div className="text-white text-lg block sm:hidden">
                <IoMdAddCircle />
              </div>
            </button>
          </Tooltip>
          <Tooltip content="Add a Bot">
            <button
              onClick={onOpen}
              variant="flat"
              className="text-white font-Poppins bg-opacity-100 bg-blue-500 font-medium text-xs sm:text-sm py-2 px-3 rounded-sm"
            >
              Add a Bot
            </button>
          </Tooltip>
        </NavbarItem>
        <Modal
          isOpen={isOpen}
          placement={"center"}
          onOpenChange={onOpenChange}
          size="lg"
          className="rounded-sm bg-[#111] pt-4 pb-8 px-8"
        >
          <ModalContent className="p-8">
            {(onClose) => (
              <div className="flex flex-col items-center justify-center gap-5">
                <div className="w-full">
                  <p className="mb-2 text-white text-xl font-bold">
                    Join a Chat Room:
                  </p>
                  <div className="flex flex-col gap-2 justify-center">
                    <Input
                      type="text"
                      variant={"underlined"}
                      placeholder="Chat Room Name"
                      radius="none"
                      color="white"
                      className="p-0 rounded-md outline-none focus:outline-none border-none focus:border-none text-white"
                    />
                    <Input
                      type="text"
                      variant={"underlined"}
                      placeholder="Chat Room ID"
                      radius="none"
                      color="white"
                      className="p-0 rounded-md outline-none focus:outline-none border-none focus:border-none text-white"
                    />
                    <Button
                      color="primary"
                      onPress={onClose}
                      className="rounded-md text-white"
                    >
                      Join
                    </Button>
                  </div>
                </div>
                <p className="text-white font-semibold text-lg">OR</p>
                <div className="w-full">
                  <p className="mb-2 text-white text-xl font-bold">
                    Create a Chat Room:
                  </p>
                  <div className="flex flex-col gap-2 justify-center">
                    <Input
                      type="text"
                      variant={"underlined"}
                      placeholder="Chat Room Name"
                      radius="none"
                      color="white"
                      className="p-0 rounded-md outline-none focus:outline-none border-none focus:border-none text-white"
                    />
                    <Button
                      color="primary"
                      onPress={onClose}
                      className="rounded-md text-white"
                    >
                      Create
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </ModalContent>
        </Modal>
      </NavbarContent>
    </Navbar>
  );
}
