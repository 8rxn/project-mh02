import {
  Tooltip,
  useDisclosure,
  Modal,
  ModalContent,
  Button,
  Input
} from "@nextui-org/react";
import { IoIosAddCircle } from "react-icons/io";

export default function BotCard() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="flex w-full justify-between items-center px-2 py-2 border-[1px] border-gray-700">
      <div className="flex gap-2 items-center">
        <img src="https://i.pravatar.cc/150?u=a04258114e29026702d" alt="bot" className="h-[30px] w-[30px] rounded-md"/>
        <p className="text-lg font-bold text-white">Lorem Ipsum Bot</p>
      </div>
      <Tooltip content="Add to Chat" className="cursor-pointer">
        <button
          onClick={onOpen}
          className="bg-transparent text-white text-xl w-fit p-0"
        >
          <IoIosAddCircle />
        </button>
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
                    Add To:
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
    </div>
  );
}
