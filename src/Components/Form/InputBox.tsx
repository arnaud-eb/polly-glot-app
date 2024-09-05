import Image from "next/image";
import { FC } from "react";

// TODO: fix the focus style
const InputBox: FC = () => {
  return (
    <div className="flex rounded-xl border-2 border-solid bg-neutral-100 border-slate-500">
      <label htmlFor="translation-input" className="sr-only">
        Translation Input Field
      </label>
      <input
        type="text"
        id="translation-input"
        name="translation-input"
        className="block w-full pl-4 py-5 rounded-l-xl bg-neutral-100 text-xl font-semibold leading-7"
        placeholder="Where is Brian?"
        required
      />
      <button type="submit" className="rounded-r-xl pr-4">
        <Image src="/send-btn.svg" width={28} height={28} alt="Send icon" />
      </button>
    </div>
  );
};

export default InputBox;
