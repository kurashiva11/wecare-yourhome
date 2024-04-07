import { cn } from "@/lib/utils";
import Image from "next/image"

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  name,
  price,
  description,
  header,
  image,
}: {
  className?: string;
  name?: string | React.ReactNode;
  price: number,
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  image: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <Image src={image} alt="Modern building architecture" className="h-48 w-full object-cover md:h-48 md:w-full rounded-xl" width={80} height={80} />
        <div style={{ flexDirection: 'row', justifyContent: 'space-between', display: 'flex' }} className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 w-full">
          <p>{name}</p><p>₹{price}</p>
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
