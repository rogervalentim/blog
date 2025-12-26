import Image from "next/image";

interface CardArticleProps {
  title: string;
  description: string;
  src: string;
  date: string;
  peopleImage: string;
  peopleName: string;
}

export const CardArticle = ({
  title,
  description,
  src,
  date,
  peopleImage,
  peopleName
}: CardArticleProps) => {
  return (
    <div className="w-full h-full bg-[#14161A] overflow-hidden relative rounded-xl border border-[#20242C] p-2">
      <div className="absolute top-0 right-0 w-[75px] h-[34px] bg-[#14161A] rounded-bl-[10px] flex justify-center items-center">
        <p className="font-regular text-xs text-[#93979E]">{date}</p>
      </div>
      <Image
        src={src}
        alt={title}
        height={144}
        width={289}
        className="w-full h-auto"
      />
      <h2 className="text-base font-bold pt-sans text-[#E9EAEC] mt-4">
        {title}
      </h2>
      <p className="text-xs font-regular text-[#93979E] mt-2">{description}</p>
      <div className="w-full h-px bg-[#20242C] mt-3"></div>
      <div className="mt-3 flex items-center gap-2">
        <Image src={peopleImage} alt={peopleName} height={20} width={20} />
        <h3 className="text-xs font-regular text-[#93979E] ">{peopleName}</h3>
      </div>
    </div>
  );
};
