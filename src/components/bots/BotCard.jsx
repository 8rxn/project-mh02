import {
  Tooltip,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@nextui-org/react";
import { FaRobot } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import TextMessage from "../messages/TextMessage";
import { useEffect, useState } from "react";

import { dryrun } from "@permaweb/aoconnect/browser";

export default function BotCard() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const process = "Rz6llKMi_m_NPdCtUR1oeI-TXmpCsUbvXsQhjyyEWDc";

  const [bots, setBots] = useState([]);

  useEffect(() => {
    async function fetchBots() {
      const rz = await dryrun({
        process,
        tags: [
          {
            name: "Target",
            value: process,
          },
          { name: "Action", value: "GetBots" },
        ],
      });

      const jsonString = rz.Messages[0].Tags.filter((t) => t.name == "Data")[0]
        .value;
      const botJson = jsonString
        .replace(/"([^"]+)":/g, '"$1":')
        .replace(/:"([^"]+)"/g, ':"$1"');
      setBots(botJson);
    }

    fetchBots();
  }, []);

  console.log(bots);

  return (
    <div
      className="flex w-full justify-between items-center px-2 py-2 border-[1px] border-gray-700 cursor-pointer hover:bg-gray-900"
      onClick={onOpen}
    >
      <div className="flex gap-3 items-center">
        <p className="text-xl text-white">
          <FaRobot />
        </p>
        <div className="flex flex-col items-start">
          <p className="text-md font-bold text-white">Lorem Ipsum Bot</p>
          <p className="text-sm font-bold text-gray-400">@loremipsum</p>
        </div>
      </div>
      <Tooltip content="Know More" className="cursor-pointer">
        <button
          onClick={onOpen}
          className="bg-transparent text-white text-xl w-fit p-0"
        >
          <FaCircleInfo />
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
              <ModalHeader className="flex flex-col">
                <p className="text-xl font-bold text-white">Lorem Ipsum Bot</p>
                <p className="text-md font-regular text-gray-400">
                  @loremipsum
                </p>
              </ModalHeader>
              <ModalBody className="text-white">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <div className="bg-slate-800 pt-2 pb-4 px-4 rounded-md">
                  <p className="font-bold text-lg mb-4">Example:</p>
                  <TextMessage
                    message={"Mumbaiche havamana kasa aahe?"}
                    name={"User"}
                    time={"12:00"}
                  />
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
