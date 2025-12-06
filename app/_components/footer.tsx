import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="px-[22px] lg:px-[200px] w-full py-[33px] bg-[#16181D] flex justify-between lg:items-center">
      <div>
        <Image src={"/logo-big.png"} alt="logo" width={115.61} height={32.31} />
      </div>
      <ul className="flex flex-col lg:flex-row items-center gap-3 lg:gap-8">
        <li>
          <a
            href="#"
            title="Termos de Uso"
            className="font-regular text-sm leading-[150%] text-[#7EA4D7]"
          >
            Termos de Uso
          </a>
        </li>
        <li>
          <a
            href="#"
            title="Politica de Privacidade"
            className="font-regular text-sm leading-[150%] text-[#7EA4D7]"
          >
            Politica de Privacidade
          </a>
        </li>
        <li>
          <a
            href="#"
            title="Enviar feedback"
            className="font-regular text-sm leading-[150%] text-[#7EA4D7]"
          >
            Enviar feedback
          </a>
        </li>
      </ul>
    </footer>
  );
};
