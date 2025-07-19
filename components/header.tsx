import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full px-3 py-2 flex flex-row justify-between">
      <h1 className="flex items-center gap-2 text-xl font-semibold">
        <Image src={"/images/heart.png"} alt="heart" width={24} height={24} />
        elainosaur
      </h1>
      <div className="flex flex-row gap-4 *:font-semibold *:text-md *:text-pink-700 *:hover:text-pink-900">
        <Link
          href={"/"}
        >
          Home
        </Link>
        <Link
          href={"/happybirthday"}
        >
          Birthday 🎉
        </Link>
      </div>
    </header>
  );
}
