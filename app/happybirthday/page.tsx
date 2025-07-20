"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
      {/* Side Photos */}
      <div className="hidden xl:block">
        {/* Photo L1 */}
        <div className="absolute flex flex-col items-center top-0 right-20 z-2 animate-fade-down animate-once animate-duration-1000 animate-delay-[2100ms] animate-ease-in">
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
        <div className="absolute flex flex-col items-center top-0 left-20 z-2 animate-fade-down animate-once animate-duration-1000 animate-delay-[2600ms] animate-ease-in">
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
        <div className="absolute flex flex-col items-center top-100 right-20 z-1 animate-fade-down animate-once animate-duration-1000 animate-delay-[3100ms] animate-ease-in">
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
        <div className="absolute flex flex-col items-center top-150 left-20 z-1 animate-fade-down animate-once animate-duration-1000 animate-delay-[3600ms] animate-ease-in">
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
        <div className="absolute flex flex-col items-center top-250 right-20 z-0 animate-fade-down animate-once animate-duration-1000 animate-delay-[4100ms] animate-ease-in">
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
        <div className="absolute flex flex-col items-center top-300 left-20 z-0 animate-fade-down animate-once animate-duration-1000 animate-delay-[4600ms] animate-ease-in">
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
      <div className="flex flex-col items-center gap-8 z-1">
        <h1 className="text-4xl font-bold animate-bounce animate-infinite animate-duration-[2000ms] animate-ease-in text-center">
          🎉
          <br className="2xl:hidden" />
          Happy Birthday <span className="text-cyan-700">Elaine</span>!
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
        </p>

        <h1 className="text-4xl font-bold animate-bounce animate-infinite animate-duration-[2000ms] animate-ease-in text-center">
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
        </p>

        <h1 className="text-4xl font-bold animate-bounce animate-infinite animate-duration-[2000ms] animate-ease-in text-center">
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
        </p>

        <Link
          href={"/"}
          className="text-3xl bg-white/70 px-4 py-3 rounded-2xl animate-wiggle animate-infinite animate-duration-[3000ms] animate-ease-in hover:bg-white hover:scale-105 text-center"
        >
          🎁 main gift!!
        </Link>
      </div>
    </div>
  );
}
