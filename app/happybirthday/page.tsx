import Image from "next/image";
import Link from "next/link";

export default function HappyBirthday() {
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-4xl font-bold animate-bounce animate-infinite animate-duration-[2000ms] animate-ease-in">🎉Happy Birthday <span className="text-cyan-700">Elaine</span>!🎉</h1>
      <p className="text-xl/10 text-black/90 text-justify w-8/12">
        Wishing you a wonderful day filled with joy and laughter! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate odit sunt eaque nobis omnis vitae, blanditiis iste! Expedita assumenda, delectus libero error quos earum accusantium! Error molestiae ipsa animi quo.
        Aperiam beatae aliquid quod totam tempore? Sed doloribus alias voluptates modi quis atque molestias. Maiores voluptate totam repudiandae cupiditate aliquid. Alias nobis aliquam impedit enim perspiciatis harum totam esse molestiae.
        Sed, maiores! Repudiandae quae sunt dolor vitae, consequuntur assumenda reprehenderit magni sint, quos ad doloribus aliquam nulla, accusantium velit? Placeat consectetur amet, molestiae mollitia odit quam provident iste et cumque.
        Cum itaque qui suscipit veritatis aspernatur maxime voluptates assumenda, sequi fugiat, sed, atque aliquid unde? Rem eligendi molestias inventore exercitationem impedit doloribus repellat nihil atque libero. Aspernatur culpa accusamus optio!
        Ab magnam enim dignissimos veritatis incidunt itaque quod neque quaerat nemo quae, ea assumenda maxime totam quo at! Sed velit nostrum qui impedit necessitatibus minus officiis aperiam rem ratione beatae.
        Vitae, perferendis ipsum esse ex hic laborum. Tempora, accusantium facilis laudantium magnam sapiente ipsam sequi eveniet deserunt. Aspernatur nulla ducimus doloribus perferendis iusto suscipit voluptas quas maiores ex cumque. Natus.
        Rem rerum officiis aut itaque est maxime consequatur vero, blanditiis, praesentium ipsum quo sunt assumenda id facere distinctio ut reiciendis doloribus commodi suscipit non! Fugit nulla non odio illo doloremque!
        Quos eius commodi ad corrupti? A earum, inventore nostrum natus obcaecati, ea rerum et debitis exercitationem sit enim dolor magnam ad quas quasi itaque doloremque placeat accusantium voluptatum tempora dolores.
        Perspiciatis nesciunt, pariatur asperiores tempora error voluptatibus optio architecto nostrum adipisci rem ducimus ut voluptatum possimus cumque necessitatibus perferendis debitis exercitationem ipsam. Voluptatum magnam nostrum nihil praesentium, recusandae quaerat eaque.
        Facilis minima accusantium modi numquam quod repudiandae molestias, natus suscipit nesciunt. Asperiores, voluptas! Cumque laborum asperiores sequi libero, aliquam beatae voluptates cupiditate ratione, recusandae similique aspernatur at fugit voluptate vero?
      </p>
      <Image
        width={256}
        src="/images/birthday-cake.png"
        alt="Birthday Cake"
        className="w-64 h-auto"
      />
      
      <Link href={"/"} className="text-3xl bg-white/70 px-4 py-3 rounded-2xl animate-wiggle animate-infinite animate-duration-[3000ms] animate-ease-in hover:bg-white hover:scale-105">🎁 Take me to the gift!!</Link>
    </div>
  );
}
