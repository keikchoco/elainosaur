import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "../globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";

const geistSans = Rubik({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "elainosaur",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased h-full overflow-x-hidden`}
      >
        <div className="from-pink-100 to-pink-200 bg-gradient-to-b flex items-center flex-col">
          <div className="flex flex-col items-center min-h-screen gap-4 xl:w-8/12 pt-4 pb-12">
            <header className="w-full px-3 py-2 flex flex-row justify-center z-100">
              <h1 className="flex items-center gap-2 text-xl font-semibold">
                <Image
                  src={"/images/heart.png"}
                  alt="heart"
                  width={24}
                  height={24}
                />
                elainosaur
              </h1>
            </header>
            <hr className="border-pink-900" />
            <div className="grow">{children}</div>
            {/* <Footer /> */}
          </div>
        </div>
      </body>
    </html>
  );
}
