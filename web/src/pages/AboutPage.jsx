import About from '../assets/about.jpg'

const AboutPage = () => {
  return (
    <section className="grid h-screen place-items-center">
      <h1 className=" text-black font-semibold text-4xl">About me!</h1>
      <div className="mx-24">
      <div className="flex justify-center mt-2">
        <img className="w-[400px] rounded" src={About} alt="about me" />
      </div>
        <p className="p-4 text-justify mt-2">
          Welcome to my blog! Proin congue ligula id risus posuere, vel eleifend
          ex egestas. Sed in turpis leo. Aliquam malesuada in massa tincidunt
          egestas. Nam consectetur varius turpis, non porta arcu porttitor non.
          In tincidunt vulputate nulla quis egestas. Ut eleifend ut ipsum non
          fringilla. Praesent imperdiet nulla nec est luctus, at sodales purus
          euismod.
        </p>
        <p className="p-4 text-justify mt-2">
          Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices
          dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu.
          Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas
          viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo
          luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue
          tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam.
          Vivamus accumsan dui in facilisis aliquet.,
        </p>
        <p className="p-4 text-justify mt-2">
          Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit
          tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan
          nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec
          finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi
          vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac
          vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus
          accumsan dui in facilisis aliquet.,
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
