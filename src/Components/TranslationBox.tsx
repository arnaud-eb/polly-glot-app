import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface TranslationBoxProps {
  text: string;
  className: string;
}

const TranslationBox: FC<TranslationBoxProps> = ({ text, className }) => {
  return (
    <div
      className={twMerge(
        "px-4 py-3 mb-7 w-full text-xl font-semibold leading-7 rounded-xl last:mb-0",
        className
      )}
    >
      {text}
    </div>
  );
};

export default TranslationBox;
