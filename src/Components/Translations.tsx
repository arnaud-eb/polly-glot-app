"use client";

import { FC, useEffect, useState } from "react";
import { useFormState } from "react-dom";

import TranslationBox from "@/Components/TranslationBox";
import InputBox from "@/Components/Form/InputBox";
import LanguageSelector from "@/Components/Form/LanguageSelector";

import { translate } from "@/utils/actions";
import { isEven } from "@/helpers/isEven";

const initialState = {
  original: "",
  translation: "",
};

const Translations: FC = () => {
  const [state, formAction] = useFormState(translate, initialState);
  const [messages, setMessages] = useState([
    "How are you?",
    "Comment allez-vous?",
  ]);
  console.log("state", state);

  useEffect(() => {
    if (
      state &&
      state.original &&
      typeof state.original === "string" &&
      state.translation &&
      state.translation === "string"
    )
      setMessages((prev) => prev.concat(state.original, state.translation));
  }, [state]);

  return (
    <>
      <div>
        {messages.map((message, index) => (
          <TranslationBox
            key={`${index}-${message.slice(0, 3).toLowerCase()}`}
            text={message}
            bgColor={isEven(index) ? "bg-green-400" : "bg-sky-700"}
            textColor={isEven(index) ? "text-zinc-800" : "text-white"}
          />
        ))}
      </div>
      <form action={formAction} className="flex flex-col justify-center">
        <InputBox />
        <LanguageSelector />
      </form>
    </>
  );
};

export default Translations;
