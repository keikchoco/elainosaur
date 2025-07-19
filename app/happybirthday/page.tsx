import Image from "next/image";
import Link from "next/link";

export default function HappyBirthday() {
  return (
    <div>
      <div className="z-2 w-screen h-full bg-pink-950 absolute top-0 left-0 flex flex-col items-center justify-center animate-flip-down animate-duration-500 animate-delay-[2000ms] animate-ease-in animate-reverse">
        <h1 className="text-4xl font-bold animate-bounce animate-infinite animate-duration-[2000ms] animate-ease-in text-white text-center">
          🎉<br className="2xl:hidden"/>Happy Birthday <span className="text-cyan-700"><br className="2xl:hidden"/>Elaine</span>!<br className="2xl:hidden"/>🎉
        </h1>
      </div>
      <div className="flex flex-col items-center gap-8 z-1">
        <h1 className="text-4xl font-bold animate-bounce animate-infinite animate-duration-[2000ms] animate-ease-in text-center">
          🎉<br className="2xl:hidden"/>Happy Birthday <span className="text-cyan-700">Elaine</span>!<br className="2xl:hidden"/>🎉
        </h1>
        <p className="text-xl/10 text-black/90 text-justify w-8/12">
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
          🎁 <br className="2xl:hidden"/>Take me to the gift!!
        </Link>
      </div>
    </div>
  );
}
