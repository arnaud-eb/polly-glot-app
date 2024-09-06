import { FC } from "react";
import SubmitButton from "./SubmitButton";

// TODO: fix autocomplete dropdown positioning
const InputBox: FC = () => {
  return (
    <div className="relative">
      <label htmlFor="translation-input" className="sr-only">
        Translation Input Field
      </label>
      <input
        type="text"
        id="translation-input"
        name="translation-input"
        className="block w-full pl-4 pr-10 py-5 text-xl font-semibold leading-7 rounded-xl border-2 border-solid bg-neutral-100 border-slate-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        placeholder="Where is Brian?"
        required
      />
      <SubmitButton />
    </div>
  );
};

export default InputBox;
