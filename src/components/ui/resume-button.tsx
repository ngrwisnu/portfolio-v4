import { ArrowDownToLine } from "lucide-react";
import LitUpButton from "./litUp-button";

const ResumeButton = () => {
  return (
    <div className="absolute top-5 right-11 hidden h-[80px] rounded-md md:flex">
      <LitUpButton link="#">
        <ArrowDownToLine size={18} />
        Download
      </LitUpButton>
    </div>
  );
};

export default ResumeButton;
