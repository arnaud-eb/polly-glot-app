import Form from "@/Components/Form/Form";
import Header from "@/Components/Header";
import TranslationBox from "@/Components/TranslationBox";
import Translations from "@/Components/Translations";

export default function PollyGlot() {
  return (
    <main className="flex flex-col pb-8 bg-white max-w-[390px]">
      <Header />
      <div className="flex flex-col self-center px-6 py-5 mt-8 w-full bg-white rounded-2xl border-4 border-solid border-slate-800 max-w-[362px]">
        <TranslationBox
          text="Select the language you want me to translate into, type your text and hit send!"
          bgColor="bg-sky-700"
        />
        <Translations />
        <Form />
      </div>
    </main>
  );
}
