import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="flex overflow-hidden flex-col items-start px-16 pb-3.5 w-full text-5xl font-extrabold text-green-500 whitespace-nowrap bg-slate-900">
      <div className="flex overflow-hidden relative flex-col gap-4 items-start py-14 aspect-[1.513]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/21b1a9bf0641ff191435a0f6f1bebb694199e32d8d592027007167adb5c03a55?placeholderIfAbsent=true&apiKey=19056e648a914139b46aa81bc0f9b48a"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a4dd5448a2dece19bce8f435fe1024af00cee911ce1058e5ac184bebcdd8f7b?placeholderIfAbsent=true&apiKey=19056e648a914139b46aa81bc0f9b48a"
          alt="PollyGlot logo"
          className="object-contain shrink-0 aspect-[1.12] w-[95px]"
        />
        <h1 className="relative basis-auto">PollyGlot</h1>
      </div>
    </header>
  );
};

export default Header;
