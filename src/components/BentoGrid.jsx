import cn from "../../util/cn";

export const BentoGrid = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 mx-auto px-2 pt-8 pb-20 bg-[#0b0b0b]",
        className
      )}
    >
      {children}
    </div>
  );
};

const Skeleton = ({children}) => (
  <div className="flex flex-1 justify-center items-center w-full h-full min-h-[6rem] rounded-xl bg-dot-white/[0.2]  border-none bg-black">{children}</div>
);

export const BentoGridItem = ({
  className,
  title,
  description,
  icon,
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-none p-4 bg-black border-white/[0.2] border justify-between flex flex-col space-y-4 font-RobotoMono",
        className
      )}
    >
      <Skeleton>{icon}</Skeleton>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-RobotoMono font-bold text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-RobotoMono font-normal text-xs text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
