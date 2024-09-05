"use client";

import { FC } from "react";
import InputBox from "./InputBox";
import LanguageSelector from "./LanguageSelector";
import { useFormState } from "react-dom";
import { translate } from "@/utils/actions";

const Form: FC = () => {
  const [state, formAction] = useFormState(translate, "");
  console.log("state", state);

  return (
    <form action={formAction} className="flex flex-col justify-center">
      <InputBox />
      <LanguageSelector />
    </form>
  );
};

export default Form;
