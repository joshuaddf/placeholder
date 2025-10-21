import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import starSvg from '../../public/svg/Star.svg';
import workspace from '../../public/images/workspace.png'
import creativeWorkspace from '../../public/images/creative-workspace.png'
import HowWeCanHelp from "@/components/howWeCanHelp/HowWeCanHelp";
import { paragraphs, sentences } from "@/utils/data";
import Button from "@/components/button/Button";
import Link from "next/link";

export default function Home() { 

  return (
    <main>
      <div className="">

        <Wrapper>
          <h1 className="uppercase font-oswald font-bold text-[9vw] w-full  pt-17 md:pt-10 leading-10 md:leading-18 lg:leading-32">Filling the gaps for ideas still in progress.</h1>
        </Wrapper>

        <div className="border-[.5px] border-dark-grey/20 mt-15 md:mt-28 " />

        <Wrapper>
          <div className="lg:flex  items-start  max-w-full py-8 md:py-3">
            <div className="w-full flex items-start h-full gap-3"> 
              <p className="capitalize small-text text-primary bg-secondary px-3 py-2">Start something - Even if it's not ready.</p>
              {/* <span className="size-8"> 
                <Image
                  src={starSvg}
                  width={200}
                  height={200}
                  alt="star svg"
                />
              </span> */}
            </div>

            <div className="w-full h-full my-20 lg:mb-20 lg:mt-0">
              <div className="max-w-110 min-h-60 bg-dark-grey"></div>
            </div>
          </div>
        </Wrapper>
      </div>

      <section className="w-full bg-secondary  py-32">
        <Wrapper>
          <div className="w-full flex items-start gap-4">
            <span className=" flex">
              <Image
                src={starSvg}
                width={50}
                height={50}
                alt="star"
                className="size-6 md:size-10 lg:size-14"
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
          <div className="flex-col flex items-center md:flex-row mt-24 w-full gap-10">
            <p className="text-primary flex-1 md:max-w-2/3 lg:max-w-3/4 font-suisse-regular font-semibold tracking-wide text-lg leading-6 md:leading-9 md:text-xl lg:text-3xl">At Placeholder, we help creators, teams, and builders move from idea to iteration — faster, smarter, and without the pressure of perfection.</p>
            <div className="flex-1 flex w-full max-h-64">
                <HowWeCanHelp />
            </div>
          </div>
        </Wrapper>
      </section>


      <section className="bg-primary h-screen my-15">
        <Wrapper>
          <div className="flex flex-col items-start">
            <h3 className="font-oswald font-extrabold uppercase text-[5vw]">What you can expect.</h3>
            { paragraphs.map((paragraph, index) => (
              <p key={index} className="font-suisse-regular text-dark-grey text-sm md:text-lg leading-5 font-semibold max-w-4/5 md:max-w-1/2">{paragraph}</p>
            )) }
          <Button variant="default" className="mt-3 md:mt-5"><Link href="/about-us">Read more</Link></Button>
          </div>
          <div className="relative max-w-3/4 md:max-w-1/2 aspect-video mt-5">
            <Image
              src={creativeWorkspace}
              objectFit="cover"
              fill
              alt="Image description"
            />
          </div>
        </Wrapper>
      </section>
    </main>
  );
}
