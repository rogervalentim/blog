import Link from "next/link";
import { Cta } from "../_components/cta";
import { Footer } from "../_components/footer";
import { Header } from "../_components/header";
import Image from "next/image";
import { Links } from "../_components/links";
import { LinksMobile } from "../_components/links-mobile";
import { CardArticle } from "../blog/_components/card-article";

export default function AsVantagensDeTerUmaLojaOnline() {
  return (
    <>
      <Header />
      <section className="px-[22px] lg:px-[200px] pb-[136px]">
        <div className="flex flex-wrap gap-3 justify-between items-center pt-12 pb-8">
          <ul className="flex flex-wrap items-center gap-2 ">
            <li className="text-sm text-[#E9EAEC] font-medium">
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <div>
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.195262 0.195262C0.455612 -0.0650874 0.877722 -0.0650874 1.13807 0.195262L5.13807 4.19526C5.39842 4.45561 5.39842 4.87772 5.13807 5.13807L1.13807 9.13807C0.877722 9.39842 0.455612 9.39842 0.195262 9.13807C-0.0650874 8.87772 -0.0650874 8.45561 0.195262 8.19526L3.72386 4.66667L0.195262 1.13807C-0.0650874 0.877722 -0.0650874 0.455612 0.195262 0.195262Z"
                    fill="#93979E"
                  />
                </svg>
              </div>
            </li>
            <li className="text-sm text-[#2C85FC] font-medium">
              As vantagens de ter uma loja online
            </li>
          </ul>

          <LinksMobile />
        </div>

        <div className="flex gap-[23.5px]">
          <article className="rounded-xl bg-[#14161A] border border-[#20242C] w-full max-w-[718px] opacity-100">
            <Image
              src={"/blog/big/as-vantagens-de-ter-uma-loja-online.png"}
              alt="As vantagens de ter uma loja online"
              width={719}
              height={264}
              className="h-auto w-full rounded-t-xl"
            />

            <div className="px-6 lg:px-16 pt-12 pb-16">
              <h2 className="pt-sans font-bold text-2xl lg:text-[32px] text-[#E9EAEC]">
                As vantagens de ter uma loja online
              </h2>

              <div className="flex gap-3 items-center pt-8">
                <div>
                  <Image
                    src={"/cristofer-carder.png"}
                    alt={"Cristofer Carder"}
                    height={36}
                    width={36}
                    className="h-9 w-9"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="font-regular text-sm text-[#D3D5D9]">
                    Cristofer Carder
                  </h3>
                  <p className="text-xs font-regular text-[#93979E]">
                    Publicado em 2/10/24
                  </p>
                </div>
              </div>

              <div className="pt-12 flex flex-col gap-8">
                <p className="text-sm font-regular text-[#D3D5D9]">
                  Ter uma loja online é a forma mais prática de ampliar seu
                  alcance e vender para clientes em qualquer lugar, a qualquer
                  hora. Diferente de uma loja física, seu negócio permanece
                  aberto 24 horas por dia, aumentando suas oportunidades de
                  venda.
                </p>

                <p className="text-sm font-regular text-[#D3D5D9]">
                  Com uma loja virtual, você reduz custos operacionais, organiza
                  seus produtos com facilidade e gerencia pedidos de forma
                  simples e eficiente. Tudo em um só lugar, com total controle
                  do seu negócio.
                </p>

                <p className="text-sm font-regular text-[#D3D5D9]">
                  Além disso, uma presença online fortalece sua marca, melhora
                  sua visibilidade nos mecanismos de busca e oferece uma
                  experiência de compra moderna, rápida e segura para seus
                  clientes.
                </p>

                <p className="text-sm font-regular text-[#D3D5D9]">
                  Com o Site.Set, você aproveita todas essas vantagens de forma
                  simples e acessível, criando uma loja profissional pronta para
                  crescer junto com o seu negócio.
                </p>
              </div>
            </div>
          </article>
          <Links />
        </div>
        <div className="pt-8">
          <h2 className="pt-sans font-bold text-2xl lg:text-[32px] text-[#E9EAEC]">
            Você também pode gostar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 pt-14 pb-[136px]">
            <Link href="/5-motivos-para-escolher-o-site-set">
              <CardArticle
                src="/blog/thumb/5-motivos-para-escolher-o-site-set.png"
                date="10/11/24"
                title="5 motivos para escolher o Site.Set"
                description="O Site.Set oferece tudo o que você precisa para criar uma loja online eficiente e personalizada. Desde a integração com sistemas de pagamento até a criação de páginas de vendas, veja por que milhares de empreendedores escolhem nossa plataforma."
                peopleImage="/dulce-westervelt.png"
                peopleName="Dulce Westervelt"
              />
            </Link>
            <Link href="/como-atrair-consumidores">
              <CardArticle
                src="/blog/thumb/como-atrair-consumidores.png"
                date="24/09/24"
                title="Como atrair consumidores"
                description="Atrair consumidores para sua loja online é uma das chaves para o sucesso no e-commerce. Para conquistar novos clientes, é essencial adotar estratégias eficazes de marketing e criar uma experiência de compra que os faça voltar. Aqui estão algumas dicas para aumentar o tráfego e a conversão na sua loja:"
                peopleImage="/aspen-dokidis.png"
                peopleName="Aspen Dokidis"
              />
            </Link>
            <Link href="/a-jornada-do-empreendedorismo">
              <CardArticle
                src="/blog/thumb/a-jornada-do-empreendedorismo.png"
                date="01/12/24"
                title="A jornada do empreendedorismo"
                description="Empreendedores de todos os tamanhos confiam no Site.Set para lançar e gerenciar suas lojas online com facilidade. Descubra como nossa plataforma simplifica o processo de construção de sites e acelera o crescimento do seu negócio."
                peopleImage="/martin-geidt.png"
                peopleName="Martin Geidt"
              />
            </Link>
          </div>
        </div>
      </section>
      <Cta />
      <Footer />
    </>
  );
}
