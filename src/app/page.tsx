"use client";
import Link from "next/link";
import React, { useState } from "react";
import Particles from "./components/particles";

// ナビゲーションリンクの配列
const navigation = [
  { name: "Top", href: "/" },
  { name: "About", href: "/about" },
  { name: "Member", href: "/member" },
  { name: "Projects", href: "/projects" },
  { name: "Events", href: "/events" },
  { name: "Recruitments", href: "/recruitment" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-white via-gray-200 to-white">
      {/* ナビゲーションバー */}
      <nav className="my-16 animate-fade-in">
        <div className="flex items-center justify-between w-full px-4 md:px-8">
          <ul className="hidden md:flex items-center justify-center gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm duration-500 text-black hover:text-gray-700"
              >
                {item.name}
              </Link>
            ))}
          </ul>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
              title={isOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <ul className="flex flex-col items-center mt-4 space-y-4 md:hidden">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm duration-500 text-black hover:text-gray-700"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        )}
      </nav>
      {/* パーティクルエフェクト */}
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
      {/* メインタイトル */}
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-black cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Liberal Visions
      </h1>
      {/* グラデーションライン */}
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-black/0 via-black/50 to-black/0" />
      {/* プロジェクトの説明 */}
      <div className="my-16 text-center animate-fade-in font-serif font-style: italic font-bold">
        <h2 className="text-sm text-black sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          次世代リーダーと共に未来を切り開く
        </h2>
      </div>
    </main>
  );
}
