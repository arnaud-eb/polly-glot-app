import { FC } from "react";
import TranslationBox from "./TranslationBox";

const Translations: FC = () => {
  return (
    <div>
      <TranslationBox
        text="How are you?"
        bgColor="bg-green-400"
        textColor="text-zinc-800"
      />
      <TranslationBox text="Comment allez-vous?" bgColor="bg-sky-700" />
    </div>
  );
};

export default Translations;
