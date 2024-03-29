"use client";
import { useEffect } from "react";
import WeaveDB from "weavedb-sdk";

const page = () => {
  const db = new WeaveDB({ contractTxId: "d75ywp8smpqpror7i5n00twi-0.28.0" });
  useEffect(() => {
    async function init() {
      await db.init();
    }
    init();
  }, []);

  async function addData() {
    // /**
    //  * @param {Object} personData - JSON data for the new document
    //  * @param {string} collection_name - The collection where the document will be added
    //  */
    // const personData = { name: "Bob", age: 20 };
    // const tx = await db.add(personData, 'chatRooms');
    // console.log(tx);
    // const result = await db.get('chatRooms')
    // console.log(result);

    // const result = await db.add({ name: "Bob", age: 20 }, "people", identity);

    // console.log(result);

    // await db.add({ age: 20, name: "Bob" }, 'activeChats').then(console.log).catch(console.error);
    await db.get('activeChat', 'DIf3hBBaJEaDlmljqgKue5JfXnySwr2vq0CdPnmMuIU').then
    (console.log).catch(console.error);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 text-white">
      Hey
      <button className="" onClick={addData}>
        Add
      </button>
    </main>
  );
};

export default page;
