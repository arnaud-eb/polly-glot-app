import Image from "next/image";
import { FC } from "react";

const languageOptions = ["fr", "es", "jp"];

const LanguageSelector: FC = () => {
  return (
    <fieldset className="flex justify-between items-center self-center mt-5 max-w-full w-[230px]">
      <legend className="sr-only">Language selector</legend>
      {languageOptions.map((language, index) => (
        <label
          key={language}
          htmlFor={language}
          className="cursor-pointer has-[:checked]:shadow-[0px_4px_4px_rgba(0,0,0,0.25)] has-[:checked]:outline has-[:checked]:outline-2 has-[:checked]:outline-sky-700 aspect-[1.52] w-[50px] relative"
        >
          <input
            id={language}
            type="radio"
            name="language"
            value={language}
            className="hidden"
            defaultChecked={index === 0}
            required={index === 0}
          />
          <Image
            src={`/${language}-flag.png`}
            alt={language}
            sizes="25vw"
            fill={true}
          />
        </label>
      ))}
    </fieldset>
  );
};

export default LanguageSelector;
