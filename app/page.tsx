import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import Section from "./components/section";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <>
      <Header />

      <div className="flex justify-center">
        <div className="mt-12 mb-6 mx-6 w-[710px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6">
            <Section
              delay={0.7}
              className="mb-8 aspect-h-2 aspect-w-square overflow-hidden rounded-md"
            >
              <Image
                className="mb-8 rounded-md hover:scale-105 duration-200"
                src="/images/DSC03307.jpg"
                alt=""
                style={{ objectFit: "cover", objectPosition: "65%" }}
                width={710}
                height={100}
                quality={90}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </Section>

            <Section delay={0.9} className="mb-8 col-span-2">
              <h1 className="mb-8 text-[1.25rem] lg:text-3xl font-semibold">
                Hi there, I&apos;m y3sterd4y 😊
              </h1>
              <p className="mb-6 text-[1.05rem] md:text-justify leading-relaxed">
                I&apos;m currently a student at{" "}
                <a
                  href="https://www.spu.ac.th/"
                  target="_blank"
                  className="text-pink-400"
                >
                  Sripatum University{" "}
                </a>
                studying Information and Communication Technology. Even though I
                prefer to create front-end-only websites, I&apos;ll keep trying.
                I enjoy finding challenges for myself.
              </p>
              <p className="md:text-justify">
                I like the pixel art aesthetic and would like to make video
                games. In addition, I like to watch anime ⚔️, play video games
                🎮, and am a{" "}
                <a
                  href="https://www.rockstargames.com/"
                  target="_blank"
                  className="text-[#ffab00]"
                >
                  RockstarGames💛
                </a>{" "}
                fan.
              </p>
            </Section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
