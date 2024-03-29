import React from 'react'

export default function Chat({chatroom, chatId}) {
  return (
    <div className='px-3 py-3 border-b-[1px] border-gray-700 bg-black hover:bg-[#101010] cursor-pointer'>
        <p className='text-white text-lg font-bold'>{chatroom}</p>
        <p className='text-gray-300 text-sm'>{chatId}</p>
    </div>
  )
}
