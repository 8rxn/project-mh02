

function TextMessage({ message, name, time, me }) {
const isMe = name === me;
  return (
    <div
      className={`flex items-start gap-1 ${
        isMe ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`flex flex-col max-w-[300px] sm:max-w-[500px] leading-1.5 px-4 py-2 border-gray-200 rounded-b-xl ${
          isMe ? "rounded-l-xl bg-[#95A4FC]" : "rounded-r-xl bg-[#E5ECF6]"
        }`}
      >
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span
            className={`font-bold text-[14px] line-clamp-1 text-ellipsis ${
              isMe ? "text-white" : "text-gray-900"
            }`}
          >
            {name}
          </span>
          <span
            className={`text-[12px] font-normal ${
              isMe ? "text-gray-100" : "text-gray-700"
            }`}
          >
            {time}
          </span>
        </div>
        <p
          className={`flex overflow-x-scroll custom-scrollbar text-[14px] font-normal py-1 font-RobotoMono ${
            isMe ? "text-white" : "text-gray-900"
          }`}
        >
          {message}
        </p>
      </div>
    </div>
  );
}

export default TextMessage;
