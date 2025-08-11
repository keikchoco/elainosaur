"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import TextCursor from "../../components/TextCursor";
import Particles from "./Particles";
import ScrollReveal from "./ScrollReveal";

export default function HappyBirthday() {
  const [openJump, setOpenJump] = useState(true);

  useEffect(() => {
    if (openJump) {
      document.body.style.overflowY = "hidden";
    } else document.body.style.overflowY = "scroll";
    return () => {};
  }, [openJump]);

  return (
    <div>
      <div className="w-full h-full absolute z-0 top-0 left-0">
        <Particles
          particleColors={["#f7a1ff", "#f7a1ff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={true}
        />
      </div>

      {/* Side Photos */}
      <div className="hidden xl:block z-998">
        {/* Photo L1 */}
        <div className="absolute flex flex-col items-center top-0 right-20 z-4 animate-fade-down animate-once animate-duration-1000 animate-delay-[2100ms] animate-ease-in">
          <div className="w-0.5 shadow h-50 bg-amber-950/40"></div>
          <div className="animate-wiggle animate-reverse animate-infinite animate-duration-[5000ms] animate-delay-[2100ms] animate-ease-in-out w-fit h-fit">
            <Image
              src={"/images/BirthdayImage1.png"}
              alt=""
              width={200}
              height={250}
              className="shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        </div>

        {/* Photo R1 */}
        <div className="absolute flex flex-col items-center top-0 left-20 z-4 animate-fade-down animate-once animate-duration-1000 animate-delay-[2600ms] animate-ease-in">
          <div className="w-0.5 shadow h-100 bg-amber-950/40"></div>
          <div className="animate-rotate-y animate-infinite animate-duration-[12000ms] animate-delay-[2600ms] animate-ease-linear w-fit h-fit">
            <Image
              src={"/images/BirthdayImage2.png"}
              alt=""
              width={200}
              height={250}
              className="shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        </div>

        {/* Photo L2 */}
        <div className="absolute flex flex-col items-center top-100 right-20 z-3 animate-fade-down animate-once animate-duration-1000 animate-delay-[3100ms] animate-ease-in">
          <div className="w-0.5 shadow h-100 bg-amber-950/40"></div>
          <div className="animate-rotate-y animate-reverse animate-infinite animate-duration-[12000ms] animate-delay-[3100ms] animate-ease-linear w-fit h-fit">
            <Image
              src={"/images/BirthdayImage3.png"}
              alt=""
              width={200}
              height={250}
              className="shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        </div>

        {/* Photo R2 */}
        <div className="absolute flex flex-col items-center top-150 left-20 z-3 animate-fade-down animate-once animate-duration-1000 animate-delay-[3600ms] animate-ease-in">
          <div className="w-0.5 shadow h-100 bg-amber-950/40"></div>
          <div className="animate-wiggle animate-infinite animate-duration-[6000ms] animate-delay-[3600ms] animate-ease-in-out w-fit h-fit">
            <Image
              src={"/images/BirthdayImage4.png"}
              alt=""
              width={200}
              height={250}
              className="shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        </div>

        {/* Photo L3 */}
        <div className="absolute flex flex-col items-center top-250 right-20 z-2 animate-fade-down animate-once animate-duration-1000 animate-delay-[4100ms] animate-ease-in">
          <div className="w-0.5 shadow h-100 bg-amber-950/40"></div>
          <div className="animate-wiggle animate-reverse animate-infinite animate-duration-[5000ms] animate-delay-[4100ms] animate-ease-in-out w-fit h-fit">
            <Image
              src={"/images/BirthdayImage5.png"}
              alt=""
              width={200}
              height={250}
              className="shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        </div>

        {/* Photo R3 */}
        <div className="absolute flex flex-col items-center top-300 left-20 z-2 animate-fade-down animate-once animate-duration-1000 animate-delay-[4600ms] animate-ease-in">
          <div className="w-0.5 shadow h-100 bg-amber-950/40"></div>
          <div className="animate-rotate-y animate-infinite animate-duration-[12000ms] animate-delay-[4600ms] animate-ease-linear w-fit h-fit">
            <Image
              src={"/images/BirthdayImage6.png"}
              alt=""
              width={200}
              height={250}
              className="shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>

      <div
        className="z-999 w-screen h-full bg-pink-950 fixed top-0 left-0 flex flex-col items-center justify-center animate-flip-down animate-duration-500 animate-delay-[2000ms] animate-ease-in animate-reverse"
        onAnimationEnd={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          setOpenJump(false);
        }}
      >
        <h1 className="text-4xl font-bold animate-bounce animate-infinite animate-duration-[2000ms] animate-ease-in text-white text-center">
          🎉
          <br className="2xl:hidden" />
          Happy Birthday{" "}
          <span className="text-cyan-700">
            <br className="2xl:hidden" />
            Elaine
          </span>
          !<br className="2xl:hidden" />
          🎉
        </h1>
      </div>

      <div className="flex flex-col items-center gap-8 z-998">
        <h1 className="text-4xl font-bold animate-bounce animate-infinite animate-duration-[2000ms] animate-ease-in text-center text-black/80">
          🎉
          <br className="2xl:hidden" />
          Happy Birthday <span className="text-cyan-700">Elaine</span>!
          <br className="2xl:hidden" />
          🎉
        </h1>
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
          textClassName="text-xl/10 text-black/90 text-justify"
        >
          Hello elaineee!! Happy happy happy birthday to youuu!! 🎉🎂 I hope you
          enjoy your day todayyy!! I hope you have an amazing birthday filled
          with love and happiness. You deserve all the good things in life! I
          hope you have an amazing birthday filled with love🎉🫶
        </ScrollReveal>

        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
          textClassName="text-xl/10 text-black/90 text-justify"
        >
          I prepared this gift for you- it's my first time doing this, I hope
          you like it (ansama talaga ng ugali mo pag d mo nagustuhan to!!😤
          HAHAHAHA KIDDING). It's something simple but I think you'll like it :3
        </ScrollReveal>

        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
          textClassName="text-lg/10 text-black/90 text-justify m-auto"
        >
          (It was so hard to keep shut about this btw- took too much effort to not say anything for so long)
        </ScrollReveal>
        <br />

        <h1 className="text-4xl font-bold animate-bounce animate-infinite animate-duration-[2000ms] animate-ease-in text-center text-black/80">
          🎉
          <br className="2xl:hidden" />
          First things first!
          <br className="2xl:hidden" />
          🎉
        </h1>
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
          textClassName="text-xl/10 text-black/90 text-justify"
        >
          I would like to say thank you for being such a wonderful friend
          (friend nga ba🤨 jk HAHSHAFHA) jokes aside! Thank you for letting me
          in your life and letting me court you- I'm having so much fun spending
          time with you- and I hope you are too. It's kinda hard to put into
          words, but I just want you to know how much I appreciate you elaine🫶
          you really are special and I hope you see that in yourself too. Thank
          you for all the time and effort that you've put into building what we
          are right now- it's not far but progress is progress :3
        </ScrollReveal>
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
          textClassName="text-xl/10 text-black/90 text-justify"
        >
          I know life hasn't always been good to you, but I hope you know that
          you are loved and appreciated. You have so many people who care about
          you, including me!! I hope you can find joy in the little things and
          remember that it's okay to lean on others for support. Always remember
          that I'll always be here for you, cheering you on and supporting you
          in everything you do through the ups and downs of your life. You are
          strong and capable, and I believe in you! 🫶
        </ScrollReveal>
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
          textClassName="text-xl/10 text-black/90 text-justify"
        >
          I don't even know what to put in this anymore, I'm just out of words
          (writing this at 2am btw,, secret na kung anong date kasi malalaman mo
          kung gano kahaba ko plinano gawin to HSHSAHAHHA) I had tons of fun
          preparing this for you :))
        </ScrollReveal>
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
          textClassName="text-xl/10 text-black/90 text-justify"
        >
          Have you seen the pictures on the side? (you wont see it if you're on
          your phone man- view it on desktop to get the full experience) I hope
          you like them! I hope they make your day even more special! I found it
          really cute when I made that hehe (siguro kasi ikaw laman nung pic and
          I always find you cute,, but who knows 🤷‍♂️)
        </ScrollReveal>

        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
          textClassName="text-xl/10 text-black/90 text-justify"
        >
          I really have so much more that I want to say, but I can't put it into
          words anymore- just know that I'll always be here supporting you and
          rooting for your success in life. I hope that you continue to be
          motivated in the things that you enjoy to do. Your art? All I can
          really say is slay! You're so good at it and I hope you don't let the
          flame in you burn out- I enjoy seeing your artworks so much. I hope
          that whatever's inspiring you right now continues to do so (sana ako
          charot HAHAHAHAHAH).
        </ScrollReveal>

        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
          textClassName="text-xl/10 text-black/90 text-justify"
        >
          I hope we get to spend more time together in the future, I really
          really really love hanging out with you man 🫶 more inuman sessions?!?!
          HAHAHAHAHA
        </ScrollReveal>

        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
          textClassName="text-xl/10 text-black/90 text-justify"
        >
          Okay enough yapping (napakayapper talaga kahit kelan jusko) I hope you
          enjoy your gift!! 🥳 x
        </ScrollReveal>

        {/* <br /> */}
        {/* <h1 className="text-4xl font-bold animate-bounce animate-infinite animate-duration-[2000ms] animate-ease-in text-center">
          🎉
          <br className="2xl:hidden" />
          blep asd!
          <br className="2xl:hidden" />
          🎉
        </h1>
        <p className="text-xl/10 text-black/90 text-justify w-10/12 2xl:w-8/12">
          Wishing you a wonderful day filled with joy and laughter! Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Cupiditate odit sunt
          eaque nobis omnis vitae, blanditiis iste! Expedita assumenda, delectus
          libero error quos earum accusantium! Error molestiae ipsa animi quo.
          Aperiam beatae aliquid quod totam tempore? Sed doloribus alias
          voluptates modi quis atque molestias. Maiores voluptate totam
          repudiandae cupiditate aliquid. Alias nobis aliquam impedit enim
          perspiciatis harum totam esse molestiae. Sed, maiores! Repudiandae
          quae sunt dolor vitae, consequuntur assumenda reprehenderit magni
          sint, quos ad doloribus aliquam nulla, accusantium velit? Placeat
          consectetur amet, molestiae mollitia odit quam provident iste et
          cumque. Cum itaque qui suscipit veritatis aspernatur maxime voluptates
          assumenda, sequi fugiat, sed, atque aliquid unde? Rem eligendi
          molestias inventore exercitationem impedit doloribus repellat nihil
          atque libero. Aspernatur culpa accusamus optio! Ab magnam enim
          dignissimos veritatis incidunt itaque quod neque quaerat nemo quae, ea
          assumenda maxime totam quo at! Sed velit nostrum qui impedit
          necessitatibus minus officiis aperiam rem ratione beatae. Vitae,
          perferendis ipsum esse ex hic laborum. Tempora, accusantium facilis
          laudantium magnam sapiente ipsam sequi eveniet deserunt.
        </p> */}

        <br />
        {/* <br /> */}
        <Link
          href={"/"}
          className="text-3xl bg-white/70 px-4 py-3 rounded-2xl animate-wiggle animate-infinite animate-duration-[3000ms] animate-ease-in hover:bg-white hover:scale-105 text-center z-998 text-black/80"
        >
          🎁 main gift!!
        </Link>
      </div>

      <TextCursor
        text="🐈"
        delay={0.01}
        spacing={80}
        followMouseDirection={true}
        randomFloat={true}
        exitDuration={0.3}
        removalInterval={20}
        maxPoints={10}
      />
    </div>
  );
}
