import Image from "next/image";
import { FC } from "react";
import { useFormStatus } from "react-dom";

const SubmitButton: FC = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      aria-disabled={pending}
      disabled={pending}
      className="absolute end-2.5 top-1/2 transform -translate-y-1/2 focus:outline-none disabled:opacity-50"
    >
      <Image src="/send-btn.svg" width={28} height={28} alt="Send icon" />
    </button>
  );
};

export default SubmitButton;
