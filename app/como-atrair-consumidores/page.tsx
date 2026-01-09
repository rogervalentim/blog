import Link from "next/link";
import { Cta } from "../_components/cta";
import { Footer } from "../_components/footer";
import { Header } from "../_components/header";
import Image from "next/image";
import { Links } from "../_components/links";
import { LinksMobile } from "../_components/links-mobile";
import { CardArticle } from "../blog/_components/card-article";

export default function ComoAtrairConsumidores() {
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
              Como atrair consumidores
            </li>
          </ul>

          <LinksMobile />
        </div>

        <div className="flex gap-[23.5px]">
          <article className="rounded-xl bg-[#14161A] border border-[#20242C] w-full  opacity-100">
            <Image
              src={"/blog/big/como-atrair-consumidores.png"}
              alt="Como atrair consumidores"
              width={719}
              height={264}
              className="h-auto w-full rounded-t-xl"
            />

            <div className="px-6 lg:px-16 pt-12 pb-16">
              <h2 className="pt-sans font-bold text-2xl lg:text-[32px] text-[#E9EAEC]">
                Como atrair consumidores
              </h2>

              <div className="flex gap-3 items-center pt-8">
                <div>
                  <Image
                    src={"/aspen-dokidis.png"}
                    alt={"Aspen Dokidis"}
                    height={36}
                    width={36}
                    className="h-9 w-9"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="font-regular text-sm text-[#D3D5D9]">
                    Aspen Dokidis
                  </h3>
                  <p className="text-xs font-regular text-[#93979E]">
                    Publicado em 24/09/24
                  </p>
                </div>
              </div>

              <div className="pt-12 flex flex-col gap-8">
                <p className="text-sm font-regular text-[#D3D5D9]">
                  Atrair consumidores vai muito além de apenas ter um produto de
                  qualidade — é sobre criar conexão, confiança e uma experiência
                  memorável. Em um mercado cada vez mais competitivo, marcas que
                  se destacam são aquelas que entendem o comportamento do seu
                  público e entregam valor em cada interação.
                </p>

                <p className="text-sm font-regular text-[#D3D5D9]">
                  O primeiro passo é marcar presença onde seus clientes estão.
                  Um site bem estruturado, rápido e responsivo transmite
                  profissionalismo e aumenta a credibilidade da sua marca. Além
                  disso, conteúdos relevantes ajudam a educar o consumidor,
                  posicionando sua empresa como autoridade no segmento.
                </p>

                <p className="text-sm font-regular text-[#D3D5D9]">
                  Outro ponto essencial é a experiência do usuário. Navegação
                  simples, informações claras e um processo de compra sem
                  fricções fazem toda a diferença na decisão final. Quando o
                  consumidor encontra facilidade e confiança, as chances de
                  conversão aumentam significativamente.
                </p>
                <p className="text-sm font-regular text-[#D3D5D9]">
                  Confira algumas estratégias que ajudam a atrair mais
                  consumidores:
                </p>

                <ul className="list-disc flex flex-col gap-0.5 ml-5">
                  <li className="text-[#D3D5D9] font-regular text-sm">
                    <strong>Conteúdo de valor:</strong> Produza materiais que
                    solucionem dúvidas e dores do seu público.
                  </li>
                  <li className="text-[#D3D5D9] font-regular text-sm">
                    <strong>Identidade visual consistente:</strong>
                    Uma marca visualmente forte gera reconhecimento e confiança.
                  </li>
                  <li className="text-[#D3D5D9] font-regular text-sm">
                    <strong>SEO bem aplicado:</strong> Estar bem posicionado nos
                    mecanismos de busca aumenta o alcance orgânico.
                  </li>
                  <li className="text-[#D3D5D9] font-regular text-sm">
                    <strong>Provas sociais:</strong> Depoimentos e avaliações
                    reforçam a credibilidade do seu negócio.
                  </li>
                  <li className="text-[#D3D5D9] font-regular text-sm">
                    <strong>Relacionamento contínuo:</strong> Comunicação
                    próxima e personalizada cria fidelização.
                  </li>
                </ul>

                <p className="text-sm font-regular text-[#D3D5D9]">
                  Ao aplicar essas estratégias de forma consistente, sua marca
                  se torna mais atrativa e relevante para o público certo.
                  Atrair consumidores é um processo contínuo, que começa com
                  visibilidade e se fortalece com boas experiências.
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
            <Link href="/crie-sua-loja-e-comece-a-vender">
              <CardArticle
                src="/blog/thumb/crie-sua-loja-e-comece-a-vender.png"
                date="05/11/24"
                title="Crie sua loja e comece a vender"
                description="a criação de um e-commerce não precisa ser difícil. Desde o cadastro de produtos até o design da sua página, nossa plataforma oferece tudo o que você precisa para começar a vender de forma simples e prática."
                peopleImage="/aspen-dokidis.png"
                peopleName="Aspen Dokidis"
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
