import Image from "next/image";

export const Testimonials = () => {
  return (
    <section className="px-[22px] lg:pt-32 lg:pb-[168px] py-20 lg:px-[200px]">
      <h2 className=" text-center text-[#E9EAEC] font-bold text-2xl leading-[120%] lg:text-[32px]">
        Quem utiliza, aprova!
      </h2>

      <div className="flex gap-6 flex-col pt-12 lg:flex-row">
        <div className="bg-[#14161A] border border-[#20242C] rounded-xl p-10 max-w-[471px]">
          <p className="italic leading-[150%] text-[#D3D5D9]">
            Criar minha loja com o site.set foi a melhor decisão para o meu
            negócio. A plataforma é super intuitiva, e consegui colocar meus
            produtos à venda em poucos minutos.
          </p>
          <div className="flex pt-10 gap-3">
            <div>
              <Image
                src={"/annete.png"}
                alt="Annete Bones"
                width={36}
                height={36}
              />
            </div>
            <div className="flex flex-col ">
              <h4 className="font-medium text-sm text-[#D3D5D9]">
                Annette Bones
              </h4>
              <p className="text-xs font-regular text-[#93979E]">
                CEO na Anne Corp
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#14161A] border border-[#20242C] rounded-xl p-10 max-w-[471px]">
          <p className="italic leading-[150%] text-[#D3D5D9]">
            Transformar minha ideia em uma loja online foi fácil e rápido.
            Adorei as opções de personalização e a simplicidade para gerenciar
            os pedidos. Já vejo meus produtos alcançando mais pessoas!
          </p>
          <div className="flex pt-10 gap-3">
            <div>
              <Image
                src={"/jacob-jones.png"}
                alt="Jacob Jones"
                width={36}
                height={36}
              />
            </div>
            <div className="flex flex-col ">
              <h4 className="font-medium text-sm text-[#D3D5D9]">
                Jacob Jones
              </h4>
              <p className="text-xs font-regular text-[#93979E]">
                CEO na JJ Org
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
