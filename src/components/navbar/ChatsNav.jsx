"use client";
import React, { useState } from "react";
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
import { FaCircleInfo } from "react-icons/fa6";

export default function ChatsNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isBotOpen,
    onOpen: onBotOpen,
    onOpenChange: onBotOpenChange,
  } = useDisclosure();

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      justify={"center"}
      className="bg-[#ffffff] bg-opacity-5 backdrop-blur-md text-white border-[1px] border-gray-600 max-w-full mx-auto rounded-md shadow-lg"
    >
      <NavbarContent>
        <NavbarBrand>
          <a
            className="flex justify-center items-center gap-2 font-RobotoMono text-md sm:text-2xl"
            href="/"
          >
            <img src="/logo.png" alt="logo" className="w-[30px]" />
            <p>WeaveChat</p>
          </a>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="flex gap-2">
          <Tooltip content="Join/Create a Chat" className="font-RobotoMono">
            <button
              onClick={onOpen}
              variant="flat"
              className="text-white font-RobotoMono bg-opacity-100 bg-blue-500 font-medium text-xs sm:text-sm py-2 px-3 rounded-sm"
            >
              <p className="hidden sm:block">New Chat</p>
              <div className="text-white text-lg block sm:hidden">
                <IoMdAddCircle />
              </div>
            </button>
          </Tooltip>
          <Tooltip content="Add a Bot" className="font-RobotoMono">
            <button
              onClick={onBotOpen}
              variant="flat"
              className="text-white font-RobotoMono bg-opacity-100 bg-blue-500 font-medium text-xs sm:text-sm py-2 px-3 rounded-sm"
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
                  <p className="mb-2 text-white text-xl font-RobotoMono">
                    Join a Chat Room:
                  </p>
                  <div className="flex flex-col gap-2 justify-center">
                    <Input
                      type="text"
                      variant={"underlined"}
                      placeholder="Chat Room Name"
                      radius="none"
                      color="white"
                      className="p-0 rounded-md outline-none focus:outline-none border-none focus:border-none text-white font-RobotoMono"
                    />
                    <Input
                      type="text"
                      variant={"underlined"}
                      placeholder="Chat Room ID"
                      radius="none"
                      color="white"
                      className="p-0 rounded-md outline-none focus:outline-none border-none focus:border-none text-white font-RobotoMono"
                    />
                    <Button
                      color="primary"
                      onPress={onClose}
                      className="rounded-md text-white font-RobotoMono"
                    >
                      Join
                    </Button>
                  </div>
                </div>
                <p className="text-white font-RobotoMono text-lg">OR</p>
                <div className="w-full">
                  <p className="mb-2 text-white text-xl font-RobotoMono">
                    Create a Chat Room:
                  </p>
                  <div className="flex flex-col gap-2 justify-center">
                    <Input
                      type="text"
                      variant={"underlined"}
                      placeholder="Chat Room Name"
                      radius="none"
                      color="white"
                      className="p-0 rounded-md outline-none focus:outline-none border-none focus:border-none text-white font-RobotoMono"
                    />
                    <Button
                      color="primary"
                      onPress={onClose}
                      className="rounded-md text-white font-RobotoMono"
                    >
                      Create
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </ModalContent>
        </Modal>
        <Modal
          isOpen={isBotOpen}
          placement={"center"}
          onOpenChange={onBotOpenChange}
          size="lg"
          className="rounded-sm bg-[#111] pt-4 pb-8 px-8"
        >
          <ModalContent className="p-8">
            {(onClose) => (
              <div className="flex flex-col items-center justify-center gap-5">
                <div className="w-full">
                  <p className="mb-2 text-white text-xl font-RobotoMono">
                    Add Your Own Bot:
                  </p>
                  <div className="flex flex-col gap-2 justify-center">
                    <Input
                      type="text"
                      variant={"underlined"}
                      placeholder="Bot Name"
                      radius="none"
                      color="white"
                      className="p-0 rounded-md outline-none focus:outline-none border-none focus:border-none text-white font-RobotoMono"
                    />
                    <Input
                      type="text"
                      variant={"underlined"}
                      placeholder="Bot Description"
                      radius="none"
                      color="white"
                      className="p-0 rounded-md outline-none focus:outline-none border-none focus:border-none text-white font-RobotoMono"
                    />
                    <Input
                      type="text"
                      variant={"underlined"}
                      placeholder="Sample Question"
                      radius="none"
                      color="white"
                      className="p-0 rounded-md outline-none focus:outline-none border-none focus:border-none text-white font-RobotoMono"
                    />
                    <div className="w-full flex items-center justify-center">
                      <label
                        htmlFor="upload-json"
                        className="bg-slate-700 bg-opacity-30 w-full h-[150px] flex flex-col items-center justify-center gap-2 text-center hover:bg-slate-800  rounded cursor-pointer"
                      >
                        <p className="text-3xl text-gray-400">
                          <IoMdAddCircle />
                        </p>
                        <p className="text-sm text-white font-RobotoMono">
                          Upload JSoN
                        </p>
                      </label>
                      <input
                        id="upload-json"
                        type="file"
                        className="hidden"
                        accept=".json"
                        onChange={handleFileChange}
                      />
                      {selectedFile && (
                        <p className="ml-3">{selectedFile.name} selected</p>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        color="secondary"
                        onPress={onClose}
                        className="text-white rounded-md w-full font-RobotoMono"
                      >
                        View Sample Json
                      </Button>
                      <Button
                        color="primary"
                        onPress={onClose}
                        className="rounded-md text-white w-full font-RobotoMono"
                      >
                        Create
                      </Button>
                    </div>
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
