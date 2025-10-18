import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import starSvg from '../../public/svg/Star.svg';
import workspace from '../../public/images/workspace.png'

export default function Home() {

  const sentences = ["explore, test, iterate — to build without", "overthinking and evolve without permission.", "Placeholder gives your unfinished work a", "home."]

  return (
    <main>
      <div className="">

        <Wrapper>
          <h1 className="uppercase font-oswald text-5xl md:max-w-3/4 md:text-6xl lg:text-9xl font-bold w-full pt-17 md:pt-10 leading-12 md:leading-18 lg:leading-30">Filling the gaps for ideas still in progress.</h1>
        </Wrapper>

        <div className="border-1 border-dark-grey mt-15 md:mt-28" />

        <Wrapper>
          <div className="lg:flex  items-start  max-w-full py-8 md:py-3">
            <div className="w-full center-content gap-3">
              <p className="capitalize small-text text-primary bg-secondary px-3 py-2">Start something - Even if it's not ready.</p>
              <span className="size-8">
                <Image
                  src={starSvg}
                  width={200}
                  height={200}
                  alt="star svg"
                />
              </span>
            </div>

            <div className="w-full h-full my-20">
              <div className="max-w-110 min-h-60 bg-dark-grey"></div>
            </div>
          </div>
        </Wrapper>
      </div>

      <section className="w-full bg-secondary py-20 md:py-32">
        <Wrapper>
          <div className="w-full flex items-start gap-4">
            <span className=" flex">
              <Image
                src={starSvg}
                width={50}
                height={50}
                alt="star"
                className="size-7 md:size-10 lg:size-14"
              />
              <p className="text-primary font-suisse-bold text-lg md:text-3xl lg:text-5xl pl-2 md:pl-7">We’re not here to be final. We’re here to</p>
            </span>
          </div>
          {sentences.map((sentence, index) => (
            <p key={index} className="text-primary font-suisse-bold text-lg md:text-3xl lg:text-5xl leading-6 md:leading-10 lg:leading-13">{sentence}</p>
          ))}

          <div className="w-full h-4/5 mt-10 md:mt-20">
            <Image
              src={workspace}
              width={1440}
              height={550}
              objectFit="center"
              alt="creative worskpace"
            />
          </div>
        </Wrapper>
      </section>
    </main>
  );
}
