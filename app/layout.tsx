import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
        className={`${geistSans.variable} antialiased h-full`}
      >
        <div className="from-pink-100 to-pink-200 bg-gradient-to-b flex items-center flex-col">
          <div className="flex flex-col items-center min-h-screen gap-4 w-10/12 pt-4 pb-12">
            <Header />
            <hr className="border-pink-900" />
            <div className="grow">{children}</div>
            {/* <Footer /> */}
          </div>
        </div>
      </body>
    </html>
  );
}
