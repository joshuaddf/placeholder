import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import starSvg from '../../public/svg/Star.svg';
import workspace from '../../public/images/workspace.png'
import creativeWorkspace from '../../public/images/creative-workspace.png'
import HowWeCanHelp from "@/components/howWeCanHelp/HowWeCanHelp";
import Button from "@/components/button/Button";
import Link from "next/link";
import Work from "@/components/work/Work";
import { HeroTextAnime, ImageParallax, MarqueeAnime, SectionAnime, SectionParallax } from "@/components/Anime";

export default function Home() {

  return (
    <main>
      <section className="h-[100vh]">
        <Wrapper classname="mt-15 md:mt-32 lg:mt-10">
          <HeroTextAnime className="uppercase font-oswald font-bold text-5xl md:text-6xl lg:text-8xl md:max-w-2/3 max-w-[90%] leading-12 md:leading-15 lg:leading-24 tracking-tight">Filling the gaps for ideas still in progress.</HeroTextAnime>
        </Wrapper>

        <div className="border-[.5px] border-dark-grey/20 mt-8 md:mt-10 " />

        <Wrapper>
          <div className="lg:flex  items-start  max-w-full py-8 md:py-3">
            <div className="w-full flex flex-col items-start h-full gap-3">
              <p className="capitalize small-text text-primary bg-secondary px-3 py-2">Start something - Even if it's not ready.</p>
              <p className="font-suisse-bold text-xl leading-5 text-dark-grey max-w-3/4 mt-5 uppercase">crafting narratives for digital voids.</p>
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
              <div className="max-w-3/4 md:max-w-1/2 aspect-video bg-dark-grey"></div>
            </div>
          </div>
        </Wrapper>
        <div className="bg-accent w-full h-20 md:h-32 flex items-start overflow-hidden mt-10 md:mt-2 ">
          <MarqueeAnime className="uppercase text-6xl md:text-7xl lg:text-9xl font-bold tracking-tighter font-oswald px-3">
            We are Placeholder. We are Placeholder. We are Placeholder. We are Placeholder.
          </MarqueeAnime>
        </div>

      </section>


      <SectionParallax className="w-full bg-secondary py-20 md:py-28">
        <Wrapper>
          <div className="w-full flex items-start gap-4">
            <p className="text-primary font-suisse-bold text-xl leading-6 md:leading-9 lg:leading-13  md:text-3xl lg:text-5xl indent-10 md:indent-26">
              We’re not here to be final. We’re here to explore, test, iterate — to build without overthinking and evolve without permission. Placeholder gives your unfinished work a home.
            </p>
          </div>

          <div className="w-full mt-20 overflow-hidden">
            <ImageParallax>
              <Image
                src={workspace}
                width={1440}
                height={550}
                alt="creative workspace"
                className="w-full h-full object-cover"
              />
            </ImageParallax>
          </div>

          <div className="flex-col flex items-center md:flex-row mt-18 w-full gap-10">
            <p className="text-primary flex-1 md:max-w-2/3 lg:max-w-3/4 font-suisse-regular font-semibold tracking-wide text-base leading-5 md:leading-7 lg:leading-9 md:text-xl lg:text-3xl">At Placeholder, we help creators, teams, and builders move from idea to iteration — faster, smarter, and without the pressure of perfection.</p>
            <div className="flex-1 flex w-full max-h-64">
              <HowWeCanHelp />
            </div>
          </div>
        </Wrapper>
      </SectionParallax>


      <section className="bg-primary my-15">
        <Wrapper>
          <div className="flex flex-col items-start">
            <h3 className="font-oswald font-extrabold uppercase text-5xl md:text-5xl lg:text-6xl pb-2">What you can expect.</h3>
            <p className="font-suisse-regular text-dark-grey text-sm md:text-lg leading-4 md:leading-5 font-semibold max-w-4/5 md:max-w-1/2"> Placeholder is built on the belief that creation doesn’t need perfection to begin.
              It’s a space to explore, experiment, and evolve — where ideas grow at their own pace
              and every version counts. Here, progress isn’t about getting it right, but about
              starting, staying curious, and letting things take shape naturally.</p>
            <Button variant="default" className="mt-3 md:mt-4"><Link href="/about-us">Read more</Link></Button>
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

      <section className="pt-15 md:pt-20">
        <Wrapper>
          <div className="flex items-center gap-1 mb-10">
            <h3 className="font-oswald font-extrabold text-5xl md:text-6xl lg:text-8xl relative uppercase">Our works</h3>
            <span className="text-sm md:text-3xl font-extrabold">(4)</span>
          </div>
          <div className="flex flex-col items-center gap-10 mb-20">
            <Work />
            <Button variant="default">View all our works</Button>
          </div>
        </Wrapper>
      </section>
    </main>
  );
}
