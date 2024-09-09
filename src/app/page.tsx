import Header from "@/Components/Header";
import TranslationBox from "@/Components/TranslationBox";
import Translations from "@/Components/Translations";

// TODO: make the app responsive
export default function PollyGlot() {
  return (
    <main className="flex flex-col pb-8 max-w-[390px]">
      <Header />
      <div className="flex flex-col self-center px-6 py-5 mt-8 mx-4 rounded-2xl border-4 border-solid border-slate-800 max-w-[362px]">
        <TranslationBox
          text="Select the language you want me to translate into, type your text and hit send!"
          className="bg-sky-700 text-white rounded-tr-none"
        />
        <Translations />
      </div>
    </main>
  );
}
