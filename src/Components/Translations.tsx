"use client";

import { FC, useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";

import TranslationBox from "@/Components/TranslationBox";
import InputBox from "@/Components/Form/InputBox";
import LanguageSelector from "@/Components/Form/LanguageSelector";

import { translate } from "@/utils/actions";
import { isEven } from "@/helpers/isEven";

export const initialState = {
  original: "",
  translation: "",
};

const Translations: FC = () => {
  const [state, formAction] = useFormState(translate, initialState);
  const [messages, setMessages] = useState([
    "How are you?",
    "Comment allez-vous?",
  ]);
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  console.log("state", state);
  console.log("messages", messages);

  useEffect(() => {
    // TODO: show a toast component when translation failed
    if (state.original && state.translation) {
      setMessages((prev) => prev.concat(state.original, state.translation));
    }
    if (formRef.current) {
      formRef.current.reset();
    }

    if (containerRef.current) {
      // containerRef.current.scrollTop = containerRef.current.scrollHeight;
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [state]);

  return (
    <>
      <div ref={containerRef} className="overflow-y-auto h-48 mb-7">
        {messages.map((message, index) => (
          <TranslationBox
            key={`${index}-${message.slice(0, 3).toLowerCase()}`}
            text={message}
            className={`${
              isEven(index)
                ? "bg-green-400 text-zinc-800"
                : "bg-sky-700 text-white"
            } even:rounded-tr-none odd:rounded-tl-none`}
          />
        ))}
      </div>
      <form
        ref={formRef}
        action={formAction}
        className="flex flex-col justify-center"
      >
        <InputBox />
        <LanguageSelector />
      </form>
    </>
  );
};

export default Translations;
