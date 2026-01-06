import Link from "next/link";
import { Cta } from "../_components/cta";
import { Footer } from "../_components/footer";
import { Header } from "../_components/header";
import Image from "next/image";
import { Links } from "../_components/links";
import { LinksMobile } from "../_components/links-mobile";
import { CardArticle } from "../blog/_components/card-article";

export default function MotivosParaEscolherOSiteSet() {
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
              5 motivos para escolher o Site.Set
            </li>
          </ul>

          <LinksMobile />
        </div>

        <div className="flex gap-[23.5px]">
          <article className="rounded-xl bg-[#14161A] border border-[#20242C] w-full max-w-[718px] opacity-100">
            <Image
              src={"/blog/big/5-motivos-para-escolher-o-site-set.png"}
              alt="5 motivos para escolher o Site.Set"
              width={719}
              height={264}
              className="h-auto w-full rounded-t-xl"
            />

            <div className="px-6 lg:px-16 pt-12 pb-16">
              <h2 className="pt-sans font-bold text-2xl lg:text-[32px] text-[#E9EAEC]">
                5 motivos para escolher o Site.Set
              </h2>

              <div className="flex gap-3 items-center pt-8">
                <div>
                  <Image
                    src={"/dulce-westervelt.png"}
                    alt={"Dulce Westervelt"}
                    height={36}
                    width={36}
                    className="h-9 w-9"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="font-regular text-sm text-[#D3D5D9]">
                    Dulce Westervelt
                  </h3>
                  <p className="text-xs font-regular text-[#93979E]">
                    Publicado em 10/11/24
                  </p>
                </div>
              </div>

              <div className="pt-12 flex flex-col gap-8">
                <p className="text-sm font-regular text-[#D3D5D9]">
                  Entrar no mundo do e-commerce pode parecer desafiador, mas com
                  a ferramenta certa, tudo se torna mais simples. O Site.Set foi
                  desenvolvido para ajudar empreendedores a criarem lojas
                  virtuais modernas, funcionais e prontas para vender, mesmo sem
                  experiência técnica.
                </p>

                <p className="text-sm font-regular text-[#D3D5D9]">
                  Confira abaixo os principais motivos para escolher o Site.Set
                  como plataforma da sua loja online.
                </p>

                <ol className="list-disc flex flex-col gap-0.5 ml-5">
                  <li className="text-[#D3D5D9] font-regular text-sm">
                    <strong>Criação rápida e sem complicações</strong> SCom o
                    Site.Set, você não precisa lidar com códigos ou
                    configurações complexas. A plataforma oferece um processo de
                    criação intuitivo, permitindo que sua loja fique pronta em
                    poucos minutos, com layout profissional e estrutura
                    otimizada.
                  </li>
                  <li className="text-[#D3D5D9] font-regular text-sm">
                    <strong>Design moderno e adaptável</strong>
                    Sua loja é automaticamente responsiva, garantindo uma
                    navegação perfeita em celulares, tablets e computadores.
                    Isso melhora a experiência do usuário e aumenta as chances
                    de conversão, independentemente do dispositivo utilizado.
                  </li>
                  <li className="text-[#D3D5D9] font-regular text-sm">
                    <strong>Gerenciamento simples de produtos</strong>{" "}
                    Cadastrar, editar e organizar seus produtos nunca foi tão
                    fácil. O Site.Set permite controlar preços, descrições,
                    imagens e estoque de forma centralizada, facilitando a
                    gestão do seu negócio no dia a dia.
                  </li>
                  <li className="text-[#D3D5D9] font-regular text-sm">
                    <strong>Pagamentos seguros e integrados</strong> A
                    plataforma conta com integração a diferentes meios de
                    pagamento, oferecendo segurança tanto para você quanto para
                    seus clientes. Isso torna o processo de compra mais
                    confiável e reduz o abandono de carrinho.
                  </li>
                  <li className="text-[#D3D5D9] font-regular text-sm">
                    <strong>Ferramentas para crescer e vender mais</strong> Além
                    da estrutura da loja, o Site.Set oferece recursos pensados
                    para o crescimento do seu negócio, como otimização para SEO,
                    carregamento rápido das páginas e suporte especializado
                    sempre que você precisar.
                  </li>
                </ol>

                <p className="text-sm font-regular text-[#D3D5D9]">
                  Criar uma loja virtual eficiente não precisa ser complicado.
                  Com o Site.Set, você tem tudo o que precisa para vender online
                  com profissionalismo, segurança e praticidade. Comece hoje
                  mesmo e leve seu negócio para o próximo nível.
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
            <Link href="/transformando-seu-negocio-em-uma-loja-virtual">
              <CardArticle
                src="/blog/thumb/transformando-seu-negocio-em-uma-loja-virtual.png"
                date="20/12/24"
                title="Transformando seu negócio em uma loja virtual"
                description="Se você está buscando uma maneira simples e eficaz de vender seus produtos online, o Site.Set é a solução perfeita para você. Criar uma loja virtual de sucesso nunca foi tão fácil. Com nossa plataforma intuitiva, você pode criar um site profissional para sua loja em minutos, sem precisar de conhecimentos técnicos."
                peopleImage="/aspen-dokidis.png"
                peopleName="Aspen Dokidis"
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
