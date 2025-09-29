import { type ReactNode } from "react";

interface LitUpButtonProps {
  children: ReactNode;
  link: string;
}

const LitUpButton = ({ children, link }: LitUpButtonProps) => {
  return (
    <a
      href={link}
      className="relative p-[2px] hover:cursor-pointer"
      download="CV-Ngr-Wisnu-Adiprayogo"
    >
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
      <div className="group relative flex h-full w-full items-center justify-center gap-1 rounded-[6px] bg-black px-8 py-2 text-sm font-medium text-white transition duration-200 hover:bg-transparent">
        {children}
      </div>
    </a>
  );
};

export default LitUpButton;
