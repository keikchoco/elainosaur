import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full px-3 py-2 flex flex-row items-center">
      <h1 className="flex items-center gap-2 text-xl font-semibold m-auto">
        <Image 
            src={"/images/heart.png"}
            alt="heart"
            width={24}
            height={24}
        />
        elainosaur
        </h1>
    </header>
  );
}
