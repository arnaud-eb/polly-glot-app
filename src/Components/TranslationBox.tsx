import { FC } from "react";

interface TranslationBoxProps {
  text: string;
  bgColor: string;
  textColor?: string;
}

const TranslationBox: FC<TranslationBoxProps> = ({
  text,
  bgColor,
  textColor = "text-white",
}) => {
  return (
    <div
      className={`px-5 pt-3 pb-6 mb-7 w-full text-xl font-semibold leading-7 ${textColor} ${bgColor} rounded-xl text-center`}
    >
      {text}
    </div>
  );
};

export default TranslationBox;
