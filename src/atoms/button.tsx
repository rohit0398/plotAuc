import { ReactNode } from 'react';

export function ButtonOutlined({ children }: { children: ReactNode }) {
  // className="hover:border-transparent hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-cyan via-blue to-pink
  return (
    <span className="group border-gradient relative inline-block overflow-hidden rounded-full">
      <button className=" rounded-full bg-black px-14 py-4.5 text-3xl text-white">
        {children}
      </button>
      <span className="absolute top-0 left-0 z-10 h-full w-full origin-left -translate-x-full  rounded-full bg-gradient-to-r from-cyan via-blue to-pink opacity-30 group-hover:animate-wiggle"></span>
    </span>
  );
}
