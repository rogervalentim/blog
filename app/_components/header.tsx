import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-full flex items-center h-20 lg:h-24 border-[#16181D] border-b-[1.5px]">
      <nav className="w-full flex justify-between items-center px-[22px] lg:px-[200px] relative">
        <Image
          src="/logo.png"
          alt="logo"
          width={40}
          height={41}
          className="lg:hidden"
        />

        <Link href="/">
          <Image
            src="/logo-big.png"
            alt="logo"
            width={115.61}
            height={32.31}
            className="hidden lg:block"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-[26px]">
          <li>
            <Link
              href="/"
              className="text-sm text-[#E9EAEC] font-medium hover:text-[#2C85FC]"
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-sm text-[#E9EAEC] font-medium hover:text-[#2C85FC]"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-[#0B0C0F] font-medium bg-[#E9EAEC] flex justify-center items-center w-[93px] h-9 rounded-[999px]  hover:bg-[#7EA4D7] trasition-all"
            >
              Começar
            </Link>
          </li>
        </ul>

        <label htmlFor="menu" className="lg:hidden flex gap-2 cursor-pointer">
          <a
            href="#"
            className="text-[#0B0C0F] font-medium bg-[#E9EAEC] flex justify-center items-center w-[93px] h-9 rounded-[999px] hover:bg-[#7EA4D7] trasition-all"
          >
            Começar
          </a>

          <div className="h-9 w-9 opacity-100 rounded-[999px] bg-[#20242C] flex justify-center items-center">
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 1C0 0.447715 0.447715 0 1 0H17C17.5523 0 18 0.447715 18 1C18 1.55228 17.5523 2 17 2H1C0.447715 2 0 1.55228 0 1ZM0 7C0 6.44772 0.447715 6 1 6H17C17.5523 6 18 6.44772 18 7C18 7.55228 17.5523 8 17 8H1C0.447715 8 0 7.55228 0 7ZM0 13C0 12.4477 0.447715 12 1 12H17C17.5523 12 18 12.4477 18 13C18 13.5523 17.5523 14 17 14H1C0.447715 14 0 13.5523 0 13Z"
                fill="#E9EAEC"
              />
            </svg>
          </div>
        </label>

        <input type="checkbox" id="menu" className="peer hidden" />

        <div className="peer-checked:flex hidden flex-col gap-4 bg-[#16181D] absolute z-10 right-[22px] top-20 w-[200px] p-4 rounded-xl border border-[#2a2d35] lg:hidden">
          <Link className="text-[#E9EAEC] hover:text-[#2C85FC]" href="/">
            Início
          </Link>
          <Link className="text-[#E9EAEC] hover:text-[#2C85FC]" href="/blog">
            Blog
          </Link>
        </div>
      </nav>
    </header>
  );
};
