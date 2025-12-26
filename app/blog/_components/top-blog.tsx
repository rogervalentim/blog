"use client";

import { useState } from "react";

export const TopBlog = () => {
  const [value, setValue] = useState("");

  return (
    <div className="px-[22px] lg:px-[200px] pb-6 lg:pb-14 pt-5 lg:pt-20">
      <div className="w-[59px] h-[27px] flex justify-center items-center bg-[#0E474C] rounded-sm">
        <p className="font-medium text-[12px] tracking-[5%] text-[#2DEBFC] uppercase">
          Blog
        </p>
      </div>

      <div className="mt-3 flex flex-col lg:flex-row gap-6 lg:gap-0 items-end justify-between">
        <h1 className="text-[28px] lg:text-[32px] max-w-[440px] pt-sans font-bold leading-[120%] text-[#E9EAEC] ">
          Dicas e estratégias para impulsionar seu negócio
        </h1>

        <div
          className="
        group
        w-full lg:w-60 h-10
        rounded-lg
        px-4
        flex items-center gap-3
        border border-[#20242C]
        focus-within:border-[#2266C1]
        focus-within:ring-1
        focus-within:ring-[#2266C1]
        transition-all duration-200 ease-out
      "
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="
          text-[#93979E]
          group-focus-within:text-[#2266C1]
          transition-colors duration-200
        "
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 1.33333C3.42267 1.33333 1.33333 3.42267 1.33333 6C1.33333 8.57733 3.42267 10.6667 6 10.6667C8.57733 10.6667 10.6667 8.57733 10.6667 6C10.6667 3.42267 8.57733 1.33333 6 1.33333ZM0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 7.41668 11.509 8.71868 10.6879 9.74512L13.1381 12.1953C13.3984 12.4556 13.3984 12.8777 13.1381 13.1381C12.8777 13.3984 12.4556 13.3984 12.1953 13.1381L9.74512 10.6879C8.71868 11.509 7.41668 12 6 12C2.68629 12 0 9.31371 0 6Z"
            />
          </svg>

          <input
            type="search"
            placeholder="Buscar"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            className="
          w-full
          bg-transparent
          focus:outline-none
          text-sm
          text-[#E9EAEC]
          placeholder:text-[#93979E]
        "
          />

          {value && (
            <button
              onClick={() => setValue("")}
              className="text-[#93979E] hover:text-[#2266C1] cursor-pointer transition"
              aria-label="Limpar busca"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3133_3737)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.00008 1.99996C4.68637 1.99996 2.00008 4.68625 2.00008 7.99996C2.00008 11.3137 4.68637 14 8.00008 14C11.3138 14 14.0001 11.3137 14.0001 7.99996C14.0001 4.68625 11.3138 1.99996 8.00008 1.99996ZM0.666748 7.99996C0.666748 3.94987 3.94999 0.666626 8.00008 0.666626C12.0502 0.666626 15.3334 3.94987 15.3334 7.99996C15.3334 12.05 12.0502 15.3333 8.00008 15.3333C3.94999 15.3333 0.666748 12.05 0.666748 7.99996ZM5.52868 5.52856C5.78903 5.26821 6.21114 5.26821 6.47149 5.52856L8.00008 7.05715L9.52868 5.52856C9.78903 5.26821 10.2111 5.26821 10.4715 5.52856C10.7318 5.7889 10.7318 6.21101 10.4715 6.47136L8.94289 7.99996L10.4715 9.52856C10.7318 9.7889 10.7318 10.211 10.4715 10.4714C10.2111 10.7317 9.78903 10.7317 9.52868 10.4714L8.00008 8.94277L6.47149 10.4714C6.21114 10.7317 5.78903 10.7317 5.52868 10.4714C5.26833 10.211 5.26833 9.7889 5.52868 9.52856L7.05727 7.99996L5.52868 6.47136C5.26833 6.21101 5.26833 5.7889 5.52868 5.52856Z"
                    fill="#93979E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3133_3737">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
