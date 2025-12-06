export const About = () => {
  return (
    <section className="px-[22px] lg:px-[200px] py-10 lg:py-20 w-full">
      <div className="flex flex-col gap-6">
        <div className="flex gap-6 flex-col lg:flex-row">
          <div className="w-full  p-6 lg:p-12 bg-[#16181D] rounded-xl">
            <div className="w-[79px] h-[27px] rounded-sm bg-[#0D284C] flex justify-center items-center">
              <p className="text-xs font-medium text-[#2C85FC] uppercase">
                simples
              </p>
            </div>
            <h3 className="text-[#E9EAEC] font-pt-sans lg:max-w-[375px] mt-4 text-[20px] leading-[120%] font-bold lg:text-[28px]">
              Crie um catálogo de produtos online em poucos minutos
            </h3>
          </div>
          <div className="w-full  p-6 lg:p-12 bg-[#16181D] rounded-xl">
            <div className="w-[79px] h-[27px] rounded-sm bg-[#0D284C] flex justify-center items-center">
              <p className="text-xs font-medium text-[#2C85FC] uppercase">
                prático
              </p>
            </div>
            <h3 className="text-[#E9EAEC] font-pt-sans lg:max-w-[375px] mt-4 text-[20px] leading-[120%] font-bold lg:text-[28px]">
              Venda para seu público através de uma plataforma única
            </h3>
          </div>
        </div>
        <div className="w-full rounded-xl bg-[#16181D] flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between items-center p-6 lg:p-12">
          <div className="flex lg:gap-[142px] flex-col">
            <div className="flex flex-col gap-4">
              <div className="w-[137px] h-[27px] rounded-sm bg-[#0D284C] flex justify-center items-center">
                <p className="text-xs font-medium text-[#2C85FC] uppercase">
                  personalizável
                </p>
              </div>

              <h3 className="text-[#E9EAEC] font-pt-sans max-w-[310px] lg:max-w-[342px]  text-[20px] leading-[120%] font-bold lg:text-[28px]">
                Tenha uma loja online personalizada com a cara da sua marca
              </h3>
            </div>

            <a
              href="#"
              className="hidden lg:flex w-[188px] h-11 rounded-[999px] opacity-100 bg-[#2266C1] transition-all hover:bg-[#2C85FC] font-medium text-white  justify-center items-center gap-2"
            >
              Criar loja grátis
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.2929 4.29292C11.6834 3.9024 12.3166 3.9024 12.7071 4.29292L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L12.7071 19.7071C12.3166 20.0977 11.6834 20.0977 11.2929 19.7071C10.9024 19.3166 10.9024 18.6834 11.2929 18.2929L16.5858 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H16.5858L11.2929 5.70714C10.9024 5.31661 10.9024 4.68345 11.2929 4.29292Z"
                  fill="#E9EAEC"
                />
              </svg>
            </a>
          </div>
          <div className="flex gap-[17.79px] lg:gap-6">
            <div className="flex flex-col gap-3.5 lg:gap-[18px]">
              <div className="w-full lg:w-[132px] bg-[#20242C] pt-[21px] pb-3 lg:pb-[17px] pl-3.5 lg:pl-5 rounded-[5px]">
                <div className="h-8 w-8 rounded-full bg-[#0E474C] flex items-center justify-center">
                  <svg
                    width="17"
                    height="18"
                    viewBox="0 0 17 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.81093 17V9H10.6219V17M1 6.6L8.2164 1L15.4328 6.6V15.4C15.4328 15.8243 15.2638 16.2313 14.9631 16.5314C14.6624 16.8314 14.2545 17 13.8292 17H2.60364C2.17833 17 1.77044 16.8314 1.4697 16.5314C1.16895 16.2313 1 15.8243 1 15.4V6.6Z"
                      stroke="#2DEBFC"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-start gap-1 mt-[19px] lg:mt-[27px]">
                  <div className="w-[29.66px] h-2.5 lg:w-[42px] lg:h-[15px] rounded-lg bg-[#93979E] opacity-10"></div>
                  <div className="w-[61.44px] h-2.5 lg:w-[87px] lg:h-[15px] rounded-lg bg-[#93979E] opacity-10"></div>
                </div>
              </div>
              <div className="w-full lg:w-[132px] bg-[#20242C] pt-[21px] pr-3.5 pb-3 lg:pb-[17px] pl-3.5 lg:pl-5 rounded-[5px]">
                <div className="h-8 w-8 rounded-full bg-[#0E474C] flex items-center justify-center">
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.631 14.6C14.631 15.2365 14.3775 15.847 13.9264 16.2971C13.4753 16.7471 12.8635 17 12.2255 17C11.5875 17 10.9757 16.7471 10.5246 16.2971C10.0735 15.847 9.82005 15.2365 9.82005 14.6V9M18.6401 9C18.4307 6.81086 17.4109 4.7782 15.78 3.29893C14.1491 1.81966 12.0241 1 9.82005 1C7.61594 1 5.49098 1.81966 3.86007 3.29893C2.22917 4.7782 1.20944 6.81086 1 9H18.6401Z"
                      stroke="#2DEBFC"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-1 mt-[19px] lg:mt-[27px]">
                  <div className="w-[29.66px] h-2.5 lg:w-[42px] lg:h-[15px] rounded-lg bg-[#93979E] opacity-10"></div>
                  <div className="w-[61.44px] h-2.5 lg:w-[87px] lg:h-[15px] rounded-lg bg-[#93979E] opacity-10"></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full lg:w-[283px] h-full mt-[19px] lg:mt-7">
              <div className="w-full h-[174px] bg-[#292E38] rounded-t-[5px] flex justify-center items-center">
                <div className="h-20 w-20 flex justify-center items-center rounded-[100px] bg-[#187D86]">
                  <svg
                    width="32"
                    height="34"
                    viewBox="0 0 32 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5 7.7L6.33333 1.5H25.6667L30.5 7.7M1.5 7.7V29.4C1.5 30.2222 1.83948 31.0107 2.44377 31.592C3.04805 32.1734 3.86764 32.5 4.72222 32.5H27.2778C28.1324 32.5 28.9519 32.1734 29.5562 31.592C30.1605 31.0107 30.5 30.2222 30.5 29.4V7.7M1.5 7.7H30.5M22.4444 13.9C22.4444 15.5443 21.7655 17.1213 20.5569 18.2841C19.3483 19.4468 17.7092 20.1 16 20.1C14.2908 20.1 12.6517 19.4468 11.4431 18.2841C10.2345 17.1213 9.55556 15.5443 9.55556 13.9"
                      stroke="#E9EAEC"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-full lg:w-[283px] bg-[#20242C] rounded-b-[5px] pt-[13px] pl-[18px] pb-[18px] lg:pt-[19px] lg:pb-[26px] lg:pl-[26px]">
                <div className="flex gap-1.5">
                  <div className="h-3.5 w-3.5 lg:h-5 lg:w-5 bg-[#93979E] opacity-10 rounded-[100px]"></div>
                  <div className="h-3.5 w-[126px] lg:h-5 lg:w-[180px] rounded-lg opacity-10 bg-[#93979E]"></div>
                </div>

                <div className="flex flex-col gap-1 mt-[18px] lg:mt-[26px]">
                  <div className="h-2.5 w-[102px] lg:h-[15px] lg:w-[146px] rounded-[5.64px] opacity-10 bg-[#93979E]"></div>
                  <div className="h-2.5 w-[61px] lg:h-[15px] lg:w-[87px] rounded-[5.64px] opacity-10 bg-[#93979E]"></div>
                </div>
              </div>
            </div>
          </div>
          <a
            href="#"
            className="flex md:w-[188px] lg:hidden w-full h-11 rounded-[999px] opacity-100 bg-[#2266C1] transition-all hover:bg-[#2C85FC] font-medium text-white  justify-center items-center gap-2"
          >
            Criar loja grátis
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.2929 4.29292C11.6834 3.9024 12.3166 3.9024 12.7071 4.29292L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L12.7071 19.7071C12.3166 20.0977 11.6834 20.0977 11.2929 19.7071C10.9024 19.3166 10.9024 18.6834 11.2929 18.2929L16.5858 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H16.5858L11.2929 5.70714C10.9024 5.31661 10.9024 4.68345 11.2929 4.29292Z"
                fill="#E9EAEC"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
