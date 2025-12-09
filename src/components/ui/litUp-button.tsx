interface LitUpButtonProps {
  text: string;
  icon?: any;
  position?: "right" | "left";
  link: string;
}

const LitUpButton = ({
  text,
  icon,
  position = "left",
  link,
}: LitUpButtonProps) => {
  return (
    <a href={link} className="relative p-[3px]">
      <div className="absolute inset-0 rounded-lg bg-linear-to-r from-indigo-500 to-purple-500" />
      <div className="group relative flex h-full w-full items-center justify-center gap-1 rounded-[6px] bg-black px-8 py-2 text-sm font-medium text-white transition duration-200 hover:bg-transparent">
        {position === "left" && icon}
        {text}
        {position === "right" && icon}
      </div>
    </a>
  );
};

export default LitUpButton;
